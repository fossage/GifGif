var React = require('react');
var ProgressBar = require('react-bootstrap').ProgressBar;

module.exports = React.createClass({
	// componentWillMount: function(){
	// 	this.updateProgress();
	// },

	getInitialState: function(){
		return {
			progress: 0,
			text: ''
		}
	},

	componentDidMount: function() {
		var button = document.getElementById('record-button');
    	button.addEventListener('click', this.updateProgress);
  	},

	render: function(){
		return 	<div>
					<ProgressBar
						className={this.state.progress > 119 ? 'hidden' : ''} 
						id="progress-bar" 
						active 
						now={this.state.progress} 
					/>
					<h5 className="processing-text">{this.state.text}</h5>
				</div>
			
	},

	updateProgress: function(){
		var count = 0;
		var intervalID = setInterval(function(){
			count++;
			if(count > 60){
				this.processingText();
				clearInterval(intervalID);
			}
			this.setState({progress: count * 2});	
		}.bind(this), 85)
	},

	processingText: function(){
		this.setState({text: 'processing.'});
		var count = 0;
		var intervalID = setInterval(function(){
			count++;
			if(count > 15){
				this.setState({text: ''});
				clearInterval(intervalID);
			} else {
				if(this.state.text.length > 14){
					this.setState({text: 'processing.'});
				} else {
					this.setState({text: this.state.text + '.'});
				}
			}
		}.bind(this), 300);
	}
});




