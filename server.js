//DEPENDENCIES
var bodyParser     = require ( 'body-parser' );
var express        = require ( 'express' );
var methodOverride = require ( 'method-override' );
var mongoose       = require ( 'mongoose' );
var session        = require ( 'express-session' );

var app            = express ();


//PORT
var PORT           = process.env.PORT || 3001;

//MIDDLEWARE
app.use( bodyParser.urlencoded( { extended : false } ));
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );
app.use( methodOverride( '_method' ) );

//SESSIONS
app.use( session({
  secret: 'spaghetticats',
  resave: false,
  saveUninitialized: false
}));

//CONTROLLERS

var sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

var usersController = require('./controllers/users.js');
app.use('/users', usersController);

app.get('/', function (req, res){
  res.render('index.ejs', {
    currentUser: req.session.currentuser
  });
});

var profileController   = require ('./controllers/profile.js');
app.use('/profile', profileController);


//DATABASE
mongoose.connect('mongodb://localhost:27017/vision-planner');
mongoose.connection.once('open', function(){console.log('connected to mongo');});

//SERVER
app.listen(PORT, function(){
  console.log('My thoughts are on port', PORT);
})
