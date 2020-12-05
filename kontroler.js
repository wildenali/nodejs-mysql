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

// Menambahkan data mahasiswa
exports.tambahMahasiswa = function(req, res) {
  var nim = req.body.nim;
  var name = req.body.name;
  var jurusan = req.body.jurusan;

  connection.query('INSERT INTO mahasiswa (nim, name, jurusan) VALUES(?,?,?)', [nim, name, jurusan], function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Menambahkan data", res);
    }
  });
};

// Mengubah data berdasarkan ID
exports.ubahMahasiswa = function(req, res) {
  var id = req.body.id_mahasiswa;
  var nim = req.body.nim;
  var name = req.body.name;
  var jurusan = req.body.jurusan;

  connection.query('UPDATE mahasiswa SET nim=?, name=?, jurusan=? WHERE id_mahasiswa=?', [nim, name, jurusan, id], function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil Ubah data", res);
    }
  });
};