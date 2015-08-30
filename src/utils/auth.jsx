/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Fetch = require('whatwg-fetch');
var when = require('when');
var LoginActions = require('../actions/login-actions');


module.exports = {
	login: function(username, password){
		console.log(username, password);
		return this.handleAuth(when(fetch('/sessions/create', {
			method: 'post', 
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username, 
				password: password
			})
		})));
	}, 

	logout: function(){
		LoginActions.logoutUser();
	},

	signup: function(username, password, extra){
		return this.handleAuth(when(fetch('/users', {
			method: 'post',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username, 
				password: password,
				extra: extra
			})
		})));
	},

	handleAuth: function(loginPromise){
		return loginPromise
			.then(function(response){
				var jwt = response.id_token;
				LoginActions.loginUser(jwt);
				return true;
			});
	}
}






