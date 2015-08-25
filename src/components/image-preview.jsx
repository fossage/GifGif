// Creates the componenet that will render a single image from imgur
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


/*****************************************************
		   DEFINING COMPONENT OBJECT TO BE EXPORTED
*****************************************************/
module.exports = React.createClass({
	getInitialState: function(){
		return {
			hovering: false
		}
	},

	// Here we use a ternary to determine whether we are rendering a static image or a gif and we use
	//the helper methods down below to give us the proper tags for each.  We are also using our onMouseEnter
	//and onMouseLeave event listeners to let us know when we are hovering, which we can use to make the gifs
	//play on hover
	render: function(){
		return 	<Link
					to={"images/" + this.props.id}
					className="image-preview"
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					>
					{this.state.hovering ? this.video() : this.image()}
					{!this.state.hovering ? this.icon() : null }
				</Link>
	},

	image: function(){
		var link = this.props.images.fixed_height_still.url;
		return 	<img src={link} />
	},

	// The .mp4 prop is a direct link to the animated version of the image/gif
	video: function(){
		return 	<div className="video-container">
					<video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
						<source src={this.props.images.fixed_height.mp4} type="video/mp4" />
					</video>
				</div>
	},

	icon: function(){
		return 	<span className="glyphicon glyphicon-play"></span>
	},

	handleMouseEnter: function(e){
		this.setState({hovering: true});
	},

	handleMouseLeave: function(e){
		this.setState({hovering: false});
	}
});