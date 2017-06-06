import React, { Component } from 'react';
import ProjectTodos from './tasks';

class Projects extends Component {
	constructor(props) {
		super(props);
	}

	openTodos = (e) => {
		e.preventDefault();
	}

	searchProjects = (e) => {
		this.props.searchProjects(e);
	}

	render() {
		const { projects = [] } = this.props;

		return (
			<section style={{ height: '80vh', overflow: 'auto' }}>
				<h3 style={{color: "#fff"}}>Projects</h3>
				<input type="text" onChange={this.searchProjects} className="form-control" placeholder="Search" />
					{projects.map((project, i) => {
						return (
							<li key={i} style={{listStyle: 'none'} }>
								<ProjectTodos changeTodos={this.props.changeTodos} project={project} />
							</li>
						)
					})}
			</section>
		)
	}
}

export default Projects;