var React = require('react');
var ProgressBar = require('react-bootstrap').ProgressBar;

module.exports = React.createClass({
	// componentWillMount: function(){
	// 	this.updateProgress();
	// },

	getInitialState: function(){
		return {
			progress: 0,
		}
	},

	componentDidMount: function() {
		var button = document.getElementById('record-button');
    	button.addEventListener('click', this.updateProgress);
  	},

	render: function(){
		return 	<ProgressBar
					className={this.state.progress > 119 ? 'hidden' : ''} 
					id="progress-bar" 
					active 
					now={this.state.progress} 
				/>
			
	},

	updateProgress: function(){
		var count = 0;
		setInterval(function(){
			count++;
			if(count > 60){
				return;
			}
			this.setState({progress: count * 2});	
		}.bind(this), 85)
	}
});