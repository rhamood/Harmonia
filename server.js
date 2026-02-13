import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express(); // create express object, initialize app
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: 'http://localhost:5173' })); // allow CORS for the frontend running on port 5173
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from the 'public' directory

let album_catalogue = [
    { albumid:1, Image:"/albumcovers/1.jpg", hasImage:true, album:"Addison", artist:"Addison Rae", },
    { albumid:2, Image:"/albumcovers/2.jpg", hasImage:true, album:"thank u, next", artist:"Ariana Grande",},
    { albumid:3, Image:"/albumcovers/3.jpg", hasImage:true, album:"RENAISSANCE", artist:"Beyoncé",},
    { albumid:4, Image:"/albumcovers/4.jpg", hasImage:true, album:"Romance", artist:"Camila Cabello",  },
    { albumid:5, Image:"/albumcovers/5.jpg", hasImage:true, album:"Born This Way", artist:"Lady Gaga", },
    { albumid:6, Image:"/albumcovers/6.jpg", hasImage:true, album:"Speak Now", artist:"Taylor Swift",},
    { albumid:7, Image:"/albumcovers/7.jpg", hasImage:true, album:"locket", artist:"Madison Beer", },
    { albumid:8, Image:"/albumcovers/8.jpg", hasImage:true, album:"The Art of Loving",   artist:"Olivia Dean", },
    { albumid:9, Image:"/albumcovers/9.jpg", hasImage:true, album:"emails i can't send", artist:"Sabrina Carpenter",       },
    { albumid:10, Image:"/albumcovers/10.jpg", hasImage:true, album:"SOS", artist:"SZA", },
    { albumid:11, Image:"/albumcovers/11.jpg", hasImage:true, album:"So Close to What",  artist:"Tate McRae",},
    { albumid:12, Image:"/albumcovers/12.jpg", hasImage:true, album:"Honeymoon", artist:"Lana Del Rey",},
];

let profile_albums = []

app.get('/api/albums', (req, res) => {
    res.status(200).json(album_catalogue);
});

app.get('/api/profile/albums', (req, res) => {
    res.status(200).json(profile_albums);
});

app.post("/api/profile/albums", (req, res) => {
  const id = Number(req.body.albumid);
  const album = album_catalogue.find((a) => a.albumid === id);

  if (profile_albums.some((a) => a.albumid === id)) {
    return res.status(409).json({ message: "Album already in profile" });
  }

  profile_albums.push(album);
  return res.status(201).json(album);
});


app.delete('/api/profile/albums/:id', (req, res) => {
    const id = Number(req.params.id);
    const before = profile_albums.length;
    profile_albums = profile_albums.filter(a => a.albumid !== id);

    return res.status(200).json({ message: "Removed from profile" });
});

app.listen(PORT, () => { console.log("Server started on port:" + PORT)}); // start server and listen on specified port