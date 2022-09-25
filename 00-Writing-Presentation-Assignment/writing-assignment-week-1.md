# **Rangkuman Web Development Basic Week 1**

Web Development Basic merupakan salah satu kegiatan yang ada di Skilvul. Tujuannya untuk berbagi ilmu mengenai apa saja yang dibutuhkan dalam pembuatan sebuah website.

## **Unix Command Line**

Terminal adalah antarmuka di mana Anda dapat mengetik dan menjalankan perintah berbasis teks.  Adapun contoh-contoh dari command line nya yang sering dipakai dijelaskan di bawah.

 - **Navigasi**
   
   *   ls (berfungsi untuk menampilkan isi dari sebuah direktori) .
   *   ls -la (berfungsi untuk menampilkan semua file termasuk file yang hidden).
   
 - **File Manipulation**
   
   *   touch (berfungsi untuk membuah sebuah file).
        ```html
        touch <file-name>
        ```

    *  cp (berfungsi untuk melakukan salin pada sebuah file).
        ```html
        cp <src_file> <dest_file> 
        ```

    *	mv (berfungsi untuk memindahkan file maupun rename sebuah file).
        ```html
        mv <file-name> <file-name-new>
        ```
        ```html
        mv <file-name> <directory>
        ```

    *	rm (berfungsi untuk menghapus sebuah file).
        ```html
        rm <file-name>
        ```
 - **File Manipulation**

    *  mkdir (berfungsi untuk membuat sebuah direktori baru).
        ```html
        mkdir <direction-name>
        ```

    *	cd (berfungsi untuk melakukan masuk atau keluar dari sebuah direktori).
        ```html
        cd <direction-name>
        ```

    *	pwd (berfungsi untuk mengetahui dimana lokasi saat ini dalam menjalankan terminal).
        ```html
        pwd
        ```
 - **Text**

    *	echo (untuk print sesuatu).
        ```html
        echo “saya sedang belajar unix command line”
        ```

    *	cat (untuk print sebuah file).
        ```html
        cat <file-name>
        ```

    *	nano (hampir sama dengan cat, bedanya nano dapat melakukan edit).
        ```html
        nano <file-name>
        ```

## **Git dan Github**

Secara singkat, Git adalah tools atau control system yang gratis dan dapat digunakan oleh programmer dan developer untuk menjalankan sebuah proyek kecil maupun besar. Tugasnya untuk mencatat maupun melacak perubahan yang terjadi pada suatu projek. Sedangkan GitHub adalah layanan hos web bersama untuk proyek pengembangan perangkat lunak yang menggunakan sistem kendali versi Git dan layanan hosting internet. Di bawah ini merupakan penggunaan Git dan Github.

 - **Git Init**

   Perintah ini digunakan untuk membuat repository pada file lokal yang nantinya akan terdapat folder .git.

    ```html
    git init <project-name>
    ```

 - **Git Add**

    Perintah ini berguna untuk menambahkan file baru pada repository yang telah dipilih.

    ```html
    git add <file-name>
    ```

    atau

    ```html
    git add .
    ```

 - **Git Status**

    Perintah ini berguna untuk mengetahui status dari repository lokal.

    ```html
    git status
    ```

    ![Git Status](/assets/images/git-status.png)

 - **Git Commit**
    
    Perintah ini berguna untuk menyimpan perubahan yang akan dilakukan, tetapi tidak ada perubahan pada remote repository karena belum di push.

    ```html
    git commit -m "message"
    ```

    ![Git Commit](/assets/images/git-commit.png)

 - **Git Push**

    Perintah ini guna untuk mengirimkan perubahan file setelah di commit ke repository.

    ```html
    git push origin <branch>
    ```

 - **Git Clone**

   Perintah ini guna untuk membuat salinan terhadap repository lokal.

   ```html
   git clone <link-repository>
   ```

## **HTML**

