// A text input for adding text to the user made gifs

var React 				= require('react');
	Input 				= require('react-bootstrap').Input,
	SetGifTextAction 	= require('../actions/gif-creator-actions').setGifText;

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	      value: ''
	    };
	},

	componentDidMount: function() {
		var button = document.getElementById('record-button');
    	button.addEventListener('click', this.updateText);
  	},

	handleChange: function() {
	    this.setState({
	      	value: this.refs.input.getValue()
	    }, function(){
	    	SetGifTextAction(this.state.value);
	    });
	},

	updateText: function(){
		this.setState({value: ''});
	},

	render: function(){
		return 	<Input
					type="text"
					value={this.state.value}
					placeholder="enter text...."
					label="Add text to your gif"
					help='Enter text before hitting record'
					ref='input'
			        groupClassName='group-class'
			        labelClassName='label-class'
			        onChange={this.handleChange} 
			    />
	}
});