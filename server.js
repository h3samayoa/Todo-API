var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Send your homework email!',
	completed: false
}, {
	id: 2,
	description: 'Hang out with friends',
	completed: false
}, 
	id: 3, 
	description: 'Wake up''
	completed: true
];

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// Get /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});
// Get /todos/:id

app.listen(PORT, function() {
	console.log('Express listening on port '+ PORT + '!');
});