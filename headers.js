

exports.configHeaders = function(req, res, next){ 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next();
}

// Remove the "X-Powered-By"
exports.removePoweredByExpress = function(req, res, next){
    res.removeHeader("X-Powered-By");
    next();
}


