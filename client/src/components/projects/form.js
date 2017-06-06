import React, { Component } from "react";
import { gql, graphql, compose } from "react-apollo";
import { getClientsQuery } from '../dashboard';
import { getClientProjectsQuery } from './section';

class ProjectForm extends Component {
  state = {
			id: null,
      name: "",
      client_id: this.props.clientId
  }

	componentWillReceiveProps = (props) => {
		if(Object.keys(props.project).length > 0) {
			this.setState(props.project);
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
      .createProject({
        variables: { name: this.state.name, clientId: this.props.clientId },
        update: (store, {data: { createProject }}) => {
            const data = store.readQuery({ 
              query: getClientProjectsQuery, 
              variables: { clientId: this.props.clientId }  
            });
            data.projects.push(createProject);
            store.writeQuery({ query: getClientProjectsQuery, variables: {clientId: this.props.clientId}, data });
          }

      })
      .then(({ data: {createProject} }) => { 
        this.setState({id: null, name: "", client_id: null});
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
            placeholder="Project Name"
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

const createProjectMutation = gql`
mutation createProject($name:String!, $clientId:Int!) {
  createProject(name: $name, client_id: $clientId) {
    id
    client_id
    name,
    todos {
      id
    }
  }
}
`;

const updateProjectMutation = gql`
mutation updateProject($projectId: Int!, $name:String!, $clientId:Int!) {
  createProject(name: $name, client_id: $clientId) {
    id
    name
  }
}
`;

export default compose(
  graphql(createProjectMutation, {name: 'createProject'}),
  graphql(updateProjectMutation, {name: 'updateProject'}),
)(ProjectForm);
