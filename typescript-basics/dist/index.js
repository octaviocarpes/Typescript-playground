"use strict";
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(8080, () => {
    /*eslint no-console: "error"*/
    console.log('TS POC listening on port 8080!');
});
