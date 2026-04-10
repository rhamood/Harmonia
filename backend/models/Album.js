import mongoose from "mongoose"; //import mongoose library to create schema

//schema for albums stored in MongoDB
const AlbumSchema = new mongoose.Schema({
  albumid: { type: Number, required: true, unique: true }, //unique id for albums
  Image: { type: String, required: true },
  hasImage: { type: Boolean, required: false },
  album: { type: String, required: true },
  artist: { type: String, required: true },
  rating: { type: String, required: false },
  review: { type: String, required: false },
  inProfile: { type: Boolean, required: false, default: false },
});

//create model
const Album = mongoose.model('Album', AlbumSchema);

export default Album;