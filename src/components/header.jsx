// Defines a navbar component
/*****************************************************
			    INITIALIZATION BOILERPLATE
*****************************************************/
var React 	= require('react'),
	Router 	= require('react-router'),
	Link 	= Router.Link;

// React-Bootstrap Navbar components
var	Nav 			= require('react-bootstrap').Nav,
	Navbar 			= require('react-bootstrap').Navbar,
	NavItem 		= require('react-bootstrap').NavItem,
	MenuItem 		= require('react-bootstrap').MenuItem,
	DropdownButton 	= require('react-bootstrap').DropdownButton;

var categories 		= require('../utils/category-list').categories;

/*****************************************************
	     DEFINING COMPONENT OBJECT TO BE EXPORTED
*****************************************************/
module.exports = React.createClass({	
	render: function(){
		return 	(
				<Navbar inverse brand={<Link id="brand" to="/">GifGif</Link>}>
					<Nav left eventKey={1}>
						<li className="nav-item">
							<Link to="login">Login</Link>
						</li>
						<li className="nav-item">
							<Link to="register">Register</Link>
						</li>
					</Nav>
					<Nav right eventKey={0}>
						<li className="nav-item">
							<Link to="create">Create Gif</Link>
						</li>
						<DropdownButton  eventKey={2} title='Categories'>
					       {this.renderCategories()}
						</DropdownButton>
					</Nav>
				</Navbar>);	
			
	},
	
	renderCategories: function(){
		return categories.map(function(category){
			return 	(
					<MenuItem key={category.id}>
						<Link activeClassName="active" to={"category/" + category.id}>
							{category.name}
						</Link>
					</MenuItem>);
		});
	},

});






