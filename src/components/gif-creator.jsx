var React  			= require('react'),
	Reflux 			= require('reflux'),
	GifShot 		= require('../../gifshot/build/gifshot.js'),
	GifCreatorStore = require('../stores/gif-creator-store');

//Components
var Button 				= require('react-bootstrap').Button,
	Select 				= require('./gif-font-color-input');
	TextInput 			= require('./gif-text-input'),
	UpdateProgressBar 	= require('./update-progress-bar'),

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
		return (
				<div className="row">
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
				</div>);
	},

	createGif: function(){
		this.setState({recording: 'Recording...'})
		GifShot.createGIF({
				numFrames: 50, 
				fontColor: this.state.color,
				text:this.state.text,
				gifWidth: 300,
				gifHeight: 300
			}, 
			function (obj) {
		    if (!obj.error) {
		    	this.setState({recording: 'Re-record'})
		        this.setState({src: obj.image});
		    }
		}.bind(this));
	},
})










