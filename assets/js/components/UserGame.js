var React = require('react');

var UserGame = React.createClass({
    render: function() {
        return (
            <div className='well' onClick={this.props.handleClick}>
                <h1>{this.props.gameDate}</h1>
            </div>
        );
    }
});

module.exports = UserGame;
