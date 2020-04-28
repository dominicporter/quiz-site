const express = require('express');
const  bodyParser = require("body-parser");
const questionsHandler = require('./backend/questions-handler');
const answersHandler = require('./backend/answers-handler');

// Constants
const PORT = 8080;

// App
const app = express();
var path = require('path');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.get('/questions', questionsHandler);
app.post('/answers', answersHandler);

app.use(express.static('build'));

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
