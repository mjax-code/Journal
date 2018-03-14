const mongoose = require('mongoose');
const Notes = require('./NoteModel');

const Journals = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Notes',
  }]
});

const JournalModel = mongoose.model('Journal', Journals);
module.exports =  JournalModel;