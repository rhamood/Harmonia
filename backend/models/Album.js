import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
  albumid: { type: Number, required: true, unique: true },
  Image: { type: String, required: true },
  hasImage: { type: Boolean, required: false },
  album: { type: String, required: true },
  artist: { type: String, required: true },
  rating: { type: String, required: false },
  review: { type: String, required: false },
  inProfile: { type: Boolean, required: false, default: false },
});

const Album = mongoose.model('Album', AlbumSchema);

export default Album;