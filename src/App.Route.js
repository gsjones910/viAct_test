import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import PageNotFound from './components/PageNotFound';

const AppRoute = () => (
	<app-route>
		<Switch>
			<Route exact path="/" component={ArticleList} />
			<Route exact path="/404" component={PageNotFound} />
		</Switch>
	</app-route>
);

export default AppRoute;
