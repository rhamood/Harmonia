import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true }, // array of strings 
  answer: { type: String, required: true },
  questionid: { type: Number, required: true, unique: true }
});

const Game = mongoose.model('Game', GameSchema);

export default Game;