const mongoose = require('mongoose');

const Notes = new mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  }

});

const NoteModel = mongoose.model('Note', Notes);
module.exports = { NoteModel };