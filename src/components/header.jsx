// Defines a navbar component
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var TopicStore = require('../stores/topic-store');
var Link = Router.Link;


/*****************************************************
	     DEFINING COMPONENT OBJECT TO BE EXPORTED
*****************************************************/
module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange')
	],

	getInitialState: function(){
		return {
			topics: []
		}
	},
	
	componentWillMount: function(){
		Actions.getTopics();
	},

	render: function(){
		// Note that we use the Link component here with an attribute of 'to' which acts 
		//very similar to an <a> tag with an 'href' attribute except that it lets ReactRouter
		//know to update the page without doing a full page refresh when the link is clicked
		return 	<nav className="navbar navbar-default header">
					<div className="container-fluid">
						<Link to="/" className="navbar-brand">
							Imgur Browser
						</Link>
						<ul className="nav navbar-nav navbar-right">
							{this.renderTopics()}
						</ul>
					</div>
				</nav>
	},
	
	// Note the use of the 'activeClassName' attribute on our Link component.  This will give this specific
	//component whatever class we provide when the url matches the value in its 'to' attribute.  Also note
	//that we included this for illustration purposes only as an active Link element will default to a class
	// of 'active' 
	renderTopics: function(){
		return this.state.topics.slice(0, 4).map(function(topic){
			return 	<li key={topic.id}>
						<Link activeClassName="active" to={"topics/" + topic.id}>
							{topic.name}
						</Link>
					</li>
		});
	},

	onChange: function(event, topics){
		this.setState({
			topics: topics
		});
	}

});






