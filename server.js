const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

//Config
require('dotenv').config();

//Middleware
//Logging requests
app.use(morgan('dev'));
//Serve static files
app.use(express.static(path.join(__dirname, './app')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './app/index.html'));
});

//Server
app.listen(process.env.PORT, function() {
    console.log('Gym Main Listening to PORT '+ process.env.PORT +'!');
});

