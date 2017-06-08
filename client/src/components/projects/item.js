import React, { Component } from "react";

class ProjectTodos extends Component {
  state = {
    show: false
  }

  toggleShow = e => {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  }

  render() {
    const { project, selected } = this.props;
    const { todos } = project;

    return (
      <div
        style={ project.id == selected.id ? { background: "rgba(255,255,255, .1)" } : {} }
      >
        <a
          style={{
            display: "block",
            padding: "40px 0 10px 10px",
            color: "#fff",
            padding: "20px 40px"
          }}
          href="#"
          onClick={this.toggleShow}
        >
          <i className="ion-ios-folder-outline"></i> {this.props.project.name} {this.props.project.todosCount}
        </a>
        <ul
          style={
            this.state.show
              ? { display: "block", padding: "0 0 0 60px", listStyle: "none" }
              : { display: "none" }
          }
        >
        {todos.length == 0 ? 
          <a href="">Create todo</a>
          : ''}
          {todos.map((todo, i) => {
            return (
              <li key={i} style={{ color: "#fff", padding: "10px", background: 'rgba(0,0,0,0.2 )' }}>
                <a
                  style={{ color: "#fff" }}
                  href="#"
                  onClick={this.props.changeTodos.bind(null, todo)}
                >
                  {todo.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProjectTodos;
