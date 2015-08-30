var React = require('react');
var Auth = require('../utils/auth');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

module.exports = React.createClass({
	getInitialState: function(){
		return {
			user: '',
			password: ''
		}
	},

	handleLogin: function(e){
		e.preventDefault();
		Auth.login(this.state.user, this.state.password)
			.catch(function(err){
				console.log("Error logging in", err);
			});
	},

	render: function(){
		return (
				<div className="login jumbotron center-block">
					<form role="form">
						<div className="form-group">
							<Input type="text" valueLink={this.linkState('user')} placeholder="enter username..." label="Username"/>
							<Input type="password" valueLink={this.linkState('password')} placeholder="enter password..." label="Password"/>
						</div>
						<Button onClick={this.handleLogin}>Submit</Button>
					</form>	
				</div>);
		
	}
});
