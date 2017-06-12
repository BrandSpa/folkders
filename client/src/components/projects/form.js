import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { 
  getClientProjectsQuery, 
  createProjectMutation, 
  updateProjectMutation 
} from '../../queries/projectQueries';

class ProjectForm extends Component {
  state = {
      name: "",
      client_id: this.props.client.id
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={this.onChange.bind(null, "name")}
            value={this.state.name}
            placeholder="Project Name"
          />
        </div>
        
      </form>
    );
  }
}

export default compose(
  graphql(createProjectMutation, {name: 'createProject'}),
  graphql(updateProjectMutation, {name: 'updateProject'}),
)(ProjectForm);
