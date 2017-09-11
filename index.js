var express = require('express');
var app = express();
var path = require('path');

app.use('/',express.static('public'));

app.listen(4000, function(){
	console.log('listening on port 4000');
})
