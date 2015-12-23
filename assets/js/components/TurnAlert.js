var React = require('react');

var TurnAlert = React.createClass({
    render: function() {
        return (
            <div >
                <h1>{this.props.color + '\'s turn'}</h1>
            </div>
        )
    }
});

module.exports = TurnAlert;
