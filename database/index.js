const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
  html_url: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoInfo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('REPOINFO IN SAVE', repoInfo)
  //check uniqueness by ID
  //findOne returns the object in question, otherwise it doesn't return anything. So it's unique if findOne === null
  if (db.Repo.findOne({id: repoInfo.id}) === null) {
    db.Repo.create({
      id: repoInfo.id,
      name: repoInfo.name,
      full_name: repoInfo.full_name,
      html_url: repoInfo.html_url,
      watchers: repoInfo.watchers
    })
    db.Repo.save()
  }
}

module.exports.save = save;