require('dotenv').config();

const express = require('express');
const app = express();

//get our data model
const Play = require('./models/List.js');

//to tell node to use json and http header features 
app.use(express.urlencoded({ extended: true }));

//use route handlers
const listRouter = require('./handlers/listRouter.js');
listRouter.handleAllPlays(app, Play);
listRouter.handlePlayByID(app, Play);

//create connection to database
require('./handlers/dataConnector.js').connect();

const port = process.env.port;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});
