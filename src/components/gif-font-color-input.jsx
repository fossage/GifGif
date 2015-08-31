var React 			= require('react'),
	Input 			= require('react-bootstrap').Input,
	SetGifTextColorAction = require('../actions/gif-creator-actions').setGifTextColor;

module.exports = React.createClass({
	getInitialState: function(){
		return {
			color: '#fff'
		}
	},

	handleChange: function(event){
		SetGifTextColorAction(event.target.value);
	},

	render: function(){
		return 	<form onChange={this.handleChange}>
					<Input type='select' label='Text Color' placeholder='select a color...'>
					     <option value='#fff'>White</option>
					     <option value='#000'>Black</option>
					     <option value='#FF0000'><span>Red</span></option>
					     <option value='#FFA400'>Orange</option>
					     <option value='#FFF900'>Yellow</option>
					     <option value='#61FF00'>Green</option>
					     <option value='#3E4CFE'>Blue</option>
					     <option value='#672F89'>Purple</option>
					</Input>
				</form>
	}
});