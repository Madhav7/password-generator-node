const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

// sendFile will go here
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });
// app.get('/', function(req, res){
//   res.render('index');
// });

app.listen(port);
console.log('Server started at http://localhost:' + port);
