var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/login-actions');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var LoginStore = require('../stores/login-store');


module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(LoginStore, 'onChange')
	],
	
	onChange: function(event, user){
		console.log(user);
	},

	getInitialState: function(){
		return {
			user_name: '',
			password: '', 
			email: '',
			user: ''
		}
	},

	handleLogin: function(e){
		e.preventDefault();
		Actions.loginUser({user_name: this.state.user_name, password: this.state.password});
	},

	handleRegistration: function(e){
		e.preventDefault();
		Auth.register(this.state.user_name, this.state.password, this.state.email)
			.catch(function(err){
				console.log("Error registering", err);
			});
	},

	render: function(){
		return (
				<div className="login jumbotron center-block">
					<form role="form">
						<div className="form-group">
							<Input type="text" valueLink={this.linkState('user_name')} placeholder="enter username..." label="Username"/>
							<Input type="password" valueLink={this.linkState('password')} placeholder="enter password..." label="Password"/>
						</div>
						<Button onClick={this.handleLogin}>Submit</Button>
					</form>
					<form role="form">
						<div className="form-group">
							<Input type="text" valueLink={this.linkState('user_name')} placeholder="enter username..." label="Username"/>
							<Input type="text" valueLink={this.linkState('email')} placeholder="enter email..." label="Email"/>
							<Input type="password" valueLink={this.linkState('password')} placeholder="enter password..." label="Password"/>
						</div>
						<Button onClick={this.handleRegistration}>Submit</Button>
					</form>	
				</div>
				);
		
	}
});
