/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var gitPromises = require('./promisification');
var fsAsync = require('./promiseConstructor');
Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return fsAsync.pluckFirstLineFromFileAsync(readFilePath).then(file => {
    return gitPromises.getGitHubProfileAsync(file).then(body => {
      return fs.writeFileAsync(writeFilePath, JSON.stringify(body), 'utf8');
    });
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
