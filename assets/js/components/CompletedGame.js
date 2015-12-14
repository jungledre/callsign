var React = require('react');
var CompletedGame = React.createClass({
	render: function() {
		return ( 
			<div className='well' >
				<h1>{this.props.gameDate}</h1>
			</div>
		)
	}
});

module.exports = CompletedGame;

