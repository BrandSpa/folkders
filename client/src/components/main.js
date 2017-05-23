import React from 'react';

class Main extends React.Component {
	render() {
		return (
			<div>main{this.props.children}</div>
		)
	}
}

export default Main;