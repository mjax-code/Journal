const mongoose = require('mongoose');

const Notes = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  }

});

const NoteModel = mongoose.model('Note', Notes);
module.exports = { NoteModel };