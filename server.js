var express = require('express');
var app = express();

app.set('view engine', 'ejs');


//so cool!  res.render will automatically search for a views folder!
app.get('/', function(req, res) {
	res.render('pages/index');
});

app.get('/about', function(req, res) {
	res.render('pages/about');
})


app.listen(3000);
console.log("the magic is happening at 3000");