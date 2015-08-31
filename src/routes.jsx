/*****************************************************
			  INITIALIZATION BOILERPLATE
*****************************************************/
var React 			= require('react/addons'),
	ReactRouter 	= require('react-router'),
	Route 			= ReactRouter.Route,
	Router 			= ReactRouter.Router,
	ReactMixin 		= require('react-mixin'),
	HashHistory 	= require('react-router/lib/hashhistory'),
	LoginActions 	= require('./actions/login-actions');

// Components
var Main 			= require('./components/main'),
	Login 			= require('./components/login'),
	Register 		= require('./components/register'),
	Category 		= require('./components/category'),
	GifDetail 		= require('./components/gif-detail'),
	GifCreator 		= require('./components/gif-creator');


ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
ReactMixin(Register.prototype, React.addons.LinkedStateMixin);

/*****************************************************
			       MAIN CONTENT
*****************************************************/
module.exports = (
	<Router history={new HashHistory} >
		<Route path="/" component={Main}>
			<Route path="register" component={Register} />
			<Route path="login" component={Login} />
			<Route path="category/:id" component={Category} />
			<Route path="gif/:id" component={GifDetail} />
			<Route path="create" component={GifCreator} />
		</Route>
	</Router>
);

