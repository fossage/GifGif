'use strict';
module.exports = function(app) {
  	var gifs = require('../controllers/gifs.js');

// Gifs
    // Index
	app.get('/gifs/:category', function(req, res) { gifs.index(req, res); });
	// Show
	app.get('/gif/:id', function(req, res) { gifs.show(req, res); });
	

	// New
	app.get('/users/new', function(req, res) { users.create(req, res); });
	// Edit 
	app.post('/users/:id/edit', function(req, res) { users.update(req, res); });
	// Create
	app.post('/users', function(req, res) { users.create(req, res); });	
	// Destroy app.delete('/users/:id')
	app.post('/users/:id/destroy', function(req, res) { users.destroy(req, res); });
	// Update app.put/patch('/users/:id') 
	app.post('/users/:id/update', function(req, res) { users.update(req, res); });



// WILDCARD Redirect to Mask unused urls.
	app.get('/*', function(req, res){
		res.redirect('/');
	});
	app.post('/*', function(req, res){
		res.redirect('/');
	});

};