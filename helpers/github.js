const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (term) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  console.log('TERM', term)
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://github.com/users/${term}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

}

module.exports.getReposByUsername = getReposByUsername;