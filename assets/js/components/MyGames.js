var React = require('react');
var UserGame = require('./UserGame');
var GamePlay = require('./GamePlay');


var MyGames = React.createClass({
	games:['12/30/1985', '12/25/0000'],

	render: function() {
		var self = this;
		var playez = this.games.map(function(item, idx) {
			return <UserGame key={idx} gameDate={item} click={self.props.userGame}/>
		});
		return ( 
			<div >
				{playez}
			</div>
		)
	}
});

module.exports = MyGames;

