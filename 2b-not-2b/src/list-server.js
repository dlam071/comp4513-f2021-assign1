const mongoose = require('mongoose');
require('dotenv').config();
const opt = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(process.env.MONGO_URL, opt);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("connected to mongo");
})