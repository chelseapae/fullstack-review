const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {
    type: Number,
    unique: true
  },
  name: String,
  full_name: String,
  html_url: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repos.forEach((repo) => {
    //console.log('------------------------------------------------------> REPO', repo)
    var newRepo = new Repo({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      html_url: repo.html_url,
      watchers: repo.watchers
    })
    newRepo.save((err, data) => {
      if (err) {
        console.log('Error with saving data to DB');
      } else {
        //console.log('Success with saving data to DB', data);
        console.log('success')
      }
    });
  })
}

let get25repos = () => {
    return Repo.find({}).sort({ 'watchers': -1 }).limit(25)
}

module.exports.save = save;
module.exports.get25repos = get25repos;

// let save = (repoInfo) => {
//   // TODO: Your code here
//   // This function should save a repo or repo to
//   // the MongoDB
//   console.log('REPOINFO IN SAVE', repoInfo[0])

//   //check uniqueness by ID
//   //findOne returns the object in question, otherwise it doesn't return anything. So it's unique if findOne === null
//   if (Repo.findOne({id: repoInfo.id}) === null) {
//     Repo.create({
//       id: repoInfo.id,
//       name: repoInfo.name,
//       full_name: repoInfo.full_name,
//       html_url: repoInfo.html_url,
//       watchers: repoInfo.watchers
//     })
//     Repo.save()
//   }
// }