var React = require('react');
var UserGame = require('./UserGame');
var GamePlay = require('./GamePlay');


var MyGames = React.createClass({
	getInitialState:function() {
		return {games:[]};
	},
	getGames: function(){
		var self = this;
		$.ajax({
			type: "GET",
			url: 'http://localhost:3000/api/games', 
			headers:{Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU2NmYzYTQ4YWE5MzM1NjY3YTJmMjgyMiIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInVzZXJuYW1lIjoidGVzdGluIiwiZ2FtZXMiOltdfQ.FHTSDci4qdt8yCCt4YLSyaMObVSzD3ltTghpPluSmR0'},
			success: function(data){
				console.log(data);
				self.setState({games:data})}
		});
	},
	render: function() {
		this.getGames();
		var self = this;
		var playez = this.state.games.map(function(item, idx) {
			return <UserGame key={idx} gameDate={item.played} click={self.props.userGame}/>
		});
		return ( 
			<div >
				{playez}
			</div>
		)
	}
});

module.exports = MyGames;

