import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer
				className="w3-container w3-dark-grey w3-center"
				style={{ padding: 32 + 'px' }}
			>
				{/*<a href="#" className="w3-button w3-black w3-padding-large w3-margin-bottom"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>*/}
				<p>
					Powered by{' '}
					<a href="https://jonesprofile.netlify.app/" target="_blank" rel="noopener noreferrer">
						Jones
					</a>
				</p>
			</footer>
		);
	}
}

export default Footer;
