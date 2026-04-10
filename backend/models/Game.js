import mongoose from "mongoose";//import mongoose library to create schema

// schema for quiz game questions, options and answers
const GameSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true }, // array of strings 
  answer: { type: String, required: true },
  questionid: { type: Number, required: true, unique: true } // unique key
});

//create model
const Game = mongoose.model('Game', GameSchema);

export default Game;