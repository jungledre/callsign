var React = require('react');
var GameCard = React.createClass({
	render: function() {
		return ( 
			<div className='card'>
				<h1>{this.props.callSign}</h1>
			</div>
		)
	}
});

module.exports = GameCard;

