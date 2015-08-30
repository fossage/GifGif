/*****************************************************
			  INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react/addons');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var LoginActions = require('./actions/login-actions');

var Main = require('./components/main');
var Category = require('./components/category');
var GifDetail = require('./components/gif-detail');
var GifCreator = require('./components/gif-creator');
var Login = require('./components/login');

var reactMixin = require('react-mixin');
reactMixin(Login.prototype, React.addons.LinkedStateMixin);


/*****************************************************
			       MAIN CONTENT
*****************************************************/

module.exports = (
<Router history={new HashHistory} >
	<Route path="/" component={Main}>
		<Route path="login" component={Login} />
		<Route path="category/:id" component={Category} />
		<Route path="gif/:id" component={GifDetail} />
		<Route path="create" component={GifCreator} />
	</Route>
</Router>
);

