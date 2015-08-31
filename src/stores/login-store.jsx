var Reflux = require('reflux');
var Actions = require('../actions/login-actions');
var jwt_decode = require('jwt-decode');
var Auth = require('../utils/auth');
// var Navigation = require('react-router').Navigation;


module.exports = Reflux.createStore({
	listenables: [Actions],
	
	init: function(){
		this._user = null;
		this._jwt = null;
	},

	triggerChange: function(){
		this.trigger('change', this._user);
	},

	loginUser: function(payload){
		Auth.login(payload.user_name, payload.password)
			.then(function(json){
				var jwt = json.id_token;
				var savedJwt = localStorage.getItem('jwt');
				
				if (savedJwt !== jwt) {
					// this.transitionTo('/');
					localStorage.setItem('jwt', jwt);
		      	}

				this._jwt = jwt;
				this._user = jwt_decode(this._jwt);
				this.triggerChange();
			}.bind(this));
	},

	logoutUser: function(data){
		// RouterContainer.get().transitionTo('/login');
    	localStorage.removeItem('jwt');
		this._user = null;
		this.triggerChange();
	},

	get_user: function(){
		return this._user;
	},

	get_jwt: function(){
		return this._jwt;
	},

	isLoggedIn: function(){
		return !!this._user;
	},
});












