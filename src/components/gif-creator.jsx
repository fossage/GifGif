var React = require('react');
var GifShot = require('../../gifshot/build/gifshot.js');
var Reflux = require('reflux');
var GifCreatorStore = require('../stores/gif-creator-store');

//Components
var Button = require('react-bootstrap').Button;
var UpdateProgressBar = require('./update-progress-bar');
var TextInput = require('./gif-text-input');
var Select = require('./gif-font-color-input');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(GifCreatorStore, 'onChange'),
	],

	getInitialState: function(){
		return {
			src: '',
			recording: 'Begin Recording',
			text: null,
			fontColor: '#fff'
		}
	},

	onChange: function(event, gifProps){
		this.setState({text: gifProps.text});
		this.setState({color: gifProps.color});
	},

	render: function(){
		return 	<div className="row">
					<div className="col-md-3">
						<TextInput />
						<hr/>
						<Select />
					</div>
					<div className="col-md-6">
						<div className="gifshot-image-preview"></div>
						<div className="placeholder-div">
							<img src={this.state.src} />
	              		</div>
	              		<UpdateProgressBar />
						<div className="button-container">
							<Button 
								id="record-button" 
								bsStyle={this.state.recording == "Recording..." ? "danger" : "success"}
								onClick={this.createGif} 
								>
								{this.state.recording}
							</Button>
						</div>
					</div>
				</div>
	},

	createGif: function(){
		this.setState({recording: 'Recording...'})
		console.log(this.state.color);
		GifShot.createGIF({
				numFrames: 50, 
				fontColor: this.state.color,
				text:this.state.text,
				gifWidth: 300,
				gifHeight: 300
			}, 
			function (obj) {
		    if (!obj.error) {
		    	console.log(obj);
		    	this.setState({recording: 'Re-record'})
		        this.setState({src: obj.image});
		    }
		}.bind(this));
	},
})










