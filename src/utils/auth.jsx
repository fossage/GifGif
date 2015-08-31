/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Fetch = require('whatwg-fetch');
var when = require('when');
var LoginActions = require('../actions/login-actions');


module.exports = {
	login: function(username, password){
		return this.handleAuth(fetch('/sessions/create', {
			method: 'post',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			}, 
			body: JSON.stringify({
				user_name: username, 
				password: password
			})
		}));
	}, 

	logout: function(){
		LoginActions.logoutUser();
	},

	register: function(username, password, email){
		return this.handleAuth(when(fetch('/users', {
			method: 'post',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user_name: username, 
				password: password,
				email: email
			})
		})));
	},

	handleAuth: function(loginPromise){
		return loginPromise
			.then(function(response){
				return response.json();
			});
	}
}






