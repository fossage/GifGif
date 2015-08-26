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
var GifDetail = require('./components/gif-detail');
var GifCreator = require('./components/gif-creator');


/*****************************************************
			       MAIN CONTENT
*****************************************************/

module.exports = (
<Router history={new HashHistory} >
	<Route path="/" component={Main}>
		<Route path="category/:id" component={Category} />
		<Route path="gif/:id" component={GifDetail} />
		<Route path="create" component={GifCreator} />
	</Route>
</Router>
);

