var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var CommentStore = require('../stores/comment-store');
var Actions = require('../actions');
var CommentBox = require('./comment-box');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange'),
		Reflux.listenTo(CommentStore, 'onChange')
	],
	
	getInitialState: function(){
		return {
			image: null,
			comment: null
		}
	},
	
	componentWillMount: function(){
		Actions.getImage(this.props.params.id);
	},

	render: function(){
		return 	<div className="image-detail">
					{this.state.image ? this.renderContent() : null}
				</div>
	},

	onChange: function(){
		this.setState({
			image: ImageStore.find(this.props.params.id),
			comments: CommentStore.comment
		})
	}, 

	renderContent: function(){
		return 	<div>
					<div className="panel panel-default">
						<div className="panel-heading">
							<h4>{this.state.image.title}</h4>
						</div>
						<div className="panel-body">
							{this.renderImage()}
						</div>
						<div className="panel-footer">
							<h5>{this.state.image.description}</h5>
						</div>
					</div>
					<h3>Comments</h3>
					{this.renderComments()}
				</div>
	},

	renderImage: function(){
		if(this.state.image.animaged){
			return <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
						<source src={this.state.image.link} type="video/mp4"></source>
					</video>
		} else {
			return <img src={this.state.image.link} />
		}
	},

	renderComments: function(){
		if(!this.state.comments){
			return null;
		} else {
			return <CommentBox comments={this.state.comments} />
		}
	}


});