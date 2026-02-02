const express = require('express'); // import express module
const app = express(); // create express object, initialize app
const path = require('path');

app.use('/', express.static(path.join(__dirname, '/public'))); // gives static files from 'public' directory so that they can be accessed directly

console.log("__dirname: " + __dirname); // log message to console, so the abosulote file path

app.listen(PORT, () => { console.log("Server started on port:" + PORT)}); // start server and listen on specified port