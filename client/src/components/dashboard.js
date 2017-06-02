import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import Clients from './clients';
import Projects from './projects';
import Tasks from './tasks';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			todo: {subtodos: []},
			offset: 0
		}
	}

	changeProjects = (projects) => {
		this.setState({ projects });
	}

	changeTodos = (todo) => {
		this.setState({ todo });
	}

	changeCompany = () => {
		this.setState({offset: this.state.offset + 1});
		this.props.data.fetchMore({
			variables: {offset: this.state.offset + 1},
			updateQuery(previousResult, { fetchMoreResult, queryVariables}) {
				return {...previousResult, clients: [...previousResult.clients, ...fetchMoreResult.clients]};
			}
		});
	}

	render() {
		const { data } = this.props;
    const { clients = [] } = data;
		const defaultProjects = clients.length > 0 ? clients[0].projects : [];
		const projects = this.state.projects.length > 0 ? this.state.projects : defaultProjects;
		const defaultTodo = projects.length > 0 ? projects[0].todos[0] : this.state.todo;
		const todo = Object.keys(this.state.todo).length > 1 ? this.state.todo : defaultTodo;

		return (
			data.loading ? 
				<h1 style={{margin: "40px 0",textAlign: 'center', color: "#fff"}}>loading...</h1> : 
			<div className="row">

				<div className="col-lg-3">
					<button onClick={this.changeCompany}>test</button>
					<Clients changeProjects={this.changeProjects} {...this.props} />
				</div>

				<div className="col-lg-3">
					<Projects changeTodos={this.changeTodos} projects={projects}  />
				</div>

				<div className="col-lg-6">
					<Tasks todo={todo}  />
				</div>
			</div>
		)
	}

}

export default graphql(
  gql`
    query getClients($companyId: Int!, $offset: Int = 0, $limit: Int = 1) {
			clients(where: {company_id: $companyId}, offset: $offset, limit: $limit) {
				name
				projects {
					name
					todos {
						title
						content
						created_at
						author {
							name
						}
						subtodos(order: [["id", "DESC"]]) {
							content
							created_at
							author {
								name
							}
						}
					}
				}
			}
		}
  `,{
		options: { 
			variables: { 
				companyId: 1 
			} 
		}
	})(Dashboard);
