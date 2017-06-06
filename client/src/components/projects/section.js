import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import ProjectTodos from "./tasks";
import Form from "./form";
import Tasks from "../tasks/section";

class Projects extends Component {
  state = {
    project: {}
  }

  openTodos = e => {
    e.preventDefault();
  }

  searchProjects = e => {
    this.props.searchProjects(e);
  }

  changeTodos = todo => {
    console.log(todo);
  }

  changeProject = project => {
    this.props.changeProject(project);
  }
 
  render() {
    const { data: { projects = [], loading } } = this.props;
  
    return (
      <section className="row">
        <div className="col-lg-5">

          <h3 style={{ color: "#fff" }}>Projects</h3>
          <input
            type="text"
            onChange={this.searchProjects}
            className="form-control"
            placeholder="Search"
          />
          <br />
          <Form project={this.state.project} clientId={this.props.clientId} />
          <br/>
          <ul style={{padding: 0, height: "80vh", overflow: "auto"}}>
          {!loading ? projects.map((project, i) => {
            return (
              <li key={i} style={{ listStyle: "none" }} onClick={this.changeProject.bind(null, project)}>
                <ProjectTodos
                  changeTodos={this.changeTodos}
                  project={project}
                  selected={this.props.selected}
                />
              </li>
            );
          }) : <h3>Loading...</h3>}
          </ul>
         </div>
        <div className="col-lg-7" >
          <Tasks />
        </div>
      </section>
    );

  }
}

export const getClientProjectsQuery = gql`
  query getClientProjects($clientId: Int!) {
    projects(where: {client_id: $clientId}) {
      id
      name,
      todos {
        title
      }
    }
}
`;

export default graphql(getClientProjectsQuery, {
  options: props => ({
    variables: {
      clientId: props.clientId,
      order: [["id", "DESC"]]
    }
  })
})(Projects);
