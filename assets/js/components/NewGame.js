var React = require('react');
var NewGame = React.createClass({
	render: function() {
		return ( 
			<div >
				<h1>This will be the NewGame page</h1>
				<form action="" method="POST" role="form">
					<legend>Form title</legend>
				
					<div className="form-group">
						<label htmlFor="">label</label>
						<input type="text" className="form-control" id="" placeholder="Input field"/>
					</div>
				
					
				
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
});

module.exports = NewGame;

