import React, { Component } from "react";

class ProjectTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggleShow = (e) => {
		e.preventDefault();
		this.setState({ show: !this.state.show });
	}

  render() {
		const { todos } = this.props.project;

    return (
      <div style={{ listStyle: 'none', background: 'rgba(0,0,0, .1)' }}>
        <a style={{display: 'block', padding: '40px 0 10px 10px', color: '#fff', padding: '20px 40px'}} href="#" onClick={this.toggleShow}>{this.props.project.name}</a>
        <ul
          style={this.state.show ? { display: "block", padding: "0 0 0 60px", listStyle: "none" } : { display: "none" }}
        >
          {todos.map((todo, i) => {
            return (
              <li key={i} style={{ color: "#fff", padding: "10px" }}>
                <a style={{ color: "#fff" }} href="#" onClick={this.props.changeTodos.bind(null, todo)}>
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