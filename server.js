const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('/ping',(req,res)=>{
    res.json({pong:true})
});

app.use(express.static('build'));

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
