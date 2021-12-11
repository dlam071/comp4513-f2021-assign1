require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const helper = require("./handlers/helpers.js");
require("./handlers/dataConnector.js").connect();
require("./handlers/auth.js");

//get our data model
const User = require("./models/User.js");
const Play = require("./models/List.js");

//to tell node to use json and http header features
app.use(express.urlencoded({ extended: true }));

//use route handlers
const userRouter = require("./handlers/userRouter.js");
const listRouter = require("./handlers/listRouter.js");
userRouter.handleUserByID(app, User);
listRouter.handleAllPlays(app, Play);
listRouter.handlePlayByID(app, Play);

//view engine setup
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(cookieParser("RandysD*ng"));
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.get("/", helper.ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../Development/build/index.html"));
  app.use("/", express.static(path.join(__dirname, "../Development/build")));
});

app.get("/browse", helper.ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../Development/build/index.html"));
  app.use("/", express.static(path.join(__dirname, "../Development/build")));
});

app.get("/details", helper.ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../Development/build/index.html"));
  app.use("/", express.static(path.join(__dirname, "../Development/build")));
});

app.get("/login", (req, res) => {
  res.render("login.ejs", { message: req.flash("error") });
});

app.post("/login", async (req, resp, next) => {
  passport.authenticate("localLogin", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, resp, next);
});

app.get("/logout", (req, resp) => {
  req.logout();
  req.flash("info", "You were logged out");
  resp.render("login", { message: req.flash("info") });
});

console.log();

app.get('/currentUser', (req, res) => {
  User.find({ id: req.user.id }, "id", (err, data) => {
    if (err) {
      res.json({ message: 'User not found D:' });
    } else {
      res.send(data);
    }
  })
});

const port = process.env.port;
app.listen(port, () => {
  console.log("Server running at port= " + port);
});
