import React from 'react';

class Login extends React.Component {
	render() {
		return (
			<div>
				<form>
					<div className="input-group">
						<input type="text" placeholder="email" className="form-control"/>
					</div>
					<div className="input-group">
						<input type="password" placeholder="password" className="form-control"/>
					</div>
					<button></button>
				</form>
				<a href="/auth/google">Login via google</a>
			</div>
		)
	}
}

export default Login;