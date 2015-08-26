var React = require('react');
var ProgressBar = require('react-bootstrap').ProgressBar;

module.exports = React.createClass({
	componentWillMount: function(){
		this.updateProgress();
	},

	getInitialState: function(){
		return {
			progress: 0
		}
	},

	render: function(){
		return <ProgressBar id="progress-bar" active now={this.state.progress} />
	},

	updateProgress: function(){
		var count = 0;
		setInterval(function(){
			count++;
			if(count > 100){
				return;
			}
			this.setState({progress: count});	
		}.bind(this), 73)
	}
});