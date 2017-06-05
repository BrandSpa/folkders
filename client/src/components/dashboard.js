import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import Clients from "./clients";
import Projects from "./projects";
import Tasks from "./tasks";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientSelected: null,
      projects: [],
      todo: { subtodos: [] },
      offset: 0
    };
  }

  changeClient = client => {
    this.setState({ clientSelected: client.id, projects: client.projects });
  };

  changeTodos = todo => {
    this.setState({ todo });
  };

  searchProjects = e => {
    this.props.data.fetchMore({
      variables: { projectName: { like: `%${e.target.value}%` } },
      updateQuery(previousResult, { fetchMoreResult, queryVariables }) {
        return { ...previousResult, clients: fetchMoreResult.clients };
      }
    });
  };

  searchClients = e => {
    this.props.data.fetchMore({
      variables: { clientName: { like: `%${e.target.value}%` } },
      updateQuery(previousResult, { fetchMoreResult, queryVariables }) {
        return { ...previousResult, clients: fetchMoreResult.clients };
      }
    });
  };

  changeCompany = () => {
    this.setState({ offset: this.state.offset + 1 });
    this.props.data.fetchMore({
      variables: { offset: this.state.offset + 1 },
      updateQuery(previousResult, { fetchMoreResult, queryVariables }) {
        return {
          ...previousResult,
          clients: [...previousResult.clients, ...fetchMoreResult]
        };
      }
    });
  };

  render() {
    const { data } = this.props;
    const { clients = [] } = data;
    let projects = [];
    let todo = {};

    if (this.state.clientSelected !== null) {
      projects = clients.filter(
        client => client.id == this.state.clientSelected
      )[0].projects;
      if (projects.length > 0) {
				let defaultTodo = projects[0].todos.length > 0 ? projects[0].todos[0] : {};
        todo = Object.keys(this.state.todo).length > 0 ? this.state.todo : defaultTodo;
      } else {
        todo = {};
      }
    } else {
      let defaultProjects = clients.length > 0 ? clients[0].projects : [];
      projects = this.state.projects.length > 0
        ? this.state.projects
        : defaultProjects;
      let defaultTodo = projects.length > 0
        ? projects[0].todos[0]
        : this.state.todo;
      todo = Object.keys(this.state.todo).length > 0
        ? this.state.todo
        : defaultTodo;
    }

    return data.loading
      ? <h1 style={{ margin: "40px 0", textAlign: "center", color: "#fff" }}>
          loading...
        </h1>
      : <div className="row">

          <div className="col-lg-3">
            <Clients
              searchClients={this.searchClients}
              changeClient={this.changeClient}
							selected={this.state.clientSelected}
              {...this.props}
            />
          </div>

          <div className="col-lg-3">
            <Projects
              searchProjects={this.searchProjects}
              changeTodos={this.changeTodos}
              projects={projects}
            />
          </div>

          <div className="col-lg-6">
            <Tasks todo={todo} />
          </div>
        </div>;
  }
}

const getClientsQuery = gql`
  query getClients($companyId: Int!, $clientName: JSON, $projectName: JSON, $offset: Int = 0, $limit: Int = 5) {
			clients(where: {company_id: $companyId, name: $clientName}, offset: $offset, limit: $limit) {
				id
				name
				projects(where: {name: $projectName}, offset: $offset, limit: $limit) {
					id
					name
					todos {
						id
						title
						content
						created_at
						author {
							name
						}
							subtodos(order: [["id", "DESC"]]) {
								id
								content
								created_at
								author {
									id
									name
								}
							}
					}
				}
			}
	}
`;

export default graphql(getClientsQuery, {
  options: {
    variables: {
      companyId: 1
    }
  }
})(Dashboard);
