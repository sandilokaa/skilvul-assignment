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

## **Javascript Array Multidimensional**

   Array multidimensi tidak langsung disediakan dalam JavaScript. Jika kita ingin menggunakan sesuatu yang bertindak sebagai array multidimensi maka kita perlu membuat array multidimensi dengan menggunakan array satu dimensi lainnya.

   Contoh :

   ```javascript
   // Buat secara native

   let tables = [
        ['Play Game', 1],
        ['Sleep', 7],
        ['Sport', 2],
        ['Alone', 3],
   ];

   // how to access array

   console.log(tables[0][1]); // 1

   // Add item with push

   tables.push(['cutting',3]);
   ```

   Selain itu kita bisa melakukan pop, splice sesuai kebutuhan. Dan yang terpenting bisa melakukan looping seperti for loop, forEach, map dan sebagainya. Untuk contoh sebagai berikut:

   ```javascript
   for (let i = 0; i < tables.length; i++){
    console.log("data: "+tables[i]);
   }
   ```

   Kita juga bisa menambahkan sebuah array baru pada index ke 2 di setiap datanya, sebagai berikut:

   ```javascript
   tables.map(table => {
        let percentage = ((table[1] / 10) * 100).toFixed();
        table[2] = percentage + '%';
   });

   console.log(tables);

   [
    [ 'Play Game', 1, '10%' ],
    [ 'Sleep', 7, '70%' ],
    [ 'Sport', 2, '20%' ],
    [ 'Alone', 3, '30%' ]
   ]
   ```

## **Javascript Object**

   Objek sebenarnya adalah sebuah variabel yang menyimpan nilai (properti) dan fungsi (method). 

- **Object Literal**

   ```javascript
   const person = {
    name: "Sandi Loka",
    age: 21,
    hometown: "Semarang",
    gender: "Laki-Laki"
   };

   // how to access person object

   console.log(person.name);
   ```
- **Method**

   Selain itu bisa membuat **method** di dalam object, sebagai berikut:

   ```javascript
   const person = {
    name: "Sandi Loka",
    age: 21,
    hometown: "Semarang",
    gender: "Laki-Laki",
    greetings: function(){
        return(`Saya ${this.name}, umur saya ${this.age} dan saya tinggal di ${this.hometown}`);
    }
   };

   // how to access person greetings object

   console.log(person.greetings());


   // how to change value in object

   person.name = "Ananta"
   ```

- **Array of Object**

   **Object** juga bisa dimasukan ke dalam sebuah **array** untuk contoh sederhana sebagai berikut:

   ```javascript
   const neighbor = [
    {
        name: "Sandi Loka",
        hometown: "Semarang"
    },
    {
        name: "Sanlok Aja",
        hometown: "Surabaya"
    }
   ];

   // how to get data per index

   console.log(neighbor[1]);
   ```
   
- **Iterasi**

   Bisa juga menggunakan iterasi seperti forEach, map, filter, reduce dan sebagainya. Untuk contoh salah satunya sebagai berikut :

   ```javascript
   const neighbor = [
    {
        name: "Sandi Loka",
        hometown: "Semarang"
    },
    {
        name: "Sanlok Aja",
        hometown: "Surabaya"
    }
   ];

   // Map

   const result = neighbor.map(e => {
    console.log(e)
   });
   ```

- **Object Merge**

  ```javascript
  const neighbor1 = [
    {
        name: "Sandi Loka",
        hometown: "Semarang"
    },
    {
        name: "Sanlok Aja",
        hometown: "Surabaya"
    }
  ];

  const neighbor2 = [
    {
        name: "Namira",
        hometown: "Semarang"
    },
    {
        name: "Namira Aja",
        hometown: "Surabaya"
    }
  ];

  // bisa menggunakan spread operator

  const result = [...neighbor1,...neighbor2];

  // Filter berdasarkan tempat lahir

  const hometownResult = result.filter(e => e.hometown === "Semarang");

  console.log(hometownResult);
  ```

 - **Nested Object**

    ```javascript
    const person = {
        name: "Sandi Loka",
        age: 21,
        address: {
            city: "Semarang",
            district: "Tembalang"
        }
    };


    // how to access nested object
    console.log(person.address.city)
    ```
   
## **Javascript Recursive**

   Fungsi rekursif adalah fungsi yang memanggil dirinya sendiri sampai selesai. Dan teknik ini disebut rekursi.

   ```javascript
   function recursive() {
    // ...
    recursive();
    // ...
   }
   ```

   Fungsi rekursif selalu memiliki kondisi untuk berhenti memanggil dirinya sendiri. Jika tidak, ia akan menyebut dirinya sendiri tanpa batas. Jadi fungsi rekursif biasanya terlihat seperti berikut:

   ```javascript
   function recursive() {
    if(conditional) {
        // statement
    } else {
        recursive();
    }
   }
   ```

**Contoh Sederhana Recursive**
  
  ```javascript
  function recursive(x){
    if (x == 1){
        console.log(x);
    } else {
        recursive(x - 1);
        console.log(x);
    }
  }

  recursive(4);
  ```

  **Contoh Sederhana Faktorial**

  Metode Iteratif Dalam pendekatan ini, kita menggunakan perulangan for untuk melakukan iterasi pada barisan bilangan dan mendapatkan faktorial

  ```javascript
  let a = 1;

  for (let i = 1; i <= 5; i++){
    a = a * i;
    console.log(a);
  }
  ```