var React = require('react');
var GameCard = require('./GameCard');
var TurnAlert = require('./TurnAlert');

var GamePlay = React.createClass({
    getInitialState: function() {
        return {
            currentTurn: true,
            turnColor: 'Red',
            cards: this.props.cards || ['bird', 'dog', 'apple']
        }
    },

    handleClick: function() {
        var color = this.state.currentTurn == true ? 'Red' : 'Blue';
        this.setState({
            currentTurn: !this.state.currentTurn,
            turnColor: color
        });
    },

    render: function(){
        var self = this;
        var gameCards = this.state.cards.map(function(item, idx) {
            return (
                <GameCard key={'card-' + idx} handleClick={self.handleClick} item={item} />
            )
        })

        return (
            <div>
                <TurnAlert color={this.state.turnColor} />
                {gameCards}
            </div>
        )
    }
})

module.exports = GamePlay;
