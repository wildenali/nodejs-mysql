'use strict';

module.exports = function(app) {
  var jsonku = require('./kontroler');

  app.route('/')
    .get(jsonku.index);

  app.route('/tampil')
    .get(jsonku.tampilSemuaMahasiswa);
  
    app.route('/tampil/:id')
      .get(jsonku.tampilBerdasarkanID);

  app.route('/tambah')
    .post(jsonku.tambahMahasiswa);
}