var express = require('express');
var app = express();
require('dotenv').config();
ccavReqHandler = require('./ccavRequestHandler.js'),
    ccavResHandler = require('./ccavResponseHandler.js');

app.use(express.static('public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);


app.get('/', function (req, res) {
    res.render('dataFrom.html');
});

app.post('/ccavRequestHandler', function (request, response) {
    ccavReqHandler.postReq(request, response);
});


app.post('/ccavResponseHandler', function (request, response) {
    ccavResHandler.postRes(request, response);
});

const port = process.env.PORT || 3000
app.listen(port, (() => {
    console.log("Server Started on port : " + port);
}));
