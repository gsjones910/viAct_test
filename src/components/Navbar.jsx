import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div className="w3-bar w3-black w3-hide-small">
				<a
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					className="w3-bar-item w3-button"
				>
					<i className="fa fa-facebook-official" />
				</a>
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="w3-bar-item w3-button"
				>
					<i className="fa fa-instagram" />
				</a>
				<a
					href="https://www.snapchat.com"
					target="_blank"
					rel="noopener noreferrer"
					className="w3-bar-item w3-button"
				>
					<i className="fa fa-snapchat" />
				</a>
				<a
					href="https://www.flicker.com"
					target="_blank"
					rel="noopener noreferrer"
					className="w3-bar-item w3-button"
				>
					<i className="fa fa-flickr" />
				</a>
				<a
					href="https://www.twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					className="w3-bar-item w3-button"
				>
					<i className="fa fa-twitter" />
				</a>
				<a
					href="https://www.linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					className="w3-bar-item w3-button"
				>
					<i className="fa fa-linkedin" />
				</a>
				<a href="/" className="w3-bar-item w3-button w3-right">
					<i className="fa fa-search" />
				</a>
			</div>
		);
	}
}

export default Navbar;
