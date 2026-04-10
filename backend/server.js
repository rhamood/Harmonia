import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import Album from "./models/Album.js";
import http from 'http';
import { Server } from "socket.io";


// initialize express app and create express object
const app = express(); 
const PORT = 8080;
// database connection parameters
const DATABASE_HOST = "localhost";
const DATABASE_PORT = 27017;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
});

app.use(cors({ origin: 'http://localhost:5173' })); // allow CORS for the frontend running on port 5173
app.use(express.json()); 
app.use(express.static(path.join(__dirname, '../frontend/public'))); // serve static files from the 'public' directory

//connect to MongoDB
const dbURL = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}/album_catalogue`;
mongoose.connect(dbURL);
const db = mongoose.connection;
//error handling for db connection
db.on('error', function(e) {
    console.log("Database connection error: " + e);
});
//confirm successful db connection
db.on('open', function() {
    console.log("Database connected");
});

// test data to fill database with albums
let album_catalogue = [
    { albumid:1, Image:"/albumcovers/1.jpg", hasImage:true, album:"Addison", artist:"Addison Rae", rating:null, review:null, inProfile: true},
    { albumid:2, Image:"/albumcovers/2.jpg", hasImage:true, album:"thank u, next", artist:"Ariana Grande",rating:null, review:null},
    { albumid:3, Image:"/albumcovers/3.jpg", hasImage:true, album:"RENAISSANCE", artist:"Beyoncé",rating:null, review:null},
    { albumid:4, Image:"/albumcovers/4.jpg", hasImage:true, album:"Romance", artist:"Camila Cabello",  rating:null, review:null},
    { albumid:5, Image:"/albumcovers/5.jpg", hasImage:true, album:"Born This Way", artist:"Lady Gaga", rating:null, review:null},
    { albumid:6, Image:"/albumcovers/6.jpg", hasImage:true, album:"Speak Now", artist:"Taylor Swift",rating:null, review:null},
    { albumid:7, Image:"/albumcovers/7.jpg", hasImage:true, album:"locket", artist:"Madison Beer", rating:null, review:null},
    { albumid:8, Image:"/albumcovers/8.jpg", hasImage:true, album:"The Art of Loving",   artist:"Olivia Dean", rating:null, review:null},
    { albumid:9, Image:"/albumcovers/9.jpg", hasImage:true, album:"emails i can't send", artist:"Sabrina Carpenter",rating:null, review:null},
    { albumid:10, Image:"/albumcovers/10.jpg", hasImage:true, album:"SOS", artist:"SZA", rating:null, review:null, inProfile: true},
    { albumid:11, Image:"/albumcovers/11.jpg", hasImage:true, album:"So Close to What",  artist:"Tate McRae",rating:null, review:null},
    { albumid:12, Image:"/albumcovers/12.jpg", hasImage:true, album:"Honeymoon", artist:"Lana Del Rey",rating:null, review:null},
];

// add albums to db only if they aren't in the db already
async function addTestAlbumsToMongoDB(){
  const albumCount = await Album.countDocuments();
  if (albumCount === 0) {
    console.log('Adding test albums to db ...');
    for (const album of album_catalogue) {
      try {
        const newAlbum = new Album(album);
        await newAlbum.save();
        console.log(`Album added with ID ${album.albumid}`);
      } catch (err) {
        console.error(`Error adding album with ID ${album.albumid}:`, err);
      }
    }
    }
    else {
        console.log('Test albums already exist in db.');
        return;
    }
}

// game questions to fill database
let game_questions = [
    {
        question: "What year did Lana Del Rey release her breakthrough major-label debut, Born to Die?",
        options: ["2010", "2012", "2014", "2016"],
        answer: "2012",
        questionid: 1
    },
    {
        question: "Which Taylor Swift album is the song \"Anti-Hero\" the lead single for?",
        options: ["Lover", "Folklore", "Evermore", "Midnights"],
        answer: "Midnights",
        questionid: 2
    },
    {
        question: "Which Taylor Swift album features the hit single \"Shake It Off\"?",
        options: ["Red", "1989", "Reputation", "Speak Now"],
        answer: "1989",
        questionid: 3
    },
    {
        question: "David Bowie's 28th and final studio album, released on his 69th birthday in 2016, is titled what?",
        options: ["Blackstar", "Stardust", "Ziggy Stardust", "Heroes"],
        answer: "Blackstar",
        questionid: 4
    },
    {
        question: "What is the title of Yebba's debut studio album, released in 2021 as a tribute to her mother?",
        options: ["Dawn", "Dusk", "Sunrise", "Sunset"],
        answer: "Dawn",
        questionid: 5
    },
    {
        question: "What is the title of Frank Ocean's debut studio album Channel Orange?",
        options: ["2009", "2010", "2011", "2012"],
        answer: "2012",
        questionid: 6
    },
    {
        question: "In what year did Drake release Grammy winning album, Take Care?",
        options: ["2010", "2011", "2012", "2013"],
        answer: "2011",
        questionid: 7
    },
    {
        question: "Central Cee's breakout 2022 mixtape, is titled what?",
        options: ["17", "20", "23", "26"],
        answer: "23",
        questionid: 8
    },
    {
        question: "In what year did Doja Cat release Planet Her",
        options: ["2020", "2021", "2022", "2023"],
        answer: "2021",
        questionid: 9
    },
    {
        question: "In what year did Billie Ellish release her debut album, When We All Fall Asleep, Where Do We Go?",
        options: ["2017", "2018", "2019", "2020"],
        answer: "2019",
        questionid: 10
    }
];

// add game questions to db only if they aren't in the db already
async function addGameQuestionsToMongoDB(){
  const questionCount = await Game.countDocuments();
  if (questionCount === 0) {
    console.log('Adding test game questions to db ...');
    for (const question of game_questions) {
      try {
        const newQuestion = new Game(question);
        await newQuestion.save();
        console.log(`Game question added with ID ${question.questionid}`);
      } catch (err) {
        console.error(`Error adding game question with ID ${question.questionid}:`, err);
      }
    }
    }
    else {
        console.log('Test game questions already exist in db.');
        return;
    }
}

// function to add test albums and game questions to db - put into function to allow for async/await to avoid adding both data at the same time
// async function fillDatabaseWithTestData() {
//   await addTestAlbumsToMongoDB();
//   await addGameQuestionsToMongoDB();
// }
// fillDatabaseWithTestData();
await addTestAlbumsToMongoDB();
await addGameQuestionsToMongoDB();
// team member data for about the developers section
let team_members = [
    {name: "Theresa Killiam", image: "/teamPics/Theresa.png"},
    {name: "Inaya Rajwani", image: "/teamPics/Inaya.png"},
    {name: "Rana Hamood ", image: "/teamPics/Rana.png"},
    {name: "Golshan Rasoulzadeh", image: "/teamPics/Golshan.png"},

];
 
// get team members
app.get('/api/team', (req, res) => {
    res.status(200).json(team_members);
});

//get all albums from database
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

// get all quiz game questions from database
app.get('/api/game', async (req, res) => {
  try {
    const questions = await Game.find({});
    res.status(200).json(questions);
  }
  catch (err) {
    console.error("error retrieving game questions and answers from database:", err);
    res.status(500).json({ message: "Error retrieving game questions" });
  }
});

// get albums added to profile from the discography page
app.get('/api/profile/albums', async (req, res) => {
  const albums = await Album.find({ inProfile: true });  
  res.status(200).json(albums);
});

// add album to profile when user adds to their profile from the discography page
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

//remove albumn from profile when user clicks clicks remove icon on profile page
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

 // update album rating and review
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

let users = [];

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

  return res.status(200).json({
    message: "Login successful!",
    user: { name: user.name, email: user.email },
  });
});

io.on('connection', (socket) => {
  console.log( socket.id + " connected" );

  socket.on('question', (msg) => {
    console.log("User asked:", msg);

    let reply = "Try checking FAQ.";

    if (msg.toLowerCase().includes("profile")) {
      reply = "Go to your profile page to edit your info!";
    }

    else if (msg.toLowerCase().includes("discover") || msg.toLowerCase().includes("discography") || msg.toLowerCase().includes("music")) {
      reply = "Check out the discography page to find new albums!";
    }

    else if (msg.toLowerCase().includes("help") || msg.toLowerCase().includes("support")) {
      reply = "Email us at ask@harmonia.com for support!";
    }

    else if (msg.toLowerCase().includes("hello") || msg.toLowerCase().includes("hi")) {
      reply = "Hello! How can I assist you today?";
    }

    else if (msg.toLowerCase().includes("bye")) {
      reply = "Goodbye!";
    }

    socket.emit('answer', reply);
  });

  socket.on('disconnect', () => {
    console.log( socket.id + " disconnected" );
  });
});

server.listen(PORT, () => { console.log("Server started on port:" + PORT)}); // start server and listen on specified port

// app.listen(PORT, () => { console.log("Server started on port:" + PORT)}); // start server and listen on specified port
