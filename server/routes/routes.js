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
  // console.log('fileStat:', fileStat.name);
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

/*

    fs.readdir(dir, function(err, dirs) {
      if (err) {
        throw new Error(err);
        return;
      }

      var dirsRemaining = dirs.length;
      if (dirsRemaining === 0) return;

      for (var i = 0; i < dirs.length; i++) {
        var dirPath = path.join(dir, dirs[i]);
        fs.readdir(dirPath, function(err, files) {
          if (err) {
            throw new Error(err);
            return;
          }

          var filesRemaining = files.length;
          if (filesRemaining === 0) return;

          for (var j = 0; j < files.length; j++) {
            if (files[j] === 'delimiters.json') {
              var dirFile = path.join(dirPath, files[j]);
              // console.log('path:', dirFile);
              fs.readFile(dirFile, 'utf-8', function(err, content) {
                if (err) {
                  throw new Error(err);
                  return;
                }

                test.push(JSON.parse(content));
                filesRemaining -= 1;
                if (filesRemaining === 0) return;
              });
              
            }
          }

          dirsRemaining -= 1;
          if (dirsRemaining === 0) return;
        });
      }
    });
  */