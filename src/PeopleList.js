var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var PeopleFilter = require('./PeopleFilter');
var PeopleAdd = require('./PeopleAdd');

var PeopleRow = React.createClass({
	render: function() {
		return (
			<tr className="peopleRow">
				<td>{this.props.people._id}</td>
				<td>{this.props.people.name}</td>
				<td>{this.props.people.img}</td>
				<td>{this.props.people.problem}</td>
				<td>{this.props.people.solution}</td>
			</tr>
		);
	}
});
 
 
var PeopleTable = React.createClass({
	render: function() {
		//console.log("Rendering peopl table, num items:", this.props.peopledata.length);
		var peoplerows = this.props.peopledata.map(function(people){
			return (<PeopleRow key={people._id} people={people} />)
		});

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
					{peoplerows}
				</tbody>
			</table>
			
		);
	}
});

var PeopleList = React.createClass({

	getInitialState: function() {
    	return {peopledata: []};
  	},
  	componentDidMount: function() {
  		$.ajax('/api/people').done(function (data) {
  			this.setState({peopledata: data});
  		}.bind(this));

  		//handle errors: https://facebook.github.io/react/docs/tutorial.html#updating-state
  	},
	render: function() {
		return (
			<div className="peopleList">
				<h1>People</h1>
				<PeopleFilter />
				<hr />
				<PeopleTable peopledata={this.state.peopledata} />
				<hr />
				<PeopleAdd addperson={this.addPerson}/>
				
			</div>
		);
	},


	addPerson: function (person) {

		$.ajax({
			url: '/api/people',
			contentType: 'application/json',
			type: 'POST',
			data: JSON.stringify(person),
			success: function (data){
				var p = data;
				var peopleModified = this.state.peopledata.concat(p);
				this.setState({peopledata: peopleModified});
			}.bind(this),
			error: function (xhr, status, err) {
				console.log("Error adding person: ", err.toString())
			}

		});
	}

});

module.exports = PeopleList;