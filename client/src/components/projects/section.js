import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import Project from "./item";
import Form from "./form";
import Tasks from "../tasks/section";

class Projects extends Component {
  state = {
    project: {},
    todo: {}
  };

  openTodos = e => {
    e.preventDefault();
  };

  searchProjects = e => {
    let _this = this;
    let variables = {name: { like: `%${e.target.value}%` }};
    
    this.props.data.fetchMore({variables,
      updateQuery(previousResult, { fetchMoreResult, queryVariables }) {
        console.log(fetchMoreResult);
        return { ...previousResult, projects: fetchMoreResult.projects };
      }
    });
  }

  changeTodos = todo => {
    this.setState({todo});
  };

  changeProject = project => {
    this.props.changeProject(project);
  };

  render() {
    const { data: { projects = [], loading }, client } = this.props;

    return (
      <section className="row">
        <div
          className="col-lg-5"
          style={{ paddingTop: "20px", background: "rgba(0,0,0,0.2)" }}
        >
          <h5 style={{ color: "#fff" }}>Projects for {client.name}</h5>
          <input
            type="text"
            onChange={this.searchProjects}
            className="form-control"
            placeholder="Search"
          />
          <br />
          <Form project={this.state.project} clientId={this.props.clientId} />
          <br />
          <ul style={{ padding: 0, height: "80vh", overflow: "auto" }}>
            {!loading
              ? projects.map((project, i) => {
                  return (
                    <li
                      key={i}
                      style={{ listStyle: "none" }}
                      onClick={this.changeProject.bind(null, project)}
                    >
                      <Project
                        changeTodos={this.changeTodos}
                        project={project}
                        selected={this.props.selected}
                      />
                    </li>
                  );
                })
              : <h3>Loading...</h3>}
          </ul>
        </div>
        <div className="col-lg-7" style={{paddingTop: '20px'}}>
          <Tasks todo={this.state.todo} project={this.props.selected} />
        </div>
      </section>
    );
  }
}

export const getClientProjectsQuery = gql`
  query getClientProjects($clientId: Int!, $name: JSON) {
    projects(where: {client_id: $clientId, name: $name}) {
      id
      name,
      todosCount,
      todos {
        id,
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
