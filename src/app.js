
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

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


var PeopleAdd = React.createClass({

	getInitialState: function(){
		return {name: '', img: '', problem: '', solution: ''};
	},
	render: function() {
		return (
			<div className="peopleAdd">
				<form name="personAdd">
					<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChangeName}/>
					<input type="text" name="photo" placeholder="Photo" value={this.state.img} onChange={this.handleChangePhoto}/>
					<input type="text" name="problem" placeholder="Problem" value={this.state.problem} onChange={this.handleChangeProblem}/>
					<input type="text" name="solution" placeholder="Solution" value={this.state.solution} onChange={this.handleChangeSolution}/>
					<button onClick={this.handleSubmit}>Add Person</button>
				</form>
			</div>
		);
	},

	handleChangeName: function (e) {  this.setState({name: e.target.value});	},
	handleChangePhoto: function (e) {  this.setState({img: e.target.value});	},
	handleChangeProblem: function (e) {  this.setState({problem: e.target.value});	},
	handleChangeSolution: function (e) {  this.setState({solution: e.target.value});	},

	handleSubmit: function(e){
		e.preventDefault();
		var name = this.state.name.trim();
		var photo = this.state.img.trim();
		var problem = this.state.problem.trim();
		var solution = this.state.solution.trim();

		if(!name || !photo || !problem || !solution){
			return;
		}

		this.props.addperson({name: name, img: photo, problem: problem, solution: solution});
		this.setState({name: "", img: "", problem: "", solution: ""});
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

ReactDOM.render(
  <PeopleList />,
  document.getElementById('main')
);
