'use strict';

const { json } = require('body-parser');

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

  app.route('/ubah')
    .put(jsonku.ubahMahasiswa);
}