var express = require('express');
var app = express();

app.set('view engine', 'ejs');


//so cool!  res.render will automatically search for a views folder!
app.get('/', function(req, res) {
	var drinks = [
		{ name: 'Bloody Mary', drunkeness: 3}, 
		{ name: 'Martini', drunkeness: 5}, 
		{ name: 'Scotch', drunkeness: 10}, 

	];

	var tagline = "Any code of your own you havent' looked at for 6 months might as well have been written by somebody else";
	
	res.render('pages/index', {
		drinks: drinks, 
		tagline: tagline
	});
});

app.get('/about', function(req, res) {
	res.render('pages/about');
})


app.listen(3000);
console.log("the magic is happening at 3000");