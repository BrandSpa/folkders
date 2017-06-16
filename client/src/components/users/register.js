import React from 'react';
import request from 'axios';

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.store = this.store.bind(this);
	}

	handleChange(field, e) {
		this.setState({...this.state, [field]: e.currentTarget.value});
	}

	store(e) {
		e.preventDefault();
		request.post('/api/v1/users', this.state).then(res => console.log(res.data));
	}

	render() {
		return (
			<form onSubmit={this.store} className="col-md-3">
			<div className="form-group">
				<input 
					type="text" 
					placeholder="Email" 
					className="form-control"
					onChange={this.handleChange.bind(null, 'email')} 
					value={this.state.email}	
					/>
			</div>
				
				<div className="form-group">
					<input 
						type="password" 
						placeholder="Password" 
						className="form-control"
						onChange={this.handleChange.bind(null, 'password')} 
						value={this.state.password}	
						/>
				</div>
					<button onClick={this.store}>Register</button>
			</form>
		)
	}
}

export default Register;