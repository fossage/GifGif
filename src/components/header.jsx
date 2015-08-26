// Defines a navbar component
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// React-Bootstrap Navbar components
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

var categories = require('../utils/category-list').categories;

/*****************************************************
	     DEFINING COMPONENT OBJECT TO BE EXPORTED
*****************************************************/
module.exports = React.createClass({
	
	render: function(){
		return 	<Navbar brand={<Link to="/">Giffle</Link>}>
					<Nav className="nav-right" right>
						<DropdownButton  eventKey={3} title='Categories'>
					       {this.renderTopics()}
						</DropdownButton>
					</Nav>
				</Navbar>	
			
	},
	
	renderTopics: function(){
		return categories.map(function(category){
			return 	<MenuItem key={category.id}>
						<Link activeClassName="active" to={"category/" + category.id}>
							{category.name}
						</Link>
					</MenuItem>
		});
	},

});






