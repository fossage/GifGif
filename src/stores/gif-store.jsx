// The stores are objects in charge of fetching and storing data for a particular thing
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions/api-actions');
var _ = require('lodash');
var queryMaker = require('../utils/category-list').queryMaker;

/*****************************************************
		    DEFINING OBJECT TO BE EXPORTED
*****************************************************/
module.exports = Reflux.createStore({
	/*--------INITIALIZATION--------*/
	listenables: [ Actions ],
	
	/*--------MAIN METHODS--------*/
	getGifs: function(categoryId){
		var queryString = queryMaker(categoryId);
		Api.get(queryString)
			.then(function(json){
				this.gifs = json.data;
				this.triggerChange();
			}.bind(this));
	},

	getGif: function(id){
		Api.show(id)
			.then(function(json){
				// This says 'if our images array already exists, push our newly fetched object into it
				//otherwise create an array which is initialized with our single image in it.  This allows
				//users to copy and paste in a url with a specific image id without having to have populated
				//our images array by hitting our main page first
				if(this.gifs){
					this.gifs.push(json.data)
				} else {
					this.gifs = [json.data];
				}
				this.triggerChange();
			}.bind(this));
	},

	// Returns the first result in this collection where the key 'id' equals the id property
	find: function(id){
		var image = _.findWhere(this.gifs, {id: id});
		// If we have this image, return it, otherwise run a method to get the image
		//and return null to let the caller finish its execution instead of waiting for a response
		if(image){
			return image;
		} else {
			this.getGif(id);
			return null;
		}
	},

	// Emit a change event for all listeners when we get in new data
	triggerChange: function(){
		this.trigger('change', this.gifs);
	}
});









