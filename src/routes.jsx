/*****************************************************
			  INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react');

// This includes the entire ReactRouter library
var ReactRouter = require('react-router');

// An object that tells the router how will be keeping track 
//of what page a user is on at any given time
var HashHistory = require('react-router/lib/hashhistory');

// The actual router that will decide what content to show on a
//page at any give time
var Router = ReactRouter.Router;

// An object used to configure the router
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');


/*****************************************************
			       MAIN CONTENT
*****************************************************/
module.exports = (
	// The parentheses here are jsx syntactic sugar(I think), but this will compile into a routes object

	// We always need to define Router as our top level component and then make everything inside
	//of it a specific route.

	// Path refers to our url path and component refers to which component to render when that 
	//route is visited. You can see how we have nested subsequent routes to generate the different
	//url endpoints
	
	// Hash history stores the history of our url info that occurs after the #
	// The value for the route parameter ':id' will be stored on this.props.id
	<Router history={new HashHistory} >
		<Route path="/" component={Main}>
			<Route path="topics/:id" component={Topic} />
			<Route path="images/:id" component={ImageDetail} />
		</Route>
	</Router>
);