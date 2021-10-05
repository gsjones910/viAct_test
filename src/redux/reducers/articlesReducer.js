export default function reducer(
	state = {
		articles: [],
		fetching: false,
		fetched: false,
		error: null,
	},
	action,
) {
	switch (action.type) {
		case 'FETCH_ARTICLES': {
			return { ...state, fetching: true };
		}
		case 'FETCH_ARTICLES_FULFILLED': {
			return {
				...state,
				fetching: false,
				fetched: true,
				articles: action.payload,
			};
		}
		case 'FETCH_ARTICLES_REJECTED': {
			return { ...state, fetching: false, error: action.payload };
		}
		default:
			return state;
	}
}
