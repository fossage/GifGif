/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Reflux = require('reflux');
var Actions = require('../actions');

/*****************************************************
		    DEFINING OBJECT TO BE EXPORTED
*****************************************************/
module.exports = Reflux.createStore({
	/*--------INITIALIZATION--------*/
	listenables: [ Actions ],

	setGifText: function(text){
		this.trigger('change', text);
	}
})