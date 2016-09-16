var fs = require('fs');
var path = require('path');
var walk = require('walk');

var data = [];
var dir = path.resolve(__dirname + '/../../node_modules/cldr-misc-full/main/');

module.exports = function(app) {
  app.route('/').get(function(req, res) {

    var walker = walk.walk(dir, { followLinks: false });
    walker.on('file', fileHandler);

    walker.on('errors', function() {
      res.status(500).json({ error: 'There was an error with the request.'});
    });

    walker.on('end', function() {
      res.send(data);
    });
  });
}

function fileHandler(root, fileStat, next) {
  if (fileStat.name === 'delimiters.json') {
    fs.readFile(path.resolve(root, fileStat.name), function(err, content) {
      if (err) throw err;
      data.push(JSON.parse(content));
      next();
    });
  } else {
    next();
  }
}