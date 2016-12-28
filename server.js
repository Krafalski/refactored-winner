//DEPENDENCIES
var bodyParser     = require ( 'body-parser' );
var express        = require ( 'express' );
var methodOverride = require ( 'method-override' );
var mongoose       = require ('mongoose');

var app            = express ();


//PORT
var PORT           = process.env.PORT || 3000;

//MIDDLEWARE
app.use( bodyParser.urlencoded( { extended : false } ));
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );
app.use( methodOverride( '_method' ) );

//CONTROLLERS
//
// var commentsController = ('./controllers/comments.js');
// app.use('/comments', commentsController);
//
// var postsController   = ('./controllers/posts.js');
// app.use('/posts', postsController);
//
// var sessionsController     = ('./controllers/sessions.js');
// app.use('/sessions', sessionsController);
//
// var usersController = require('./controllers/users.js');
// app.use('/users', usersController);

app.get('/', function (req, res){
  res.render('index.ejs');
});

//DATABASE
// mongoose.connect('mongodb://localhost:27017/blog');
// mongoose.connection.once('open', function(){console.log('connected to mongo');});

//SERVER
app.listen(PORT, function(){
  console.log('My thoughts are on port', PORT);
})
