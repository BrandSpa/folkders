import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import Form from './form';
import TodoForm from './form';
import SubTodo from './subtodo';
import fecha from 'fecha';

class Tasks extends Component {
  state = {
    showEditor: false
  }

  render() {
    const { project = {}, data = {} } = this.props;
    let todo = data.todo ? data.todo : {};
    console.log('tasks props:', this.props);
    
    return (
      <section>
        <header>
          <h5 style={{ float: "left" }}>Task for {project.name}</h5>

          <div style={{ float: "left", width: "100%" }}>
            <h4>{todo.title}</h4>
            <br />
            <span>Created: {todo.created_at ? fecha.format(Date.parse(todo.created_at), 'dddd MMMM DD, YYYY') : ''}</span>
          </div>
        </header>

        {this.state.showEditor ? <TodoForm container="taskEditor" /> : ''}

        { Object.keys(todo).length > 0 ? 
          <div style={{ float: "left", width: "100%", height: "80vh", overflow: "auto" }}>

            <section style={{ color: "#333", margin: "20px 0", width: "100%" }}>
              <header style={{ background: "#fff", padding: "10px" }}>
                {todo.created_at ? fecha.format(Date.parse(todo.created_at), 'dddd MMMM DD, YYYY') : ''}
              </header>

              <article style={{ background: "#F1F3F7", padding: "20px" }}>
                <p>{todo.content}</p>
              </article>
            </section>

            {todo.subtodos && todo.subtodos.length > 0 ? todo.subtodos.map((subtodo, id) => <SubTodo key={id} subtodo={subtodo} />) : ''}
          </div>
        : ''}
      </section>
      
    );
  }
}

const getTodoQuery = gql`
  query getTodo($id: Int!) {
  todo(where: {id: $id}) {
		id
    title
    content
    created_at
    author {
      name
    }
    subtodos {
      content
    }
  }
}
`;

export default graphql(getTodoQuery, {
   options: props => ({
    variables: {
      id: props.todo.id
    }
  }),
  skip: props => { 
    return !props.todo.hasOwnProperty('id');
  }
})(Tasks);
