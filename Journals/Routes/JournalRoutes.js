const express = require('express');
const Journal = require('../Schema/JournalModel');
const JournalsRouter = express.Router();
// routes for /Journals

JournalsRouter.get('/', (req,res) => {
  Journal.find({}).then(journals => {
    res.status(200).json(journals);
  }).catch( err => {
    res.status(404).json({err: err, msg: 'errer getting journal'});
  });
});

JournalsRouter.post('/', (req, res) => {
  const journalInfo = req.body;
  const journal = new Journal(journalInfo);

  journal.save().then( savedJournal => {
    res.status(201).json(savedJournal);
  }).catch( err => {
    res.status(500).json({err: err, msg: 'error creating journal'});
  });
});
module.exports = JournalsRouter;