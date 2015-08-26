// Creates the componenet that will render a single gif to be rendered in our category
//index view
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
	/*--------INITIALIZATIONS/HANDLERS--------*/
	getInitialState: function(){
		return {
			hovering: false
		}
	},

	handleMouseEnter: function(e){
		this.setState({hovering: true});
	},

	handleMouseLeave: function(e){
		this.setState({hovering: false});
	},

	/*--------RENDER--------*/
   	// Uses ternary to determine whether to render the static image or the animated gif version
	render: function(){
		return 	<Link
					to={"gif/" + this.props.id}
					className="gif-preview"
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					>
					{this.state.hovering ? this.video() : this.static()}
					{!this.state.hovering ? this.icon() : null }
				</Link>
	},
    
    /*--------HELPERS--------*/
	static: function(){
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
	}
});








