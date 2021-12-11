const helper = require('./helpers.js');
const passport = require("passport");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("express-flash");

//get user by id
handleUserByID = (app, User) => {
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
    app.get('/api/user/:id', helper.ensureAuthenticated, (req, resp) => {
            User.find({ id: req.params.id }, "id details picture membership email" ,(err, data) => {
                if (data) {
                    resp.json(data);
                } else {
                    resp.json({ message: 'User not found :(' });
                }
            })
        });
}

module.exports = {
    handleUserByID
};