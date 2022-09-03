const express = require('express');
let app = express();
const { getReposByUsername } = require('../helpers/github.js');
const { save } = require('../database/index.js')
const { get25repos } = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist'));

//this code is IMPORTANT to render the right info. Middleware
app.use(express.urlencoded({ extended: false }))

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  //console.log('POSTREQ', req.body)
  getReposByUsername(req.body.term)
    .then (data => {
      //console.log('DATAAA', data)
      save(data)
      res.status(201).send('App.Post Successfully saved to DB');
    })
    .catch (() => {
      res.status(404).send('User not found!')
    })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // console.log('------------------------------------------------------> req', req.body.term)
  get25repos()
    .then(data => {
      console.log('25DATA', data)
      res.status(201).send(data)
    })
    .catch(() => {
      res.status(404).send('Something went wrong')
    })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

