/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, func) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    err ? func(err) : func(null, data.split('\n')[0]);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, func) {
  request(url, function (error, response, body) {
    error ? func(error) : func(null, response.statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
