var React = require('react');
var CompletedGame = require('./CompletedGame');


var MyGames = React.createClass({
	games:['12/30/1985', '12/25/0000'],
	render: function() {
		var playez = this.games.map(function(item, idx) {
			return <CompletedGame key={idx} gameDate = {item}/>
		})
		return ( 
			<div >
				{playez}
			</div>
		)
	}
});

module.exports = MyGames;

