
//var React = require('react');
//var ReactDOM = require('react-dom');

var PeopleFilter = React.createClass({
	render: function() {
		return (
			<div className="peopleFilter">way to filter comes here</div>
		);
	}
});


var PeopleRow = React.createClass({
	render: function() {
		return (
			<tr className="peopleRow">
				<td>{this.props.id}</td>
				<td>{this.props.name}</td>
				<td>{this.props.img}</td>
				<td>{this.props.problem}</td>
				<td>{this.props.solution}</td>
			</tr>
		);
	}
});




var PeopleTable = React.createClass({
	render: function() {
		return (
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Photo</th>
						<th>Problem</th>
						<th>Solution</th>
					</tr>
				</thead>
				<tbody>
					<PeopleRow id={1} name="abhi" img="abhi pic" problem="food" solution="popeyes"/>
					<PeopleRow id={2} name="abhi2" img="abhi pic2" problem="food2" solution="popeyes2"/>
				</tbody>
			</table>
			
		);
	}
});



var PeopleAdd = React.createClass({
	render: function() {
		return (
			<div className="peopleAdd">way to add a ne person</div>
		);
	}
});



var PeopleList = React.createClass({
	render: function() {
		return (
			<div className="peopleList">
				<h1>People</h1>
				<PeopleFilter />
				<hr />
				<PeopleTable />
				<hr />
				<PeopleAdd />
				
			</div>
		);
	}
});

ReactDOM.render(
  <PeopleList />,
  document.getElementById('main')
);

/*
ReactDOM.render(
	<h1>Hello, wdasforld!</h1>,
	document.getElementById('example')
);
*/

