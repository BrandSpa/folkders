import React, { Component } from "react";
import { gql, graphql, compose } from "react-apollo";
import { getClientsQuery } from '../dashboard';

class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
			id: null,
      name: "",
      company_id: this.props.companyId
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
    if(this.state.id) {

    } else {
      this.props
      .createClient({
        variables: { name: this.state.name },
        update: (store, { data: { createClient } }) => {
          const data = store.readQuery({ 
            query: getClientsQuery, 
            variables: { order: [["id", "DESC"]] }
          });
          const clients = [createClient].concat(data.clients);
          store.writeQuery({ 
            query: getClientsQuery, 
            variables: { order: [["id", "DESC"]] },
            data: {clients} });
        }
      })
      .then(({ data }) => { 
        this.setState({id: null, name: "", company_id: this.props.companyId});
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
    }
    
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
mutation createClient($name: String!) {
	createClient(name: $name) {
		id
    name
  }
}
`;

const updateClientMutation = gql`
mutation updateClient($name: String!, $id: Int!) {
	updateClient(id: $id, name: $name) {
		id
    name
	}
}
`;

export default compose(
  graphql(createClientMutation, {name: 'createClient'}),
  graphql(updateClientMutation, {name: 'updateClient'}),
)(ClientForm);
