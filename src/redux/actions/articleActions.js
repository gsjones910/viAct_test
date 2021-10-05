import axios from 'axios';

export function fetchArticles(source: string) {
	return function(dispatch) {
		if (source == null || source === null || source === 'all') {
			source =
				'cnn,espn,the-wall-street-journal,the-washington-post,the-new-york-times,the-next-web,the-verge';
		}
		const url =
			'https://newsapi.org/v2/top-headlines?' +
			'country=us&' +
			'source=' +
			source +
			'&' +
			'apiKey=abce2a0826664fa68e96b8c63f6ff0ce';
		axios
			.get(url)
			.then(response => {
				dispatch({
					type: 'FETCH_ARTICLES_FULFILLED',
					payload: response.data.articles,
				});
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ARTICLES_REJECTED', payload: error });
			});
	};
}
