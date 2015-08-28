// A text input for adding text to the user made gifs

var React = require('react');
var Input = require('react-bootstrap').Input;
var SetGifTextAction = require('../actions/gif-creator-actions').setGifText;

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	      value: ''
	    };
	},

	handleChange: function() {
	    this.setState({
	      	value: this.refs.input.getValue()
	    }, function(){
	    	SetGifTextAction(this.state.value);
	    });
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