const express = require('express');
const app =  express();
const db = require('./db');
const bodyParser = require('body-parser');
const path = require('path');
const headersOrigin = require('./headers'); 

// Parsing the URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Setting the header
app.use(headersOrigin.removePoweredByExpress);
app.use(headersOrigin.configHeaders);


// Include Controller/Routers
var userRouter = require('./router/user-router');




app.use('/users', userRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // see the json error page
    res.status(err.status || 500);
    res.json({
        'code' : err.status
    });
});
  

module.exports = app;