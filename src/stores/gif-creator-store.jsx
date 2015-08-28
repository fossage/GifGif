/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Reflux = require('reflux');
var Actions = require('../actions/gif-creator-actions');

/*****************************************************
		    DEFINING OBJECT TO BE EXPORTED
*****************************************************/
module.exports = Reflux.createStore({
	/*--------INITIALIZATION--------*/
	listenables: [ Actions ],

	gifProps: {text:'', color: '#fff'},

	setGifText: function(text){
		this.gifProps.text = text;
		this.trigger('change', this.gifProps);
	},

	setGifTextColor: function(color){
		this.gifProps.color = color;
		this.trigger('change', this.gifProps);
	}
})