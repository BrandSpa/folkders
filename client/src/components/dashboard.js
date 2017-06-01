import React, { Component } from 'react';
import Clients from './clients';
import Projects from './projects';
import Tasks from './tasks';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			todo: {subtodos: []}
		}
	}

	changeProjects = (projects) => {
		this.setState({ projects });
	}

	changeTodos = (todo) => {
		console.log('change t', todo);
		this.setState({ todo });
	}

	render() {
		const { data } = this.props;
    const { clients = [] } = data;
		const defaultProjects = clients.length > 0 ? clients[0].projects : [];
		const projects = this.state.projects.length > 0 ? this.state.projects : defaultProjects;
		const defaultTodo = projects.length > 0 ? projects[0].todos[0] : this.state.todo;
		const todo = Object.keys(this.state.todo).length > 1 ? this.state.todo : defaultTodo;

		return (
			<div className="row">
				<div className="col-lg-3">
					<Clients changeProjects={this.changeProjects} {...this.props} />
				</div>
				<div className="col-lg-3">
					<Projects changeTodos={this.changeTodos} projects={projects}  />
				</div>
				<div className="col-lg-6">
					<Tasks todo={todo}  />
				</div>
			</div>
		)
	}

}

export default Dashboard;