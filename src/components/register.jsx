var React 		= require('react'),
	Reflux 		= require('reflux'),
	Actions 	= require('../actions/login-actions'),
	LoginStore 	= require('../stores/login-store');
	isEmail 	= require('../utils/email-validator').isEmail;

// Components
var Input 		= require('react-bootstrap').Input,
	Button 		= require('react-bootstrap').Button,
	Alert 		= require('react-bootstrap').Alert;

	module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(LoginStore, 'onChange')
	],
	
	getInitialState: function(){
		return {
			user_name: '',
			password: '',
			password_conf: '', 
			email: '',
			user: '',
			user_name_error: '',
			email_error: '',
			password_error: '',
			password_conf_error: ''
		}
	},

	onChange: function(e, user){
		console.log(user);
	},

	handleBlur: function(e){
		this.formValidator();
	},

	handleRegistration: function(e){
		e.preventDefault();
		if(this.formValidator()){
			this.setState({user_name: ''});
			this.setState({email: ''});
			this.setState({password: ''});
			this.setState({password_conf: ''});
			console.log('here');
			return;
			Auth.register(this.state.user_name, this.state.password, this.state.email)
				.catch(function(err){
					console.log("Error registering", err);
				});
		}
	},

	render: function(){
		return (
				<div className="register jumbotron center-block">
					<form role="form">
						<div className="form-group">
							<Input type="text" id="user_name" onBlur={this.handleBlur} valueLink={this.linkState('user_name')} placeholder="enter username..." label="Username"/>
							<Alert bsSize='xs' className={ this.classSetter(this.state.user_name_error)} bsStyle='danger'>{this.state.user_name_error}</Alert>
							<Input type="email" id="email" onBlur={this.handleBlur} valueLink={this.linkState('email')} placeholder="enter email..." label="Email"/>
							<Alert bsSize='xs' className={ this.classSetter(this.state.email_error)} bsStyle='danger'>{this.state.email_error}</Alert>
							<Input type="password" id="password" valueLink={this.linkState('password')} placeholder="enter password..." label="Password"/>
							<Alert bsSize='xs' className={ this.classSetter(this.state.password_error)} bsStyle='danger'>{this.state.password_error}</Alert>
							<Input type="password" id="password_conf" valueLink={this.linkState('password_conf')} placeholder="repeat password..." label="Confirm Password"/>
							<Alert bsSize='xs' className={ this.classSetter(this.state.password_conf_error)} bsStyle='danger'>{this.state.password_conf_error}</Alert>
						</div>
						<Button bsStyle="success" onClick={this.handleRegistration}>Submit</Button>
					</form>
				</div>);
	},

	classSetter: function(stateVal){
		if(!stateVal){ return 'hidden';}
	},

	isAvailable: function(val){
		
	},

	formValidator: function(id){
		var toggle = true;
		
		if(this.state.user_name.length < 6) {
			this.setState({user_name_error: "username must be at least 6 characters..."});
			toggle = false;
		} else {
			this.setState({user_name_error: ""});
		}

		if(!isEmail(this.state.email)){
			this.setState({email_error: "please ensure a vaild email is entered...."});
			toggle = false;
		} else {
			
			this.setState({email_error: ""});
		}

		if(this.state.password !== this.state.password_conf){
			this.setState({password_conf_error: "ensure that passwords match..."});
			toggle = false;
		} else {
			this.setState({password_conf_error: ""});
		}

		if(this.state.password.length < 8){
			this.setState({password_error: "passwords must be 6 characters in length..."});
			toggle = false;
		} else {
			this.setState({password_error: ""});
		}
		return toggle;
	},


})















