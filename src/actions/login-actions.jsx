/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Reflux = require('reflux');

/*****************************************************
	     DEFINING ACTIONS OBJECT TO BE EXPORTED
*****************************************************/
// The createActions method will take an array of string names and created named methods
//out of them that we can call in other parts of our program
module.exports = Reflux.createActions([
	'loginUser',
	'logoutUser',
]);