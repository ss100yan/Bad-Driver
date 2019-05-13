const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  user:{type: String, required: true},
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  plate: String,
  location1: String,
  location2: String,
  addres:String,
  photo:String,
  thumbsup:Number,
  thumbsdown: Number,
  comments:[String],
  thumbsUpDownEmail:[String],
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
