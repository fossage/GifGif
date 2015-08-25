// Renders a component for a single topic
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var ImageStore = require('../stores/image-store');
var ImagePreview = require('../components/image-preview');


/*****************************************************
		DEFINING COMPONENT TO BE EXPORTED
*****************************************************/
module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange')
	],

	getInitialState: function(){
		return {
			images: []
		}
	},

	componentWillMount: function(){
		Actions.getImages(this.props.params ? this.props.params.id : "0");
	},
	
	// This gets called every time the componenet receives new properties as opposed to component
	//will mount which only gets called once right when the component is inserted into the DOM.
	//Remember that this same componenet is rendered each time we click a topic link, and because
	//the topic link is the thing that will provide the data for the unique id of each category,
	//we need to trigger the action everytime our properties for our componenet update
	componentWillReceiveProps: function(nextProps){
		Actions.getImages(nextProps.params.id);
	},

	render: function(){
		return 	<div className="topic">
					{this.renderImages()}
				</div>
	},

	onChange: function(event, images){
		this.setState({images: images});
	},
	
	// The {...image} syntax in the ImagePreview section below spreads the properties of the image
	//so when we access it in the ImagePreview componenet definition we can just access something like
	//this.props.name or this.props.url as opposed to this.props.image.name or this.props.image.url	
	renderImages: function(){
		return this.state.images.map(function(image){
			return <ImagePreview key={image.id} {...image} />
		});
	}
})













