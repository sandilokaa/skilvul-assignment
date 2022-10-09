# **Rangkuman Web Development Advance**

Web Development Advance merupakan salah satu kegiatan yang ada di Skilvul. Tujuannya untuk berbagi ilmu mengenai apa saja yang dibutuhkan dalam pembuatan sebuah website. 


## **Javascript Array**

   Array di sini berbeda dengan objek, begitupun dengan properti dan metode array pada umumnya. Array pada JavaScript memiliki beberapa ciri sebagai berikut:

   > Array pada Javascript adalah variabel yang berisi banyak nilai (item)

   > Array pada JavaScript dapat menyimpan fungsi, objek, dan array lainnya.

   > Array pada JavaScript adalah variabel yang dapat berisi lebih dari satu objek.


   - **Javascript Push**

     Ini berfungsi untuk menambahkan item di akhir. Contoh sebagai berikut :

     ```javascript
     const cars = ["BMW", "Tesla", "Honda"];

     cars.push("Toyota");

     console.log(cars);

     ["BMW", "Tesla", "Honda", "Toyota"]; // output
     ```

   - **Javascript Pop**

     Ini berfungsi untuk menghapus item di akhir. Contoh sebagai berikut :

     ```javascript
     const cars = ["BMW", "Tesla", "Honda"];

     cars.pop();

     console.log(cars);

     ["BMW", "Tesla"]; //output
     ```

   - **Javascript Shift**

     Ini berfungsi untuk menghapus item di awal. Contoh sebagai berikut :

     ```javascript
     const cars = ["BMW", "Tesla", "Honda"];

     cars.shift();

     console.log(cars);

     ["Tesla", "Honda"]; //output
     ```

   - **Javascript Unshift**

     Ini berfungsi untuk menambah item di awal. Contoh sebagai berikut :

     ```javascript
     const cars = ["BMW", "Tesla", "Honda"];

     cars.unshift("Toyota");

     console.log(cars);

     ["Toyota", "BMW", "Tesla", "Honda"]; //output
     ```

   - **Javascript Splice**

     Ini berfungsi untuk menambah atau menghapus item di array. Contoh sebagai berikut :

     ```javascript

     // Add Item
     const cars = ["BMW", "Tesla", "Honda"];

     cars.splice(1, 0, "Toyota");

     console.log(cars);

     ["BMW", "Toyota", "Tesla", "Honda"] //output

     // Remove Item
     const cars = ["BMW", "Tesla", "Honda"];

     cars.splice(1, 1);

     console.log(cars);

     ["BMW", "Honda"] //output

     ```

   - **Javascript Slice**

     Ini berfungsi untuk mengembalikan elemen yang dipilih dalam array, sebagai array baru.. Contoh sebagai berikut :

     ```javascript

     const cars = ["BMW", "Tesla", "Honda"];

     const result = cars.slice(1, 2);

     console.log(result);

     ["Tesla"] //output
     ```