import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import Clients from "./clients/section";
import Projects from "./projects/section";
import Tasks from "./tasks/section";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        projects: [],
        todos: []
      },
      project: {
        todos: []
      },
      todo: {},
      variables: {}
    };
  }

  componentWillReceiveProps = props => {
    this.setClientAndProject(props.data.clients);
  }

  setClientAndProject = clients => {
    if(clients.length > 0) {
      const client = clients[0];
      const project = client.projects.length > 0 ? client.projects[0] : {todos: []};
      const todo = project.todos.length > 0 ? project.todos[0] : {};
      this.setState({ client, project, todo });
    }
  } 

  changeClient = client => {
    this.setClientAndProject([client]);
  }

  changeTodo = (todo, e) => {
    e.preventDefault();
    this.setState({ todo });
  }

  searchProjects = e => {
    let variables = {...this.state.variables,  projectName: { like: `%${e.target.value}%` }};
    this.setState({ variables });

    this.props.data.fetchMore({ variables ,
      updateQuery(previousResult, { fetchMoreResult, queryVariables }) {
        return { ...previousResult, clients: fetchMoreResult.clients };
      }
    });
  }

  searchClients = e => {
    let _this = this;
    let variables = {...this.state.variables,  clientName: { like: `%${e.target.value}%` }};
    this.setState({ variables });
    this.props.data.fetchMore({variables,
      updateQuery(previousResult, { fetchMoreResult, queryVariables }) {
        _this.setClientAndProject(fetchMoreResult.clients);
        return { ...previousResult, clients: fetchMoreResult.clients };
      }
    });
  }

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
  }

  render() {
    const { data } = this.props;
    const { client } = this.state;

    if (data.loading) {
      return (
        <h1 style={{ margin: "40px 0", textAlign: "center", color: "#fff" }}>
          loading...
        </h1>
      );
    } else {
      return (
        <div className="row">

          <div className="col-lg-3" style={{ padding: " 40px 40px" }}>
            <Clients
              searchClients={this.searchClients}
              changeClient={this.changeClient}
              selected={this.state.clientSelected}
              clients={data.clients}
              selected={client}
            />
          </div>

          <div className="col-lg-3" style={{ padding: " 40px 40px" }}>
            <Projects
              searchProjects={this.searchProjects}
              changeTodos={this.changeTodo}
              projects={client.projects}
            />
          </div>

          <div className="col-lg-6">
          <Tasks task={this.state.todo} />
          </div>
        </div>
      );
    }
  }
}

export const getClientsQuery = gql`
query getClients($companyId: Int!, $clientName: JSON, $projectName: JSON, $subtaskContent: JSON, $offset: Int = 0, $limit: Int = 4) {
  clients(where: {company_id: $companyId, name: $clientName}, offset: $offset, limit: $limit, order: [["id", "DESC"]]) {
    id
    name
    projects(where: {name: $projectName}) {
      ...projectFields
      todos {
  	    ...todoFields
        subtodos(where: { content: $subtaskContent }) {
          ...subTodoFields
        }
      }
    }
	}
}

fragment projectFields on project {
  id
  name
}

fragment todoFields on todo {
  id
  title
  content
  created_at
  author {
    ...authorFields
  }
}

fragment subTodoFields on subtodo {
  id
  content
  created_at
  author {
  	...authorFields
  }
}
  
fragment authorFields on user {
  id
	name  
}
`;

export default graphql(getClientsQuery, {
  options: props => ({
    variables: {
      companyId: props.companyId
    }
  })
})(Dashboard);
