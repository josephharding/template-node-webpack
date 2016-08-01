import express from 'express'
import q from 'q'
import enrouten from 'express-enrouten'

var app = express();

var port = process.env.PORT || 8080;
app.listen(port);

// Hook up router
app.use(enrouten({ directory: 'controllers' }))

app.use(express.static('react_client/build'));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/react_client/index.html"); 
});

/*
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
	  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
*/

app.use(express.static(__dirname + '/public'));
