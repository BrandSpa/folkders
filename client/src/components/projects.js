import React, { Component } from 'react';
import ProjectTodos from './project_todos';

class Projects extends Component {
	constructor(props) {
		super(props);
	}



	openTodos = (e) => {
		e.preventDefault();
		console.log('open todos');
	}

	render() {
		const { projects } = this.props;

		return (
			<section style={{ height: '80vh', overflow: 'auto' }}>
				<h3 style={{color: "#fff"}}>Projects</h3>

					{projects.map((project, i) => {
						return (
							<li key={i} style={{listStyle: 'none'}}>
								<ProjectTodos changeTodos={this.props.changeTodos} project={project} />
							</li>
						)
					})}

			</section>
		)
	}
}

export default Projects;