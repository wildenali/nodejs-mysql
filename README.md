# nodejs-mysql

reference from [Ipung Dev - Youtube Channel](https://www.youtube.com/watch?v=_t3pUzdaRx4&list=PLH1gH0TmFBBiJuXv9YuzRoM9yuZtUHbhu&index=1)

# npm init

`$ npm init`

# install node module

`$ npm install`

# Install express, mysql, body-parser

`$ npm install express mysql body-parser`

# Create a database in mysql

1. Name of database: "nodejs_mysql_db"
2. Create a table called "mahasiswa" and the structure like below

- id_mahasiswa : int(11), primary, auto_increment
- nim : int(11)
- nama: varchar(50)
- jurusan: varchar(50)

# Run server.js

`$ node server.js`

# Get Data

1. Create database on mysql, for example create 4 data

# Post Data

1. Add code on the kontroler.js file "Menambahkan data mahasiswa"
2. Add code on the routes.js

```
app.route('/tambah')
  .post(jsonku.tambahMahasiswa);
```

3. Test with postman:

- Open postman
- Choose `POST` method
- Fill the post method with `http://localhost:3000/tambah`
- Choose `Body`
- Choose `x-www-form-urlencoded`
- Fill the Key and Value like below
  - nim: 202005
  - name: ucup
  - jurusan: teknik mesin
- Click Send

# Put Data

1. Add code on the kontroler.js file "Mengubah data mahasiswa berdasarkan ID"
2. Add code on the routes.js

```
app.route('/ubah')
  .put(jsonku.ubahMahasiswa);
```

3. Test with postman:

- Open postman
- Choose `POST` method
- Fill the post method with `http://localhost:3000/tambah`
- Choose `Body`
- Choose `x-www-form-urlencoded`
- Fill the Key and Value like below
  - nim: 202005
  - name: ucup
  - jurusan: teknik mesin
- Click Send
