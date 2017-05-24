import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			email: '',
			password: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
	}

	handleChange(field, e) {
		let val = e.currentTarget.value;
		this.setState({...this.state, [field]: val});
	}

	login(e) {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		console.log(this.props);
		return (
			<div className="row" style={{ height: '90vh' }}>
			<div className="col-lg-3" style={{ background: '#19212F' }}>
					<form>
						<div className="input-group">
							<input type="text" placeholder="email" className="form-control" onChange={this.handleChange.bind(null, 'email')}/>
						</div>
						<div className="input-group">
							<input type="password" placeholder="password" className="form-control" onChange={this.handleChange.bind(null, 'password')}/>
						</div>
						<button className="btn" style={{float: 'right'}} onClick={this.login}>Login</button>
					</form>

					<a className="btn btn-primary pull-right" href="/auth/google">Login via google</a>
					<a className="btn btn-primary pull-right" href="/register">Register</a>
				</div>
			</div>
		)
	}
}

export default Login;