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
var NavItem = require('react-bootstrap').NavItem;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

var categories = require('../utils/category-list').categories;

/*****************************************************
	     DEFINING COMPONENT OBJECT TO BE EXPORTED
*****************************************************/
module.exports = React.createClass({
	
	render: function(){
		return 	<Navbar inverse brand={<Link id="brand" to="/">GifGif</Link>}>
					<Nav right eventKey={0}>
						<li className="nav-item">
							<Link to="create">Create Gif</Link>
						</li>
						<DropdownButton  eventKey={2} title='Categories'>
					       {this.renderCategories()}
						</DropdownButton>
					</Nav>
				</Navbar>	
			
	},
	
	renderCategories: function(){
		return categories.map(function(category){
			return 	<MenuItem key={category.id}>
						<Link activeClassName="active" to={"category/" + category.id}>
							{category.name}
						</Link>
					</MenuItem>
		});
	},

});






