'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req, res) {
  response.ok("Aplikasi REST API ku mantul", res);
};

// Menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = function(req, res) {
  connection.query('SELECT * FROM mahasiswa', function(error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }    
  })
}

// Menampilkan semua data mahasiswa berdasarkan ID
exports.tampilBerdasarkanID = function(req, res) {
  let id = req.params.id;
  connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], function(error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
}