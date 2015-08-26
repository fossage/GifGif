/*****************************************************
			  INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Category = require('./components/category');
var ImageDetail = require('./components/gif-detail');


/*****************************************************
			       MAIN CONTENT
*****************************************************/
module.exports = (
	<Router history={new HashHistory} >
		<Route path="/" component={Main}>
			<Route path="category/:id" component={Category} />
			<Route path="gif/:id" component={ImageDetail} />
		</Route>
	</Router>
);