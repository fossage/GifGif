var Reflux = require('reflux');
var Actions = require('../actions/login-actions');
var jwt_decode = require('jwt-decode');

module.exports = Reflux.createStore({
	listenables: [Actions],

	init: function(){
		this._user = null;
		this._jwt = null;
	},

	loginUser: function(data){
		this._jwt = data.jwt;
		this._user = jwt_decode(this._jwt);
		this.triggerChange();
	},

	logoutUser: function(data){
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
	}
})