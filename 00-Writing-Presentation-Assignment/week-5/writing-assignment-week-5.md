# **Rangkuman Backend Bootcamp Week-1**

Backend Bootcamp merupakan salah satu kegiatan yang ada di Skilvul. Tujuannya untuk berbagi ilmu mengenai apa saja yang dibutuhkan dalam pembuatan sebuah server serta business logic.

## **Web Servers**

Web server adalah sebuah perangkat lunak yang terinstall di dalam komputer server, yang berfungsi untuk menerima permintaan dan juga request berupa halaman website melalui HTTp atau HTTPS dari user atau client, dan kemudian mengirimkannya kembali dalam bentuk halaman web yang berbentuk dokumen HTML.

Fungsi utama web server adalah sebagai alat untuk memproses berbagai berkas yang diminta oleh klien, lalu memberikan respon dalam bentuk halaman web. Halaman website tersebut terdiri dari teks, gambar, dokumen, video, dan lain-lain.

- **Server Side**

  Server side programming adalah jenis bahasa pemrograman yang nantinya script/program tersebut akan dijalankan/diproses oleh server. Selanjutnya hasil pengolahan script/program tersebut akan dikirim ke client.

- **Client Side**

  Secara umum, suatu client adalah satu aplikasi komputer, seperti web browser yang berjalan pada satu komputer lokal dari pengguna atau workstation, dan terhubung ke suatu server. Client-side programming adalah program komputer pada web yang dijalankan pada sisi client, oleh web browser.

- **Server Side Framework**

  Back-end framework atau server-side framework adalah kerangka kerja yang membantu pengembang untuk bekerja dengan bahasa pemrograman di sisi server salah satunya Javascript. Javascript mempunyai server side framework yaitu NodeJs dan NodeJs juga mempunyai framework yaitu ExpressJs.

## **Restful API**

API RESTful adalah antarmuka yang digunakan oleh dua sistem komputer untuk bertukar informasi secara aman melalui internet. REST mengharuskan klien membuat permintaan ke server untuk mengambil atau mengubah data di server.

Ada beberapa method untuk meminta sebuah **request** sebagai berikut:

| Method       | Description                                |
| -------------| ------------------------------------------ |
| GET          | Mengambil data dari database               |
| POST         | Melakukan sebuah create data               |
| PUT          | Melakukan sebuah update data               |
| DELETE       | Melakukan sebuah delete data               |
| PATCH        | Melakukan sebuah update data secara parsial|


REST juga mempunyai status code sebagai **response** nya sebagai berikut:

| Status Code  | Description                 |
| -------------| --------------------------- |
| 2XX          | Successful responses        |
| 3XX          | Redirects                   |
| 4XX          | Client errors               |
| 5XX          | Server errors               |

Di bawah ini merupakan contoh endpoint dengan methodnya.

**GET, POST**
```
/api.website_name.com/users
```

**GET, UPDATE, DELETE**
```
/api.website_name.com/users/:id
```

