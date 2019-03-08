"use strict";
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(8080, function () {
    console.log('TS POC listening on port 8080!');
});
