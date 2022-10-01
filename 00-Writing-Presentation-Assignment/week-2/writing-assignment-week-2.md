# **Rangkuman Web Development Basic Week 2**

Web Development Basic merupakan salah satu kegiatan yang ada di Skilvul. Tujuannya untuk berbagi ilmu mengenai apa saja yang dibutuhkan dalam pembuatan sebuah website. 

## **Javascript Dasar**

JavaScript adalah bahasa pemrograman populer yang digunakan untuk membuat situs dengan konten website yang dinamis. 

 - **Javascript Scope**
   
   Scope dalam JavaScript mendefinisikan aksesibilitas variabel, objek, dan fungsi.Ada dua jenis cakupan di JavaScript yaitu :

   - **Global Scope**
     
     Semua variabel yang dibuat di luar fungsi disebut variabel global JavaScript. Objek semacam itu dapat diakses di seluruh situs web. Global Scope harus mempunyai nama yang unik agar tidak terjadi error.

     Contoh Global Scope :

     ```javascript
     let sepatu = "Nike Air Jordan";

     // Variabel sepatu bisa dimanfaatkan disini.
     
     function myShoes(){
     // Variabel sepatu bisa dimanfaatkan di dalam fungsi ini.
     };

     // Variabel sepatu bisa dimanfaatkan disini.
     ```
     

   - **Local Scope**
    
     Variable local scope atau variable fungsi lokal adalah variabel yang dideklarasikan di dalam fungsi pada JavaScript. Dan hanya bisa di akses di dalam fungsi tersebut.

     Contoh Global Scope :

     ```javascript
     // Variabel sepatu tidak bisa dimanfaatkan disini.
     
     function myShoes(){
        let sepatu = "Nike Air Jordan";
     };

     // Variabel sepatu tidak bisa dimanfaatkan disini.
     ```

 - **Javascript Function**
   
   Fungsi JavaScript adalah blok kode yang dirancang untuk melakukan tugas tertentu Fungsi JavaScript dijalankan ketika "sesuatu" memanggilnya.

   Javscript Funtion Syntax :

   ```javascript
   function name(parameter1, parameter2){
    // Kode yang akan dieksekusi
   }
   ```

   Ketika JavaScript mencapai "return", fungsi akan berhenti dijalankan.

   ```javascript
   function name(parameter1, parameter2){
    return parameter1 * parameter2;
   }

   let result = name(4,10); // Memanggil fungsi name dengan mengisikan argumennya.

   console.log(result);

   40 // return value
   ```

 - **Data Type Built in Prototype & Method**

 