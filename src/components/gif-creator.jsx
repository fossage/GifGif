var React = require('react');
var GifShot = require('../../gifshot/build/gifshot.js');
var UpdateProgressBar = require('./update-progress-bar');
var Button = require('react-bootstrap').Button;

console.log(GifShot);

module.exports = React.createClass({
	getInitialState: function(){
		return {
			src: '',
			recorded: false
		}
	},

	render: function(){
		return 	<div>
					<div className="gifshot-image-preview"></div>
					<div className="placeholder-div">
						<img src={this.state.src} />
              		</div>
              		<UpdateProgressBar />
					<div className="button-container">
						<Button 
							id="record-button" 
							bsStyle="success" 
							onClick={this.createGif} 
							>
							{this.state.recorded ? 'Re-record' : 'Begin Recording'}
						</Button>
					</div>
				</div>
	},

	createGif: function(){
		GifShot.createGIF({numFrames: 50}, function (obj) {
		    if (!obj.error) {
		    	console.log(obj);
		    	this.setState({recorded: true})
		        this.setState({src: obj.image});
		    }
		}.bind(this));
	},
})