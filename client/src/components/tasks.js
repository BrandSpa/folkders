import React, { Component } from "react";

class Tasks extends Component {
  render() {

    const { todo } = this.props;

    return (
      Object.keys(todo).length > 0 ? 
      <section style={{ height: "80vh", overflow: "auto" }}>
        <h3 style={{ color: "#fff", float: "left" }}>Tasks</h3>
        
        <div style={{ float: "left", width: "100%" }}>
          <h5 style={{ color: "#fff" }}>{todo.title}</h5>
          <span style={{ color: "#fff" }}>
            Author: {todo.author ? todo.author.name : ""}
          </span>
          <br />
          <span style={{ color: "#fff" }}>Created: {todo.created_at}</span>
        </div>

        <div style={{ float: "left", width: "100%"  }}>
          <section style={{ color: "#333", margin: "20px 0", width: "100%" }}>
            <header style={{ background: "#fff", padding: "10px" }}>
              {todo.created_at}
            </header>

            <article style={{ background: "#F1F3F7", padding: "20px" }}>
              <p>{todo.content}</p>
            </article>
          </section>

          <section style={{ color: "#333" }}>
            {todo.subtodos
              ? todo.subtodos.map(subtodo => {
                  return (
                    <section style={{ color: "#333", margin: "20px 0" }}>
                      <header style={{ background: "#fff", padding: "10px" }}>
                        {subtodo.created_at}
                      </header>
                      <article
                        style={{ background: "#F1F3F7", padding: "20px" }}
                      >
                        <p>{subtodo.content}</p>
                      </article>
                    </section>
                  );
                })
              : <h3 style={{ color: "#fff" }}>NO TODOS</h3>}
          </section>
        </div>
      </section>
      : <h1>Create your first todo</h1>
    );
  }
}

export default Tasks;
