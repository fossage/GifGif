// The stores are objects in charge of fetching and storing data for a particular thing
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
	listenables: [ Actions ],
	
	getImages: function(categoryId){
		// Make helper that can convert categoryId to appropriate query string 
		var queryString = this.queryMaker(categoryId);
		Api.get(queryString)
			.then(function(json){
				this.images = json.data;
				this.triggerChange();
			}.bind(this));
	},

	// The .findWhere method takes a collecion of data as the first argument and returns the first
	//matched based on the object passed into the second argument, so this says return the first
	//result in this collection where the key 'id' equals the id property that we passed in
	find: function(id){
		var image = _.findWhere(this.images, {id: id});
		// This block says if we have this image, return it, otherwise run a method to get the image
		//and return null to let the caller finish its execution instead of waiting for a response
		if(image){
			return image;
		} else {
			this.getImage(id);
			return null;
		}
	},
	
	getImage: function(id){
		Api.get(id)
			.then(function(json){
				// This says 'if our images array already exists, push our newly fetched object into it
				//otherwise create an array which is initialized with our single image in it.  This allows
				//users to copy and paste in a url with a specific image id without having to have populated
				//our images array by hitting our main page first
				if(this.images){
					this.images.push(json.data)
				} else {
					this.images = [json.data];
				}

				this.triggerChange();
			}.bind(this));
	},

	// Emit a change event for all listeners when we get in new data
	triggerChange: function(){
		this.trigger('change', this.images);
	},

	// Helper function to generate an appropriate query string based on the topicId
	queryMaker: function(categoryId){
		switch(categoryId){
			case '1': return 'search?q=funny';
			case '2': return 'search?q=aww';
			case '3': return 'search?q=awesome';
			case '4': return 'search?q=8-bit';
			case '5': return 'search?q=rad';
			case '6': return '';
			case '0': return '';
		}
	}
});









