import React, { Component } from "react";
import Form from './form';
import TodoForm from './form';

class Tasks extends Component {
  render() {
    const { todo = {} } = this.props;
    return (
      <section>
        <h3 style={{ color: "#fff", float: "left" }}>Tasks</h3>
        <TodoForm container="editable" />
        <div style={{ float: "left", width: "100%" }}>
          <h5 style={{ color: "#fff" }}>{todo.title}</h5>
          <span style={{ color: "#fff" }}>
            Author: {todo.author ? todo.author.name : ""}
          </span>
          <br />
          <span style={{ color: "#fff" }}>Created: {todo.created_at}</span>
        </div>

        { Object.keys(todo).length > 0 ? 
        <div style={{ float: "left", width: "100%", height: "80vh", overflow: "auto" }}>

          <section style={{ color: "#333", margin: "20px 0", width: "100%" }}>
            <header style={{ background: "#fff", padding: "10px" }}>
              {todo.created_at}
            </header>

            <article style={{ background: "#F1F3F7", padding: "20px" }}>
              <p>{todo.content}</p>
            </article>
          </section>

          {todo.subtodos.map(subtodo => <SubTodo subtodo={subtodo} />)}
        </div>
        : <h1>Create your first todo</h1>}
      </section>
      
    );
  }
}

export default Tasks;
