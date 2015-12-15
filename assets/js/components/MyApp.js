var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');
var About = require('./About');
var Splash = require('./Splash');
var NewGame = require('./NewGame');
var GamePlay = require('./GamePlay');
var Login = require('./Login');
var SignUp = require('./SignUp');
var MyGames = require('./MyGames');

var MyApp = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<Header/>
				<Login/>
				<SignUp/>
				<Splash/>
				<About/>
				<NewGame/>
				<GamePlay/>
				<MyGames/>
				<Footer/>
			</div>
		)
	}
})

module.exports = MyApp;