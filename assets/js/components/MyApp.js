var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');
var About = require('./About');
var Splash = require('./Splash');
var NewGame = require('./NewGame');
var GamePlay = require('./GamePlay');

var MyApp = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<Header/>
				<Splash/>
				<About/>
				<NewGame/>
				<GamePlay/>
				<Footer/>
			</div>
		)
	}
})

module.exports = MyApp;