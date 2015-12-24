var React = require('react');
var UserGame = require('./UserGame');
var GamePlay = require('./GamePlay');

var MyGames = React.createClass({
    getInitialState:function() {
        return {
            games:[]
        };
    },

    getGames: function(){
        var self = this;
        $.ajax({
            type: "GET",
            url: 'http://localhost:3000/api/games',
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU2NmYzYTQ4YWE5MzM1NjY3YTJmMjgyMiIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInVzZXJuYW1lIjoidGVzdGluIiwiZ2FtZXMiOltdfQ.FHTSDci4qdt8yCCt4YLSyaMObVSzD3ltTghpPluSmR0'
            },
            success: function(data) {
                self.setState({games: data})
            }
        });
    },

    componentWillMount: function() {
        this.getGames();
    },

    render: function() {
        var self = this;
        var userGames = this.state.games.map(function(item, idx) {
            return <UserGame key={'game-' + idx} gameDate={item.played} handleClick={self.props.userGame}/>
        });

        return (
            <div>
                <h1>My Games</h1>
                {userGames}
            </div>
        )
    }
});

module.exports = MyGames;
