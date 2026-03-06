import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import Album from "./models/Album.js";
// const mongoose = require("mongoose");
// const Album = require("./models/Album");

const app = express(); // create express object, initialize app
const PORT = 8080;
const DATABASE_HOST = "localhost";
const DATABASE_PORT = 27017;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: 'http://localhost:5173' })); // allow CORS for the frontend running on port 5173
app.use(express.json()); 
app.use(express.static(path.join(__dirname, '../frontend/public'))); // serve static files from the 'public' directory

const dbURL = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}/album_catalogue`;
mongoose.connect(dbURL);
const db = mongoose.connection;
db.on('error', function(e) {
    console.log("Database connection error: " + e);
});
db.on('open', function() {
    console.log("Database connected");
});


let album_catalogue = [
    { albumid:1, Image:"/albumcovers/1.jpg", hasImage:true, album:"Addison", artist:"Addison Rae", rating:null, review:null},
    { albumid:2, Image:"/albumcovers/2.jpg", hasImage:true, album:"thank u, next", artist:"Ariana Grande",rating:null, review:null},
    { albumid:3, Image:"/albumcovers/3.jpg", hasImage:true, album:"RENAISSANCE", artist:"Beyoncé",rating:null, review:null},
    { albumid:4, Image:"/albumcovers/4.jpg", hasImage:true, album:"Romance", artist:"Camila Cabello",  rating:null, review:null},
    { albumid:5, Image:"/albumcovers/5.jpg", hasImage:true, album:"Born This Way", artist:"Lady Gaga", rating:null, review:null},
    { albumid:6, Image:"/albumcovers/6.jpg", hasImage:true, album:"Speak Now", artist:"Taylor Swift",rating:null, review:null},
    { albumid:7, Image:"/albumcovers/7.jpg", hasImage:true, album:"locket", artist:"Madison Beer", rating:null, review:null},
    { albumid:8, Image:"/albumcovers/8.jpg", hasImage:true, album:"The Art of Loving",   artist:"Olivia Dean", rating:null, review:null},
    { albumid:9, Image:"/albumcovers/9.jpg", hasImage:true, album:"emails i can't send", artist:"Sabrina Carpenter",rating:null, review:null},
    { albumid:10, Image:"/albumcovers/10.jpg", hasImage:true, album:"SOS", artist:"SZA", rating:null, review:null},
    { albumid:11, Image:"/albumcovers/11.jpg", hasImage:true, album:"So Close to What",  artist:"Tate McRae",rating:null, review:null},
    { albumid:12, Image:"/albumcovers/12.jpg", hasImage:true, album:"Honeymoon", artist:"Lana Del Rey",rating:null, review:null},
];

async function addTestAlbumsToMongoDB(){
  const albumCount = await Album.countDocuments();
  if (albumCount === 0) {
    console.log('Adding test albums to db ...');
    album_catalogue.forEach(album => {
      const newAlbum = new Album(album);
      newAlbum.save()
        .then(() => console.log(`Album added with ID ${album.albumid}`))
        .catch(err => console.error(`Error adding album with ID ${album.albumid}:`, err));
    });
    }
    else {
        console.log('Test albums already exist in db.');
        return;
    }
}

addTestAlbumsToMongoDB();

let team_members = [
    {name: "Theresa Killiam", image: "/teamPics/Theresa.png"},
    {name: "Inaya Rajwani", image: "/teamPics/Inaya.png"},
    {name: "Rana Hamood ", image: "/teamPics/Rana.png"},
    {name: "Golshan Rasoulzadeh", image: "/teamPics/Golshan.png"},

];
 
let users = [];

app.get('/api/team', (req, res) => {
    res.status(200).json(team_members);
});

app.get('/api/albums', async (req, res) => {
    try {
        const albums = await Album.find({});
        res.status(200).json(albums);
    } 
    catch (err) {
        console.error("Error retrieving albums from database:", err);
        res.status(500).json({ message: "Error retrieving albums" });
    }
});

app.get('/api/profile/albums', async (req, res) => {
  const albums = await Album.find({ inProfile: true });  
  res.status(200).json(albums);
});

app.post("/api/profile/albums", async (req, res) => {
  try{
    const album = await Album.findOneAndUpdate(
      {albumid: req.body.albumid}, 
      {inProfile: true},
      {returnDocument: "after"}
    );
    
  if (!album) {
    return res.status(404).json({ message: "Album not found" });
  }
  return res.status(201).json(album);

  } catch (err) {
    console.error("Error adding album to profile:", err);
    res.status(500).json({ message: "Error adding album to profile" });
  }
});

app.delete('/api/profile/albums/:id', async (req, res) => {
  try{
    const album = await Album.findOneAndUpdate(
    {albumid: Number(req.params.id)}, 
    {inProfile: false},
    {returnDocument: "after"}
    ); 
    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }
    return res.status(200).json({ message: "Removed from profile" });
  } catch (err) {
    console.error("Error removing album from profile:", err);
    res.status(500).json({ message: "Error removing album from profile" }); 

  }

});

 
app.put("/api/profile/albums/:id/rating", async (req, res) => {
  try{
    const album = await Album.findOneAndUpdate(
      {albumid: Number(req.params.id)}, 
      {rating: req.body.rating, review: req.body.review},
      {returnDocument: "after"}
    );
  if (!album) {
    return res.status(404).json({ message: "Album not found" });
  }
  res.status(200).json({ message: "Album now has rating weeeeeeeeee", album });

  } catch (err) {
    console.error("Error updating album rating:", err);
    res.status(500).json({ message: "Error updating album rating" });
  }

});

// Register — saves new user to memory array if email isn't taken
app.post('/api/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  const emailExists = users.find(u => u.email === email);
  if (emailExists) {
    return res.status(409).json({ message: "Email already registered." });
  }

  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  return res.status(201).json({ message: "Registered successfully!" });
});

// Login — checks email + password against memory array
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  return res.status(200).json({ message: "Login successful!", user });
});

app.listen(PORT, () => { console.log("Server started on port:" + PORT)}); // start server and listen on specified port