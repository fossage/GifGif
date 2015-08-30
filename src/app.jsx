/*****************************************************
			 INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react');
var Routes = require('./routes');
var Main = require('./components/main');
var Api  = require('./utils/api');
var RouterContainer = require('./utils/router-container');
var LoginActions = require('./actions/login-actions');

Api.get('topics/defaults');


/*****************************************************
			       MAIN CONTENT
*****************************************************/
RouterContainer.set(Routes);

var jwt = localStorage.getItem('jwt');
if(jwt){
	LoginActions.loginUser(jwt);
}


React.render(Routes, document.querySelector('.container'));












