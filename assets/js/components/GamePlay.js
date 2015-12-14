var React = require('react');
var Header = require('./Header');
var GameCard = require('./GameCard');
var TurnAlert = require('./TurnAlert');

var GamePlay = React.createClass({
	testz: ['bird', 'dog', 'apple'],
	render: function(){
		var cardz = this.testz.map(function(item, idx) {
			return <GameCard key={idx} callSign={item} />
		})
		return (
			<div>
				<TurnAlert color='red' />
				<TurnAlert color='blue' />
				{cardz}
			</div>
		)
	}
})

module.exports = GamePlay;