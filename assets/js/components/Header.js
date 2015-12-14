var React = require('react');
var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Title</a>
				</div>
		
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav">
						<li className="active"><a href="#">About</a></li>
						<li><a href="#">New Game</a></li>
						<li><a href="#">My Games</a></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#">Signup</a></li>
						<li><a href="#">Login</a></li>
					</ul>
				</div>
			</nav>
		)
	}
})

module.exports = Header;