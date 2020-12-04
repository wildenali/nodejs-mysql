'use strict';

module.exports = function(app) {
  var jsonku = require('./kontroler');

  app.route('/')
    .get(jsonku.index)
}