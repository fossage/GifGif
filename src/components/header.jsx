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

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;


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
		return 	<Navbar brand="Gifl">
					<Nav className="nav-right" right>
						<DropdownButton  eventKey={3} title='Dropdown'>
					       {this.renderTopics()}
						</DropdownButton>
					</Nav>
				</Navbar>	
			
	},
	
	// Note the use of the 'activeclassName' attribute on our Link component.  This will give this specific
	//component whatever ClassName we provide when the url matches the value in its 'to' attribute.  Also note
	//that we included this for illustration purposes only as an active Link element will default to a ClassName
	// of 'active' 
	renderTopics: function(){
		return this.state.topics.map(function(topic){
			return 	<MenuItem key={topic.id}>
						<Link activeClassName="active" to={"topics/" + topic.id}>
							{topic.name}
						</Link>
					</MenuItem>
		});
	},

	onChange: function(event, topics){
		this.setState({
			topics: topics
		});
	}

});