HTML adalah singkatan dari Hypertext Markup Language yang memiliki pengertian bahasa markup standar untuk membuat dan menyusun halaman pada aplikasi website. 

 - **Tag**
   
   Hal pertama yang dibahas adalah tag. Pengertian tag HTML adalah tanda awalan dan akhiran dalam perintah HTML yang bisa dibaca oleh web browser. Tag dibuat dengan menggunakan kurung siku terbuka dan tertutup, seperti ini <….>, di dalam kurung siku akan berisi nama tag.

    * Tag untuk membuat halaman HTML yang mencakup semua konten dan elemen.

      ```html
      <html> </html>
      ```

    * Tag untuk membuat elemen HTML, mencakup tampilan deskripsi di hasil pencarian Google, style konten (CSS), dan lain sebagainya.

      ```html
      <head> </head>
      ```

    * Digunakan untuk membuat bagian isi website.

      ```html
      <body> </body>
      ```

    * Tag untuk membuat paragraf 

      ```html
      <p> </p>
      ```

    * Tag untuk membuat Heading 

      ```html
      <h1> </h1>
      ```

 - **Element**

   Hal kedua adalah tentang elemen pada HTML. Elemen HTML adalah bagian yang berisi keseluruhan kode dari tag pembuka dan tag penutup. 

   * Element Heading 

      ```html
      <h1> Halo guys </h1>
      ```

   * Element paragraf 

      ```html
      <p> Lorem ipsum dolor sit amet. </p>
      ```

 - **Attribute**

    Atribut HTML adalah kata khusus yang berada di dalam tag pembuka. Atribut juga disebut sebagai modifier yang akan menentukan makna dari elemen.

    * Attribute src  

      ```html
      <img src="/assets/images/mograh.jpg" width="300" height="auto">
      ```
    
    * Attribute href  

      ```html
      <a href="https://www.markdownguide.org/basic-syntax/">Klik Link</a>
      ```

  - **Output**

    Ini merupakan kerangka sederhana dari penggabungan tag, element serta attribute.

    ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Writing n Presentation</title>
      </head>
      <body>
          
          <h1> Halo guys </h1>

          <p> Lorem ipsum dolor sit amet. </p>

          <img src="/assets/images/mograh.jpg" width="300" height="auto">

          <br>

          <a href="https://www.markdownguide.org/basic-syntax/">Klik Link</a>

      </body>
      </html>
    ```

    Output:

    ![Semantic](/assets/images/html-sederhana.png)

 - **Deployment**

   Proses ini dilakukan untuk membuat website/aplikasi yang telah dibuat dapat dinikmati oleh publik dengan cara melakukan deployment kedalam server. Untuk melakukan proses deployment kita dapat menggunakan salah satu web hosting yaitu netlify. 

## **CSS**

Dalam pengetahuan pemrograman dasar, kamu akan dikenalkan dengan HTML dan CSS. Keduanya menjadi basic yang wajib dimiliki oleh seorang programmer, terlebih bagi seorang front end developer. Lalu, apa itu CSS? CSS adalah salah satu jenis kode untuk mempercantik tampilan HTML sehingga user punya experience lebih baik pada sebuah website. 

 - **Jenis CSS**

   Setelah memahami fungsi CSS, kamu juga perlu tahu bahwa dalam proses implementasinya, ada 3 jenis CSS yang bisa kamu praktekkan. Setiap jenisnya memiliki fungsi, kelebihan, dan kekurangan masing-masing. 

    * Inline CSS
      
      Jenis yang terakhir ini langsung memasukkan kode CSS yang ditulis pada setiap atribut HTML. Jadi, di setiap atribut memiliki style CSS yang berbeda sesuai kebutuhan dan ini tergolong kurang efisien jika dibanding jenis CSS lainnya.

      ```html
      <h1 style="color:blue">Halo guys</h1>
      ```

    * Internal CSS

      Internal CSS adalah kode CSS yang penulisannya dalam tag style dan posisinya ada pada bagian atas header file HTML. CSS jenis ini berguna untuk membuat custom khusus dalam satu halaman website.

      ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CSS</title>

            <style>
                body{
                    background-color: aqua;
                }

                h1{
                    color: red;
                }

                p{
                    color: yellow;
                }
            </style>

        </head>
        <body>
            
            <h1>Halo guyss</h1>

            <p>Lorem ipsum dolor sit amet.</p>

        </body>
        </html>
      ```

      Output:

      ![CSS Internal](/assets/images/CSS-internal.png)


    * Eksternal CSS

      External CSS adalah kode CSS yang dituliskan terpisah dengan file HTML, dan ditulis sendiri pada file ekstensi .css. Penulisan file eksternalnya bisa diletakkan pada bagian head, jadi setiap halaman website dilakukan pemanggilan file .css. 

      ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <!-- CSS Eksternal -->
            <link rel="stylesheet" href="styles.css" />

            <title>CSS</title>
        </head>
        <body>
            
            <h1>Halo guyss</h1>

            <p>Lorem ipsum dolor sit amet.</p>

        </body>
        </html>
      ```

      ```css

      /* File Eksternal CSS */

      body{
        background-color: red;
      }

      h1{
        color: white;
      }

      p{
        color: aqua;
      }
      ```

      Output:

      ![CSS Eksternal](/assets/images/CSS-eksternal.png)

  - **Penjelasan Syntax CSS**

    Syntax css umumnya terdiri dari beberapa element yang kita sebut selektor dan deklarasi.

    ```css
    p{
      color: aqua;
    }
    ```

    Keterangan:

    ```
    p     : merupakan selektor,
    color : merupakan property,
    aqua  : merupakan value,
    ```

    > Selektor menunjuk ke elemen HTML yang ingin kita ubah tampilannya.

    > Blok deklarasi berisi satu atau lebih deklarasi yang dipisahkan oleh tanda titik koma.

    > Setiap deklarasi menyertakan nama properti CSS dan nilai, dipisahkan oleh titik dua.

    > Deklarasi CSS selalu diakhiri dengan tanda titik koma, dan blok deklarasi dikelilingi oleh kurung kurawal.
      

  - **Flexbox**

    Flexible Box biasa disebut flexbox merupakan mode layout yang ada di CSS3 dan digunakan untuk mengatur elemen di suatu halaman web. Flexbox ini akan mengatur ukuran dari elemen anaknya secara otomatis, dan mampu beradaptasi dengan ukuran container-nya.

    * Mengapa harus flexbox?

      Flexbox sangat cocok digunakan untuk komponen sebuah aplikasi dan layout skala kecil. Tujuan utama penggunaan layout flex adalah untuk memberi kemampuan container agar dapat memenipulasi item-item (elemen) yang ada didalamnya, baik itu merubah tinggi dan lebar, urutan posisi elemen, dan spasi (jarak) diantara elemen tersebut.

      ```css
      .flex-container {
      display: flex | inline-flex;

      flex-direction: row | row-reverse | column | column-reverse;
      flex-wrap: nowrap | wrap | wrap-reverse;
      
      /* shorthand: Tulisan cepat/Kependekan */
      flex-flow: <flex-direction> | <flex-wrap>;

      justify-content: flex-start | flex-end | center | space-between | space-around;
      align-items: flex-start | flex-end | center | baseline | stretch;
      align-content: flex-start | flex-end | center | space-between | space-around | stretch;
      }

      .flex-items {
        order: <integer>;

        flex-grow: <number>; /* defaultnya adalah: 0 */
        flex-shrink: <number>; /* defaulnya adalah: 1 - nilai negatif tidak berlaku*/
        flex-basis: <length> | auto; /* defaultnya adalah: auto */
        /* shorthand: Tulisan cepat/Kependekan */
        flex: <flex-grow> | <flex-shrink> | <flex-basis> ; /* defaultnya adalah: 0 1 auto; */

        align-self: auto | flex-start | flex-end | center | baseline | stretch; /* lihat: align-items */
      }
      ```

## **Algoritma dan Data Structure**

   Apa yang dimaksud dengan algoritma? Singkatnya, algoritma dapat didefinisikan sebagai prosedur atau tahapan logis dalam memecahkan suatu masalah tertentu secara sistematis. Sedangkan struktur data adalah cara penyimpanan, penyusunan dan pengaturan data di dalam media penyimpanan komputer sehingga data tersebut dapat digunakan secara efisien.

  - **Manfaat Algoritma**
     
     > Memecahkan program yang sulit.

     > Dapat digunakan berkali-kali untuk memecahkan suatu permasalahan.

     > Meminimalisir kesalahan.

  - **Manfaat Data Structures**

     > Memasukkan sebagian besar berkaitan dengan bagaimana data diterima. I

     > Pemrosesan mendapatkan cara data dimanipulasi dalam struktur data pun dapat terjadi secara bersamaan atau sebagai hasil dari proses lain yang menangani struktur data.

     > Retrieving dikhususkan untuk menemukan dan mengembalikan data yang disimpan dalam struktur.

  - **Pseudocode**

    Apa itu Pseudocode? Pseudocode secara harfiah berarti ‘kode semu’. Maksudnya, pseudocode adalah sebuah cara penulisan program yang informal dan dapat dibuat dengan kaidah yang ditentukan sendiri. Dengan kata lain, pseudocode merupakan urutan logika yang bertujuan untuk dipahami manusia dengan mudah.


  - **Contoh Algoritma Sederhana Pseudocode**

    ```cpp
    Nama = string
    Nilai = integer
    Keterangan = string

    read (nama, nilai)
    if nilai >= 60 then
    keterangan = ‘lulus’
    else
    keterangan = ‘tidak lulus’
    write(nama, keterangan)
    ```

  - **Contoh Data Structures**

    ```javascript
    let buah = ["jeruk", "mangga", "melon", "semangka"];

    delete buah[1];
    ```

## **Javascript Basic**

  JavaScript adalah bahasa pemrograman populer yang digunakan untuk membuat situs dengan konten website yang dinamis. 

  - **Variable Javascript**



  - **Tipe Data Populer Pada Javascript**

    Javascript merupakan salah satu loosely typed language yang membuat variabelnya tidak terikat tipe data tertentu. Namun, nilai dari variabelnya lah yang memiliki tipe data tertentu.

    
    > undefined => Tipe data primitive yang nilainya undefined atau tidak terdefinisikan.
    
    > null => Tipe data primitive yang nilainya null yang merupakan pointer untuk object yang kosong.

    > number => Tipe data yang mewakili seluruh tipe data angka, seperti integer (bilangan bulat) dan floating point atau desimal.
    
    > string => Tipe data yang berhubungan dengan karakter.

    > boolean => Tipe data yang hanya memiliki dua nilai, yakni true dan false dalam huruf kecil.

    > object => Tipe data object pada Javascript merupakan tipe data kompleks yang berisi kumpulan properti (props), setiap properti berisi pasangan key:value.
    

  - **Operator Javascript**

    Operator merupakan hal dasar yang harus dipahami dalam pemrograman. Karena kita akan banyak menggunakannya untuk melakukan berbagai macam operasi di dalam program.

    * **Operator Aritmatika**

      Operator aritmatika merupakan operator untuk melakukan operasi aritmatika seperti penjumlahan, pengurangan, pembagian, perkalian, dsb.

      ```javascript
      var a = 10;
      var b = 15;

      var c = a + b;

      console.log(c);
      ```
    
    * **Opertor Penggabungan Teks**

      Pada Javascript, apabila kita akan melakukan operasi terhadap tipe data string atau teks menggunakan penjumlahan (+), maka yang akan terjadi adalah penggabungan; Bukan penjumlahan.

      ```javascript
      var result = 10 + "3";

      console.log(result);

      "103"
      ```

    * **Opeartor Penugasan**

      Operator penugasan adalah operator yang digunakan untuk memberikan tugas kepada variabel. Biasanya digunakan untuk mengisi variabel.

      ```javascript
      var a = 2;

      a += 1;
      ```
      
      > Didapatkan nilai 3, karena akan menjumlahkan nilai sebelumnya.

      ```javascript
      a = a + 1
      ```

    * **Opeartor Perbandingan**

      Operator relasi atau perbandingan adalah operator yang digunakan untuk membandingkan dua nilai. Dan akan menghasilkan nilai boolean.

      ```javascript
      var a = 12;
      var b = 2;

      var c = 12 < 2;

      console.log(c);

      "false"
      ```

    * **Opeartor Logika**

      Operator logika digunakan untuk melakukan operasi terhadap dua nilai boolean.

      ```javascript
      var a = 12 > 3;
      var b = 2 > 1;

      var c = a && b;

      console.log(c);

      "true"
      ```

    * **Opeartor Ternary**

      Opertor ternary pada Javascript, biasanya digunakan untuk membuat sebuah percabangan if/else. Simbol opertor ternary terdiri dari tanda tanya dan titik dua (?:).

      ```javascript  
      var result = conditional ? "true" : "false";
      ```


  - **Control Flow Javascript**
