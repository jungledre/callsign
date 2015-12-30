var React = require('react');
var NewGame = React.createClass({

    newGame: function() {
        $.ajax({
            type: "POST",
            url: 'http://localhost:3000/api/games',
            data: {
                played: new Date()
            },
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU2NmYzYTQ4YWE5MzM1NjY3YTJmMjgyMiIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInVzZXJuYW1lIjoidGVzdGluIiwiZ2FtZXMiOltdfQ.FHTSDci4qdt8yCCt4YLSyaMObVSzD3ltTghpPluSmR0'
            },
            success: function() {}
        });
    },

    render: function() {
        return (
            <div>
                <h1>Start a new game of CallSign</h1>
                <form action="" method="POST" role="form">
                    <button onClick={this.newGame} type="submit" className="btn btn-primary">Play</button>
                </form>
            </div>
        );
    }
});

module.exports = NewGame;
