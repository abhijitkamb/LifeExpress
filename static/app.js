
//var React = require('react');
//var ReactDOM = require('react-dom');

var PeopleFilter = React.createClass({
	displayName: "PeopleFilter",

	render: function () {
		return React.createElement(
			"div",
			{ className: "peopleFilter" },
			"way to filter comes here"
		);
	}
});

var PeopleRow = React.createClass({
	displayName: "PeopleRow",

	render: function () {
		return React.createElement(
			"tr",
			{ className: "peopleRow" },
			React.createElement(
				"td",
				null,
				this.props.people.id
			),
			React.createElement(
				"td",
				null,
				this.props.people.name
			),
			React.createElement(
				"td",
				null,
				this.props.people.img
			),
			React.createElement(
				"td",
				null,
				this.props.people.problem
			),
			React.createElement(
				"td",
				null,
				this.props.people.solution
			)
		);
	}
});

var PeopleData = [{ id: 1, name: "abhi", img: "abhi pic", problem: "fosdfgod", solution: "popeyes" }, { id: 2, name: "abhi2", img: "abhiasdf pic2", problem: "food2", solution: "popeyes2" }];

var PeopleTable = React.createClass({
	displayName: "PeopleTable",

	render: function () {
		//console.log("Rendering peopl table, num items:", this.props.peopledata.length);
		var peoplerows = this.props.peopledata.map(function (people) {
			return React.createElement(PeopleRow, { key: people.id, people: people });
		});

		return React.createElement(
			"table",
			null,
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"ID"
					),
					React.createElement(
						"th",
						null,
						"Name"
					),
					React.createElement(
						"th",
						null,
						"Photo"
					),
					React.createElement(
						"th",
						null,
						"Problem"
					),
					React.createElement(
						"th",
						null,
						"Solution"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				peoplerows
			)
		);
	}
});

var PeopleAdd = React.createClass({
	displayName: "PeopleAdd",


	getInitialState: function () {
		return { name: '', img: '', problem: '', solution: '' };
	},
	render: function () {
		return React.createElement(
			"div",
			{ className: "peopleAdd" },
			React.createElement(
				"form",
				{ name: "personAdd" },
				React.createElement("input", { type: "text", name: "name", placeholder: "Name", value: this.state.name, onChange: this.handleChangeName }),
				React.createElement("input", { type: "text", name: "photo", placeholder: "Photo", value: this.state.img, onChange: this.handleChangePhoto }),
				React.createElement("input", { type: "text", name: "problem", placeholder: "Problem", value: this.state.problem, onChange: this.handleChangeProblem }),
				React.createElement("input", { type: "text", name: "solution", placeholder: "Solution", value: this.state.solution, onChange: this.handleChangeSolution }),
				React.createElement(
					"button",
					{ onClick: this.handleSubmit },
					"Add Person"
				)
			)
		);
	},

	handleChangeName: function (e) {
		this.setState({ name: e.target.value });
	},
	handleChangePhoto: function (e) {
		this.setState({ img: e.target.value });
	},
	handleChangeProblem: function (e) {
		this.setState({ problem: e.target.value });
	},
	handleChangeSolution: function (e) {
		this.setState({ solution: e.target.value });
	},

	handleSubmit: function (e) {
		e.preventDefault();
		var name = this.state.name.trim();
		var photo = this.state.img.trim();
		var problem = this.state.problem.trim();
		var solution = this.state.solution.trim();

		if (!name || !photo || !problem || !solution) {
			return;
		}

		// TODO: send request to the server
		this.props.addperson({ name: name, img: photo, problem: problem, solution: solution });
		this.setState({ name: "", img: "", problem: "", solution: "" });
	}

});

var PeopleList = React.createClass({
	displayName: "PeopleList",


	getInitialState: function () {
		return { peopledata: PeopleData };
	},
	render: function () {
		return React.createElement(
			"div",
			{ className: "peopleList" },
			React.createElement(
				"h1",
				null,
				"People"
			),
			React.createElement(PeopleFilter, null),
			React.createElement("hr", null),
			React.createElement(PeopleTable, { peopledata: this.state.peopledata }),
			React.createElement("hr", null),
			React.createElement(PeopleAdd, { addperson: this.addPerson })
		);
	},

	addPerson: function (person) {
		person.id = this.state.peopledata.length + 1;
		var peopleModified = this.state.peopledata.slice();
		peopleModified.push(person);
		this.setState({ peopledata: peopleModified });
	}

});

ReactDOM.render(React.createElement(PeopleList, null), document.getElementById('main'));

/*
ReactDOM.render(
	<h1>Hello, wdasforld!</h1>,
	document.getElementById('example')
);
*/