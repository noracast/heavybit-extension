var zip = require('zip-dir')
var package = require('../package.json')

zip('src', { saveTo: `dist/${package.name}-${package.version}.zip` }, function (err, buffer) {
  console.error(err)
});