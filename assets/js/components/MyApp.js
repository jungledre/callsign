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
		var content = [
			<SignUp/>,
			<Splash/>,
			<About/>,
			<NewGame/>,
			<GamePlay/>,
			<MyGames/>
		];
		return (
			<div className='container'>
				<Header/>
				<Login/>
				<div>
				<div>
				<Footer/>
			</div>
		)
	}
})

module.exports = MyApp;