import React, { Component } from 'react';

class Header extends Component {
	render() {
		let headerStyle = {
			background: '#fff',
			height: '80px',
			width: '100%'
		};

		let logoStyle = {
			
		};

		return (
			<div style={headerStyle}>
				<div>company logo</div>
			</div>
		)
		
	}
}

export default Header;