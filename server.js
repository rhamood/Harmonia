const express = require('express'); // import express module
const app = express(); // create express object, initialize app
const path = require('path');

app.use('/', express.static(path.join(__dirname, '/public'))); // gives static files from 'public' directory so that they can be accessed directly

console.log("__dirname: " + __dirname); // log message to console, so the abosulote file path

app.listen(PORT, () => { console.log("Server started on port:" + PORT)}); // start server and listen on specified port

let album_catalogue = [
    { albumid:1,  hasImage:true, album:"Addison",             artist:"Addison Rae",             rating:"💿💿💿"},
    { albumid:2,  hasImage:true, album:"thank u, next",       artist:"Ariana Grande",           rating:"💿💿💿💿💿"},
    { albumid:3,  hasImage:true, album:"RENAISSANCE",         artist:"Beyoncé",                 rating:"💿💿💿💿"},
    { albumid:4,  hasImage:true, album:"Romance",             artist:"Camila Cabello",          rating:"💿💿💿💿"},
    { albumid:5,  hasImage:true, album:"Born This Way",       artist:"Lady Gaga",               rating:"💿💿💿"},
    { albumid:6, hasImage:true, album:"Speak Now",            artist:"Taylor Swift",            rating:"💿💿💿💿"},
    { albumid:7,  hasImage:true, album:"locket",              artist:"Madison Beer",            rating:"💿💿💿"},
    { albumid:8,  hasImage:true, album:"The Art of Loving",   artist:"Olivia Dean",             rating:"💿💿💿💿"},
    { albumid:9,  hasImage:true, album:"emails i can't send", artist:"Sabrina Carpenter",       rating:"💿💿💿💿💿"},
    { albumid:10, hasImage:true, album:"SOS",                 artist:"SZA",                     rating:"💿💿💿💿💿",},
    { albumid:11, hasImage:true, album:"So Close to What",    artist:"Tate McRae",              rating:"💿💿💿💿💿"},
    { albumid:12,  hasImage:true, album:"Did you know that there's a tunnel under Ocean Blvd", artist:"Lana Del Rey",  rating:"💿💿💿💿"},
];