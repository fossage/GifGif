var React = require('react');
var Input = require('react-bootstrap').Input;
var SetGifTextColorAction = require('../actions').setGifTextColor;

module.exports = React.createClass({
	getInitialState: function(){
		return {
			value: true
		}
	},

	render: function(){
		var color = {color: 'red'};
		return 	<form>
					<Input type='select' label='Text Color' placeholder='select a color...'>
					     <option className="white" value='#fff'>White</option>
					     <option value='#000'>Black</option>
					     <option value='#EE4144'><span>Red</span></option>
					     <option value='#F37033'>Orange</option>
					     <option value='#ffff00'>Yellow</option>
					     <option value='#62BC4D'>Green</option>
					     <option value='#1E98D3'>Blue</option>
					     <option value='#672F89'>Purple</option>
					</Input>
				</form>
	}
});