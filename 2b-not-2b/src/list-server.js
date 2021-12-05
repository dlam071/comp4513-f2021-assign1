require('dotenv').config();

const express = require('express');
const app = express();

//create connection to database
require('./handlers/dataConnector')

