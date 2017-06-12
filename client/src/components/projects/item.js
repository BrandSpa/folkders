import React, { Component } from "react";

class Project extends Component {
  selectProject = (e) => {
    e.preventDefault();
    this.props.selectProject(this.props.project);
  }

  changeTodo = (todoId, e) => {
    e.preventDefault();
    this.props.changeTodo(todoId);
  }

  render() {
    const { project = {}, selected = {} } = this.props;
    
    return (
      <li className={`project__item ${project.id == selected.id ? 'project__item--active' : ''}`}>
        <a href="#" onClick={this.selectProject}>{project.name}</a>
        <ul>
          {project.todos.map(todo => 
            <li key={todo.id}><a href="#" onClick={this.changeTodo.bind(null, todo.id)}>{todo.title}</a></li>
          )}
        </ul>
      </li>
    )
  }
}

export default Project;
