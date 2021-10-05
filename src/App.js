import React, { Component } from 'react';
// components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AppRoute from './App.Route';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<AppRoute articles={this.props.articles} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
