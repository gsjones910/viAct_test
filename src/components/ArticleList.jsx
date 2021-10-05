import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../redux/actions/articleActions';
import Button from '@material-ui/core/Button';
import { forwardRef } from 'react';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

import MaterialTable from 'material-table';
const tableIcons = {
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
  };

const stateMap = store => {
	return {
		articles: store.articles.articles,
	};
};

class ArticleList extends Component {
	constructor(props) {
		super(props)
		this.onSourceClick = this.onSourceClick.bind(this)
	}
	componentWillMount() {
		this.props.dispatch(fetchArticles());
	}

	onSourceClick(params) {
		console.log(params.target.id);
		let source = params.target.id;
		this.props.dispatch(fetchArticles(source));
	}

	render() {
		if (Object.getOwnPropertyNames(this.props.articles).length === 0) {
			return <div />;
		}
		console.log(this.props.articles)
		return (
			<div>
				<div className="w3-content" style={{ maxWidth: 1600 + 'px' }}>
					<header className="w3-container w3-center w3-padding-48 w3-white">
						<h1 className="w3-xxxlarge">
							<b>News Buzz</b>
						</h1>
						<h6>
							Latest News from around the{' '}
							<span className="w3-tag">world</span>
						</h6>
					</header>
				</div>
				<div className="w3-row w3-padding w3-border">
					<div className="w3-col l12 s12">
						<MaterialTable
							icons={tableIcons}
							title=""
							columns={[
								{ title: 'Image', field: 'urlToImage', sorting: false,
									render: rowData => <img src={rowData.urlToImage} style={{width: 250, borderRadius: 10}}/>
								},
								{ title: 'Source', field: 'source.name', sorting: false },
								{ title: 'Author', field: 'author', sorting: false },
								{ title: 'Title', field: 'title', sorting: false },
								{ title: 'Date', field: 'publishedAt' },
								{ title: 'URL', field: 'url', sorting: false,
									render: rowData => <Button href={rowData.url} target="_blank"  variant="outlined" color="primary">URL</Button>
								},
							]}
							data={this.props.articles}
							options={{
								sorting: true,
								searchFieldAlignment: "left"
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(stateMap)(ArticleList);
