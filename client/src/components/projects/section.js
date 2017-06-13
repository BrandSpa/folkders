import React, { Component } from "react";
import Project from "./item";
import ProjectForm from "./form";

class Projects extends Component {

  componentWillReceiveProps(props) {
    if(!props.project.selected.hasOwnProperty('id') && props.data.projects && props.data.projects.length > 0) {
      this.selectProject(props.data.projects[0]);
    }
  }

  selectProject = (project) => {
    //select first todo on select project if has todos
    this.props.dispatch({type: 'SELECT_PROJECT', payload: project});
    this.props.dispatch({type: 'SELECT_PROJECT_TODO', payload: null});
  }

  changeTodo = (todoId) => {
    this.props.dispatch({type: 'SELECT_PROJECT_TODO', payload: todoId});
  }

  renderLoading = () => {
    return (<section className="col-lg-3 projects"><h5>loading...</h5></section>);
  }

  render() {
    const { data = {}, project } = this.props;
    const { projects = [] } = data;
    const { selected } = project;
    if(data.loading) return this.renderLoading();

    return (
      <section className="col-lg-3 projects">
        <header>
          <h5>Projects</h5>
        </header>
        <ul>
          <li><ProjectForm client={this.props.client} /></li>
          {projects.map(project => 
            <Project 
              key={project.id} 
              project={project} 
              selected={selected}
              selectProject={this.selectProject}
              changeTodo={this.changeTodo}
              />  
          )}
        </ul>
      </section>
    );
  }
}

export default Projects;
