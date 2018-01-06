const express = require('express');
const app =  express();
const db = require('./db');
const bodyParser = require('body-parser');
const path = require('path');
const headersOrigin = require('./headers'); 
const errorHandler = require('./errors');

// Parsing the URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Setting the header

app.use(headersOrigin.configHeaders);
app.use(headersOrigin.removePoweredByExpress);


// Include Controller/Routers
var userRouter = require('./router/user-router');
app.use('/users', userRouter);

// Error Handler
app.use(errorHandler.NotFound);
app.use(errorHandler.ServerError);

module.exports = app;