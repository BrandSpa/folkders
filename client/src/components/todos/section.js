import React, { Component } from "react";
import fecha from 'fecha';
import TodoForm from './form';

class Todos extends Component {

  render() {
    const { project = {selected: {}}, data = {} } = this.props;
    let { todo = {subtodos: []} } = data;
    
    return (
      <section className="col-lg-6 todos">
        <header>
          <h5>Task for {project.selected.name}</h5>
           <h4>{todo.title}</h4>
        </header>

        <section>
          <TodoForm todo={todo} project={project} />
        </section>

        <section className="todo__item">
          {todo.content}
        </section>

        {todo.subtodos.map((subtodo, ind) => 
          <section key={ind} className="todo__item">
            {subtodo.content}
          </section>  
        )}

      </section> 
    );
  }
}


export default Todos;
