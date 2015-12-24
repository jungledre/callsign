var React = require('react');

var GameCard = React.createClass({
    render: function() {
        return (
            <div className='col-md-2 col-sm-4 col-xs-6'>
                <button className='card btn-primary' onClick={this.props.handleClick}>
                        <h4>{this.props.item}</h4>
                </button>
            </div>
        )
    }
});

module.exports = GameCard;
