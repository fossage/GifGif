/*****************************************************
			 INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react');
var Routes = require('./routes');
var Main = require('./components/main');
var Api  = require('./utils/api');

Api.get('topics/defaults');


/*****************************************************
			       MAIN CONTENT
*****************************************************/



React.render(Routes, document.querySelector('.container'));












