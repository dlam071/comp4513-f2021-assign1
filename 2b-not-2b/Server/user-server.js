require('dotenv').config();

const express = require('express');
const app = express();

//get our data model
const User = require('./models/User.js');

//to tell node to use json and http header features 
app.use(express.urlencoded({ extended: true }));

//use route handlers
const userRouter = require('./handlers/userRouter.js');
userRouter.handleUserByID(app, User);
userRouter.handleAllUsers(app, User);

//create connection to database
require('./handlers/dataConnector.js').connect();

const port = process.env.port;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});
