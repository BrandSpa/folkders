import React, { Component } from 'react';

class Header extends Component {
	render() {
		let headerStyle = {
			background: '#fff',
			height: '80px',
			width: '100%',
			padding: '10px 40px'
		};

		let logoStyle = {
			
		};

		return (
			<header style={headerStyle}>
				<img src="/logo.png" alt="" width="120px"/>
			</header>
		)
		
	}
}

export default Header;