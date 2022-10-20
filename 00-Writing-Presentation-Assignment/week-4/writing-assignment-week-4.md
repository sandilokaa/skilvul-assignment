# **Rangkuman Web Development Advance Week 2**

Web Development Advance merupakan salah satu kegiatan yang ada di Skilvul. Tujuannya untuk berbagi ilmu mengenai apa saja yang dibutuhkan dalam pembuatan sebuah website. 


## **Asynchronous**

   Memahami asynchronus adalah salah satu hal penting dalam dunia Javascript. Asynchronous hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses. Eksekusi dengan asynchronous tidak akan membloking atau menunggu suatu perintah sampai selesai. Ada beberapa macam dalam membuat sebuah program asynchronous yang di contohkan dalam melakukan fetch api. Penjelasan ada di bawah.


   - **Apa itu Fetch API ?**

     Fetch API pada javascript adalah kegiatan untuk meminta/request layanan ke endpoint/letak url yang akan menerima request pada website secara local maupun public, untuk mengambil response resource / sumber daya berupa data berformat json atau text.

   - **Promise dalam Fetch API**

     Promise adalah object event yang menunjukan suatu proses asynchronous berhasil atau gagal, serta mengembalikan value. Kita bisa cek sebuah asynchronous menggunakan promise seperti code di bawah.

     ```javascript
     var promise1 = new Promise(function(resolve, reject) {
     //disini digunakan set timeout untuk menunjukan asycn process
     setTimeout(function() {
         reject ('rejected');
     }, 300);
     });

     promise1.then(function(value) {
     console.log(value);
     }).catch(function (value){
     console.log(value);
     });
     
     console.log(promise1);
     ```

     Dalam melakukan fetch api menggunakan asynchronous promise, sebagai berikut.

     ```javascript
     fetch(URL).then(res => res.json()).then(data => { 
        console.log(data.results); 
     }).catch(function() {
        console.log('error');
     }); 
     ```
   

   - **Callback Function**
      
     Function callback adalah istilah yang mengacu pada sebuah function yang dijalankan dalam function lain dan bertindak sebagai argument function. Cara ini sangat berguna sekali dalam membuat kode program yang lebih singkat dan efisien. Contoh menggunakan function callback sebagai berikut.

     ```javascript
     function myFunction(a, b, callback){
        return callback(a, b);
     }

     myFunction('A','B', function(a, b) { return a+b; });
     ```

     Dalam melakukan fetch api menggunakan asynchronous promise dan callback, sebagai berikut.

     ```javascript
     function data(callback){
        fetch(url)
        .then(response => response.json())
        .then(result => callback(result)); // if you have a result
     }
     ```

   - **Async Await**

     Async/Await adalah salah satu cara untuk mengatasai masalah asynchronous pada Javascript selain menggunakan callback dan promise. Untuk menggunakan Async/Await, kembalian dari suatu fungsi harus merupakan suatu Promise. Async/Await tidak dapat berdiri tanpa adanya Promise. Contoh sebagai berikut.

     ```javascript
     async function hello(){
        const result = await doAsyncFunction();

        return result;
     }
     ```

     Dalam melakukan fetch api menggunakan asynchronous promise dan async await dan handlernya, sebagai berikut.

     ```javascript
     async function getData(url) {
        try { 
            const response = await fetch(url);
            const data = await response.json();

            return data;
        } catch (err) {
            console.log
        }
     };
     ```

## **Bootstrap**

   Bootstrap adalah framework web development berbasis HTML, CSS, dan JavaScript yang dirancang untuk mempercepat proses pengembangan web responsive dan mobile-first (memprioritaskan perangkat seluler).

   - **Kelebihan Bootstrap**

     > Mudah Digunakan

     > Responsive

     > Kompatibel banyak browser

   - **Bootstrap Started**

     Bootstrap sudah menyediakan kerangka HTML yang terdiri dari tag meta viewport, bootstrap css dan bootstrap js. 

     ```html
     <!doctype html>
     <html lang="en">
     <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
     </head>
     <body>
        <h1>Hello, world!</h1>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
     </body>
     </html>
     ```

     Code diatas dapat di copy paste ke dalam file index.html.

   - **Bagaimana Cara Menggunakan Component Bootstrap**

     - **Navbar**

       ```html
       <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
       </nav>
       ```

       Komponen tersebut hanya di copy paste dan di masukkan ke dalam tag body. Selain itu bootstrap juga mempunyai komponen pendukung untuk melakukan responsive design, mulai dari row, column, flex, grid. Default grid column pada bootstrap yaitu 12.

       ```html
       <div class="container">
            <div class="row">
                <div class="col-md-3"></div>
            </div>
       </div>
       ```

## **Responsive Design**
   
   Berarti desain web responsif (dalam istilah bahasa Indonesia), responsive web design adalah pendekatan yang menyarankan bahwa desain dan pengembangan harus menanggapi perilaku dan lingkungan pengguna harus berdasarkan ukuran layar, platform , dan orientasinya. Adapun ukuran yang rekomen dalam pembuatan web responsive sebagai berikut.

   ```css
    /* Large desktop */
    @media (min-width: 1200px) { ... }
    
    /* Portrait tablet to landscape and desktop */
    @media (min-width: 768px) and (max-width: 979px) { ... }
    
    /* Landscape phone to portrait tablet */
    @media (max-width: 767px) { ... }
    
    /* Landscape phones and down */
    @media (max-width: 480px) { ... }
   ```

   Contoh penggunaan responsive design.

   ```css
   @media (max-width: 480px) { 
    img {
        width: 250px;
        height: auto
    }
   }
   ```