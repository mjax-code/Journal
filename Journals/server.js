const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//import Notes from './NoteData';

const server = express();
server.use(helmet());
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running...'});
});

//defaul port is 27017
mongoose.connect('mongodb://localhost/knapsack').then(res => {
  console.log('connected to mongodb');
}).catch(err => {
  console.log('err');
});
const port = process.env.PORT || 3000;
server.listen(port,() => console.log(`running on port: ${port}`));
