var React = require('react');
var UserGame = React.createClass({
	render: function() {
		return ( 
			<div className='well' onClick={this.props.click}>
				<h1>{this.props.gameDate},{this.props.click}</h1>
			</div>
		)
	}
});

module.exports = UserGame;

