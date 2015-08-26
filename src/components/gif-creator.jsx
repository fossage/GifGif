var React = require('react');
var GifShot = require('../../gifshot/build/gifshot.js');
var UpdateProgressBar = require('./update-progress-bar');
console.log(GifShot);

module.exports = React.createClass({
	getInitialState: function(){
		return {
			progress: 0,
			src: ''
		}
	},

	componentWillMount: function(){
		this.createGif();
		// this.updateProgress();
	},

	render: function(){
		return 	<div>
					<div className="gifshot-image-preview"></div>
					<div className="placeholder-div">
						<img src={this.state.src} />
              		</div>
              		<UpdateProgressBar />
				</div>
	},

	createGif: function(){
		GifShot.createGIF({numFrames: 50}, function (obj) {
		    if (!obj.error) {
		    	console.log(obj);
		        this.setState({src: obj.image});
		    } else {
		    	console.log(obj.error);
		    }
		}.bind(this));
	}
})