import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import Clients from "./clients/section";
import Projects from "./projects/section";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {},
      project: {
        todos: []
      },
      todo: {},
      variables: {}
    };
  }

  componentWillReceiveProps = props => {
    if(!this.state.client.hasOwnProperty('name')) {
      this.setClient(props.data.clients);
    }
  }

  setClient = (clients) => {
    if(clients.length > 0) {
      const client = clients[0];
      this.setState({ client });
    }
  } 

  changeClient = client => {
    this.setClient([client]);
  }

  changeProject = project => {
    this.setState({project});
  }

  changeTodo = (todo, e) => {
    e.preventDefault();
    this.setState({ todo });
  }

  searchClients = e => {
    let _this = this;
    let variables = {...this.state.variables,  clientName: { like: `%${e.target.value}%` }};
    this.setState({ variables });
    this.props.data.fetchMore({variables,
      updateQuery(previousResult, { fetchMoreResult, queryVariables }) {
        _this.setClient(fetchMoreResult.clients);
        return { ...previousResult, clients: fetchMoreResult.clients };
      }
    });
  }

  render() {
    const { data } = this.props;
    const { client, project } = this.state;

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
              clients={data.clients}
              selected={client}
              companyId={this.props.companyId}
            />
          </div>

          <div className="col-lg-9" style={{ padding: " 40px 40px" }}>
            <Projects 
              changeProject={this.changeProject}
              clientId={client.id}
              selected={project} 
            />
          </div>

        </div>
      );
    }
  }
}

export const getClientsQuery = gql`
  query getClients($companyId: Int!, $clientName: JSON, $order: JSON) {
    clients(where: {company_id: $companyId, name: $clientName}, order: $order) {
      id
      name
    }
}
`;

export default graphql(getClientsQuery, {
  options: props => ({
    variables: {
      companyId: props.companyId,
      order: [["id", "DESC"]]
    }
  })
})(Dashboard);