## **Intro NodeJS**

   NodeJS adalah aplikasi runtime yang berjalan di server, dan berfungsi untuk menjalankan skrip JavaScript di sisi server untuk kemudian disajikan dalam bentuk konten web dinamis ke dalam web browser pengguna. NodeJS juga memiliki pustaka server HTTP sendiri sehingga memungkinkan untuk menjalankan web server tanpa menggunakan aplikasi web server yang lain seperti Apache atau Nginx. Dengan model event-driven dan non-blocking I/O-nya, Node.js lebih mampu menangani banyak proses secara bersamaan daripada platform bersifat thread-based networking.

   - **Keunggulan NodeJs**

     > Bersifat non-blocking.

     > Dapat mengeksekusi kode dengan cepat.

     > Memiliki karakteristik single-threaded.

     > Tidak melakukan data buffering


   - **Contoh Pembuatan Server NodeJS**


     ```javascript
     const http = require('http');

     http.createServer((req, res) => {
      response.write('Halo');
      response.end();
     }).listen(3000, () => {
       console.log(`server started on port http://localhost:3000`);
     });
     ```

## **Express Routing & Middleware**

   Express.js adalah framework back end. Artinya, ia bertanggung jawab untuk mengatur fungsionalitas website, seperti pengelolaan routing dan session, permintaan HTTP, penanganan error, serta pertukaran data di server. 

   - **Keunggulan NodeJs**

     > Memperbaiki error lebih cepat.

     > Mempersingkat proses pengembangan.

     > Menekan biaya pengembangan.

     > Integrasi MEAN.

     > Menyediakan Server Side Caching.

   - **Cara Kerja ExpressJS**

     **Routing**

     Cara kerja routing di Express.js adalah dengan sebuah metode bernama app. Metode tersebut akan merespons setiap permintaan berbentuk HTTP. Misalnya GET, POST, PUT, dan DELETE.

     ```javascript
     app.get('/', (req, res) => res.send('Halo'));
     ```

     **Middleware**

     Middleware adalah fungsi yang digunakan untuk mengakses permintaan object (req), respons object (res), dan setiap siklus permintaan dan respon tersebut (next).

     ```javascript
     const express = require('express')
     const app = express()
    
     app.get('/', function (req, res) {
      res.send('Hello World!')
     });
    
     app.listen(3000);
     ```

     **Serving Static Files**

     ```javascript
     app.use(express.static('public'));
     ```
  
   - **Node Package Manager (NPM)**

     NPM adalah Node Package Manager, yaitu pengelola package JavaScript bawaan Node.js. Package manager sendiri merupakan tools yang fungsinya untuk mengelola package secara otomatis. 

     ```
     npm install express
     ```

## **Design Database with MySQL**

   Database desain adalah salah satu tahap penting dalam Database System Development Life Cycle. Pada tahapan ini, database akan didesain dan dibagi dalam 3 tahapan yang masing-masing tahapan punya tingkatan sendiri, yaitu: Conceptual Design, Logical Design, dan Physical Design. Outputnya berupa ERD (Entity Relationship Diagram).

   - **Relasi**

     Relasi adalah istilah dalam relational database (tabel) yang mengacu ke bagaimana tabel dalam database itu bisa saling terkait. Dalam pembuatan relasi database itu dihubungkan dengan Foreign Key pada kolom tabel A dan Primary Key pada kolom tabel B.

     **Primary Key**

     Primary Key merupakan kunci utama pada field tertentu dalam sebuah tabel yang biasa digunakan untuk mendefinisikan rows data tertentu.

     **Foreign Key**

     Foreign Key adalah atribut pada tabel yang menunjukan hubungan (relasi) ke tabel induk ( yang mempunyai primary key)

   - **Jenis Relasi di Database**

     
     **One to One**
     
     One to One merupakan relasi dari saru baris tabel A ke sau baris ke tabel B.

     ```
     NIM hanya boleh dimiliki satu mahasiswa/i begitupun sebaliknya.
     ```

     **One to Many**

     One to Many adalah relasi dimana satu baris tabel (tabel A) dihubungkan ke satu baris atau lebih (Tabel B)

     ```
     Satu gedung rapat bisa menampung lebih dari satu mahasiswa/i, dan satu mahasiswa/i hanya boleh rapat di gedung tersebut.
     ```
     **Many to Many**

     Many to Many relasi yang dimana lebih dari satu baris (tabel A) dihubungkan di lebih dari satu baris (tabel B).

     ```
     Mahasiswa/i dapat mengambil banyak mata kuliah, satu mata kuliah dapat diambil lebih dari satu mahasiswa/i.
     ```

   - **Normalisasi**

     Normalisasi merupakan sebuah teknik logical desain dalam sebuah basis data yang mengelompokkan atribut dari berbagai entitas dalam suatu relasi sehingga membentuk struktur relasi yang baik (tanpa redudansi/pengulangan data) serta sebagian besar ambiguity bisa dihilangkan. Database 1NF, 2NF, dan 3NF akan sering ditemui ketika akan membuat sebuah database yang optimal. 

     - **Tujuan Normalisasi**

       > INSERT anomali.

       > DELETE anomali.

       > UPDATE anomali.
