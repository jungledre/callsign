var React = require('react');

var GameCard = React.createClass({
    render: function() {
        return (
            <a href="#">
                <div className='card' onClick={this.props.handleClick}>
                    <h1>{this.props.item}</h1>
                </div>
            </a>
        )
    }
});

module.exports = GameCard;
