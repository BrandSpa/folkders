import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getUsersQuery } from '../../queries/userQueries';
import { createTodoMutation } from '../../queries/todoQueries';

export class TodoForm extends Component {
	state = {
		title: "",
		content: "",
		assign_id: ""
	}
	
	handleChange = e => {
		this.setState({ [e.target.name] : e.target.value });
	}

	updateSubtodos = (proxy, { data }) => {

	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		const { title, content, assign_id } = this.state;
		const { todo = {}, project = {} } = this.props;
		const { selected } = project;

		this.props.createTodo({
			variables: {
				project_id: selected.id,
				todo_id: todo.id,
				title, 
				content, 
				assign_id
			},
			update: this.updateSubtodos
		}).then(data => console.log(data));
	}

	render() {
		const { getUsers = {} } = this.props;
		const { users = [], loading } = getUsers;

		return (
			<form action="">
				<div className="input-group">
					<input 
						placeholder="Title"
						type="text" 
						name="title"
						className="form-control"
						onChange={this.handleChange}
						value={this.state.title}
					/>
				</div>
				<div className="input-group">
					<select 
						name="assign_id" 
						className="form-control"
						onChange={this.handleChange}
						value={this.state.assign_id}
						>
						<option value="">Select user</option>
						{users.map(user => 
							<option key={user.id} value={user.id}>{user.name}</option>	
						)}
					</select>
				</div>
				<div className="input-group">
					<textarea 
						name="content" 
						className="form-control"
						rows="5" 
						onChange={this.handleChange}
						value={this.state.content}
						></textarea>
				</div>
				<div className="input-group">
					<button className="btn" onClick={this.handleSubmit}>Add</button>
				</div>
			
		</form>
		)
	}
}

export default compose(
  graphql(getUsersQuery, {name: 'getUsers'}),
  graphql(createTodoMutation, {name: 'createTodo'}),
)(TodoForm);
