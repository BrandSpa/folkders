import React, { Component } from "react";
import { gql, graphql, compose } from "react-apollo";

class TodoForm extends Component {
	state = {
		title: "",
		content: ""
	}

	handleChange = (field, e) => {
		this.setState({[field]: e.target.value});
	}
	
	handleSubmit = () => {
		console.log(this.state);
	}

	render() {
		return (
			<form action="">
			<input 
				type="text" 
				className="form-control"
				onChange={this.handleChange.bind(null, 'title')}
			/>
			<textarea
				rows="10" 
				className="form-control"
				onChange={this.handleChange.bind(null, 'content')}></textarea>
			<button className="btn" onClick={this.handleSubmit}>Add</button>
		</form>
		)
	}
}

export default TodoForm;