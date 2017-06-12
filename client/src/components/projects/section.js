import React, { Component } from "react";
import Project from "./item";
import ProjectForm from "./form";
import Tasks from "../tasks/section";

class Projects extends Component {

  componentWillReceiveProps(props) {
    if(!props.project.selected.hasOwnProperty('id') && props.data.projects && props.data.projects.length > 0) {
      this.selectProject(props.data.projects[0]);
    }
  }

  selectProject = (project) => {
    this.props.dispatch({type: 'SELECT_PROJECT', payload: project});
  }

  changeTodo = (todoId) => {
    this.props.dispatch({type: 'SELECT_PROJECT_TODO', payload: todoId});
  }

  renderLoading = () => {
    return (<h5>loading...</h5>)
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
