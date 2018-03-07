const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notes = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  date: {
    type: Date,
  }

});

module.exports = mongoose.model('notes', Notes);