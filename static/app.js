
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
				this.props.id
			),
			React.createElement(
				"td",
				null,
				this.props.name
			),
			React.createElement(
				"td",
				null,
				this.props.img
			),
			React.createElement(
				"td",
				null,
				this.props.problem
			),
			React.createElement(
				"td",
				null,
				this.props.solution
			)
		);
	}
});

var PeopleTable = React.createClass({
	displayName: "PeopleTable",

	render: function () {
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
				React.createElement(PeopleRow, { id: 1, name: "abhi", img: "abhi pic", problem: "food", solution: "popeyes" }),
				React.createElement(PeopleRow, { id: 2, name: "abhi2", img: "abhi pic2", problem: "food2", solution: "popeyes2" })
			)
		);
	}
});

var PeopleAdd = React.createClass({
	displayName: "PeopleAdd",

	render: function () {
		return React.createElement(
			"div",
			{ className: "peopleAdd" },
			"way to add a ne person"
		);
	}
});

var PeopleList = React.createClass({
	displayName: "PeopleList",

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
			React.createElement(PeopleTable, null),
			React.createElement("hr", null),
			React.createElement(PeopleAdd, null)
		);
	}
});

ReactDOM.render(React.createElement(PeopleList, null), document.getElementById('main'));

/*
ReactDOM.render(
	<h1>Hello, wdasforld!</h1>,
	document.getElementById('example')
);
*/