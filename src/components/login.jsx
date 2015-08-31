/*****************************************************
			  INITIALIZATION BOILERPLATE
*****************************************************/
var React 		= require('react'),
	Reflux 		= require('reflux'),
	Actions 	= require('../actions/login-actions'),
	LoginStore 	= require('../stores/login-store');

// Components
var Input 		= require('react-bootstrap').Input,
	Button 		= require('react-bootstrap').Button;


/*****************************************************
			       MAIN CONTENT
*****************************************************/
module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(LoginStore, 'onChange')
	],
	
	getInitialState: function(){
		return {
			user_name: '',
			password: '', 
			user: ''
		}
	},

	onChange: function(event, user){
		console.log(user);
	},

	handleLogin: function(e){
		e.preventDefault();
		Actions.loginUser({user_name: this.state.user_name, password: this.state.password});
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
				</div>
				);
	}
});
