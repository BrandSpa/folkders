import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import Form from './form';
import TodoForm from './form';
import SubTodo from './subtodo';
import fecha from 'fecha';

class Tasks extends Component {
  state = {
    showEditor: false,
    states: {}
  }

  states = {
    projectSelected: false,
    projectHasTodos: false,
    projectAndTodo: false,
    noProjectAndTodo: false
  }

  componentWillReceiveProps(props) {
    const { project = {}, data = {} } = props;
    let todo = data.todo ? data.todo : {};
    let projectSelected = project.hasOwnProperty('id') && !todo.hasOwnProperty('id');
    let projectHasTodos = project.hasOwnProperty('todos') && project.todos.length > 0;
    let projectAndTodo = project.hasOwnProperty('id') && todo.hasOwnProperty('id');
    let noProjectAndTodo = !project.hasOwnProperty('id') && !todo.hasOwnProperty('id');

    this.states = {
      projectSelected,
      projectHasTodos,
      projectAndTodo,
      noProjectAndTodo
    }

  }

  render() {
    const { project = {}, data = {} } = this.props;
    let todo = data.todo ? data.todo : {};
    
    return (
      <section className="row">
        <header className="col-lg-12">
          <h5 style={{ float: "left" }}>Task for {project.name}</h5>

          <div style={{ float: "left", width: "100%" }}>
            <h4>{todo.title}</h4>
            <br />
            {this.states.projectAndTodo ? <span>Created: {todo.created_at ? fecha.format(Date.parse(todo.created_at), 'dddd MMMM DD, YYYY') : ''}</span> : '' }
          </div>
        </header>

        {
          this.states.projectSelected ? 
          <div className="col-lg-12">
          <TodoForm container="taskEditor" /> 
          </div>
          : ''}
          {this.states.projectAndTodo ?
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
