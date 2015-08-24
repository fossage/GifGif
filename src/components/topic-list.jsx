// Defines a component that lists the categories we get back from the API
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var Link = ReactRouter.Link;


/*****************************************************
	     DEFINING COMPONENT OBJECT TO BE EXPORTED
*****************************************************/
module.exports = React.createClass({
	mixins: [
		// This says that this module needs to listen to any event triggered by TopicStore
		//When TopicStore emits an event, call the onChange method
		Reflux.listenTo(TopicStore, 'onChange')
	],

	// Initializes properties on our component.  By initializing topics to an empty array
	//we don't run into errors further down in our renderTopics method if we haven't yet
	//got data to populate the topics array
	getInitialState: function(){
		return {
			topics: []
		}
	},
	
	// This is always ran right before render
	componentWillMount: function(){
		Actions.getTopics();
	},

	render: function(){
		return 	<div className="list-group">
					{this.renderTopics()}
				</div>
	},

	// We use .map to generate an array of <li> components which  
	//React automatically knows to render out one after the other
	renderTopics: function(){
		return this.state.topics.slice(0, 4).map(function(topic){
			return 	<Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
						<h4>{topic.name}</h4>
						<p>{topic.description}</p>
					</Link>
		});
	},

	// Reflux.listenTo will automatically pass the event name as the first argument and the second
	//argument will be whatever data we gave to our TopicStore.trigger method in its second argument
	onChange: function(event, topics){
		this.setState({topics: topics})
	}
});