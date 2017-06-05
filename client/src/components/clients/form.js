import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import { getClientsQuery } from '../dashboard';

class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
			id: null,
      name: ""
    };
  }

	componentWillReceiveProps = (props) => {
		if(Object.keys(props.client).length > 0) {
			this.setState(props.client);
		}
	}

  onChange = (field, e) => {
    this.setState({ [field]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props
      .mutate({
        variables: { name: this.state.name, companyId: this.props.companyId }
      })
      .then(({ data }) => {
        this.props.addClient(data.createClient);
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
  };

  render() {
    return (
      <form action="">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            onChange={this.onChange.bind(null, "name")}
            value={this.state.name}
            placeholder="Client Name"
          />
          <span className="input-group-btn">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.onSubmit}
            >
              {this.state.id ? 'Edit' : 'Add' }
            </button>
          </span>
        </div>
      </form>
    );
  }
}

const createClientMutation = gql`
mutation createClient($name: String!, $companyId: Int!) {
	createClient(name: $name, company_id: $companyId) {
		id,
	  name
	}
}
`;

const options = {
  options: {
    update: (proxy, { data: { createClient } }) => {
			console.log(proxy);
      // Read the data from our cache for this query.
      const data = proxy.readQuery({ query: getClientsQuery });
      console.log(data);
      // // Add our todo from the mutation to the end.
      data.clients.push(createClient);
      // // Write our data back to the cache.
      // proxy.writeQuery({ query: getClientsQuery , data });
    }
  }
};

export default graphql(createClientMutation, options)(ClientForm);
