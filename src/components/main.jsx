// This is our main componenet that will be rendered at all times.  Everything else
//except TopicList, will be rendered as children of the main component
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var React 		= require('react'),
	Header 		= require('./header'),
	Category 	= require('./category');

// var Auth = require('./auth0-lock.jsx');

module.exports = React.createClass({
	render: function(){
		return 	<div>
					<Header />
					{this.content()}
				</div>
	},
	// We use this helper function to handle the rendering logic for our main view
	//If the user is at the base url we want to render the topic list, however if the
	//user is at a child url, we want to render the specific child component.
	content: function(){
		if(this.props.children){
			return this.props.children;
		} else {
			return <Category />
		}
	}
})