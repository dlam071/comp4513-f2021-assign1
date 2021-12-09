require("dotenv").config();

const express = require("express");
const cookieParser = require('cookie-parser')
const path = require("path");
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const helper = require('./handlers/helpers.js');
require('./handlers/dataConnector.js').connect();
require('./handlers/auth.js')

//get our data model
const User = require("./models/User.js");
const Play = require("./models/List.js");

//to tell node to use json and http header features
app.use(express.urlencoded({ extended: true }));
const publicPath = path.join(__dirname, "../Development/build");
app.use(express.static(publicPath));

//use route handlers
const userRouter = require("./handlers/userRouter.js");
const listRouter = require("./handlers/listRouter.js");
userRouter.handleUserByID(app, User);
listRouter.handleAllPlays(app, Play);
listRouter.handlePlayByID(app, Play);

//create connection to database
require("./handlers/dataConnector.js").connect();

//view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(cookieParser('RandysD*ng'))
app.use(
        session({
            secret: process.env.SECRET,
            resave: true,
            saveUninitialized: true
        })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// app.get('/', (req, res) => {
//     res.render('home.ejs',
//         { data1: 'hello', data2: 'world' });
// });

app.get('/', helper.ensureAuthenticated, (req, res) => {
    res.render('home.ejs',
        { user:req.user });
});

app.get('/login', (req,res) => {
    res.render('login.ejs', {message: req.flash('error')});
});

app.post('/login', async (req, resp, next) => {
    passport.authenticate('localLogin',
                           {successRedirect: '/',
                            failureRedirect: '/login',
                            failureFlash: true })(req, resp, next);
});

app.get('/logout', (req, resp) => {
    req.logout();
    req.flash('info', 'You were logged out');
    resp.render('login', {message: req.flash('info')} );
});

console.log()

const port = process.env.port;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});