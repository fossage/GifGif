// Renders a component for a single topic
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var React 		= require('react'),
	Reflux 		= require('reflux'),
	Actions 	= require('../actions/api-actions'),
	GifStore 	= require('../stores/gif-store'),
	GifPreview 	= require('../components/gif-preview');


/*****************************************************
		DEFINING COMPONENT TO BE EXPORTED
*****************************************************/
module.exports = React.createClass({
	/*--------INITIALIZATIONS/HANDLERS--------*/
	mixins: [
		Reflux.listenTo(GifStore, 'onChange')
	],

	getInitialState: function(){
		return {
			gifs: []
		}
	},

	componentWillMount: function(){
		Actions.getGifs(this.props.params ? this.props.params.id : "0");
	},
	
	componentWillReceiveProps: function(nextProps){
		if(nextProps.params){
			Actions.getGifs(nextProps.params.id);
		}
	},

	onChange: function(event, gifs){
		this.setState({gifs: gifs});
	},

	/*--------RENDER--------*/
	render: function(){
		return 	<div className="topic">
					{this.renderImages()}
				</div>
	},
	
	/*--------HELPERS--------*/
	renderImages: function(){
		return this.state.gifs.map(function(gif){
			return <GifPreview key={gif.id} {...gif} />
		});
	}
})













