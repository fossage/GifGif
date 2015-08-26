var React = require('react');
var Reflux = require('reflux');
var GifStore = require('../stores/gif-store');
var Actions = require('../actions');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(GifStore, 'onChange'),
	],
	
	getInitialState: function(){
		return {
			gif: null,
		}
	},
	
	componentWillMount: function(){
		Actions.getGif(this.props.params.id);
	},

	render: function(){
		return 	<div className="gif-detail">
					{this.state.gif ? this.renderContent() : null}
				</div>
	},

	onChange: function(){
		this.setState({
			gif: GifStore.find(this.props.params.id),
		})
	}, 

	renderContent: function(){
		return 	<div>
					<div className="panel panel-default">
						<div className="panel-heading">
							<h4>{this.state.gif.caption}</h4>
						</div>
						<div className="panel-body">
							{this.renderImage()}
						</div>
					</div>
				</div>
	},

	renderImage: function(){
		return <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
					<source src={this.state.gif.images.original.mp4} type="video/mp4"></source>
				</video>
	}
});









