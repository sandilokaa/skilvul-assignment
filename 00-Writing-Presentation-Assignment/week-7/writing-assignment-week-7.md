# **Rangkuman Backend Bootcamp Week-3**

Backend Bootcamp merupakan salah satu kegiatan yang ada di Skilvul. Tujuannya untuk berbagi ilmu mengenai apa saja yang dibutuhkan dalam pembuatan sebuah server, database serta business logic.

## **Sequelize**

   Sequelize adalah ORM untuk Node.js yang bersifat promise-based. Sequelize memiliki support berbagai macam untuk PostgreSQL, MySQL, MariaDB, SQLite, dan MSSQL, jadi Sequelize mampu disandingkan dengan mayoritas berbagai macam jenis database. Bagaimana cara menggunakannya? penjelasan di bawah.

   **Instalation**

   ```
   yarn add sequelize
   ```

   ```
   yarn add sequelize-cli
   ```

   ```
   yarn add pg #sesuai kebutuhan jenis database
   ```

   **Sequelize Init**

   ```
   yarn sequelize-cli init
   ```

   Setelah melakukan init akan muncul 4 folder yaitu, **config**, **migrations**, **models**, **seeders**

   **Sequelize Create Database, Table & Migrate**

   ```
   npx sequelize-cli db:create
   ```
   ```
   npx sequelize-cli model:generate --name cars --attributes name:string,price:integer,size:string,image:text 
   ```
   ```
   npx sequelize-cli db:migrate
   ```
   
   Dengan adanya Sequelize kita dapat menggunakan query yang sudah diberikan, contohnya sebagai berikut.

   **Jika ingin membuat data**

   ```javascript
   const result = await cars.create({
    name,
    price,
    size,
    image
   });

   return result;
   ```

   **Jika ingin membuat ubah data**

   ```javascript
   const result = await cars.update({
    name,
    price,
    size,
    image
   }, {
    where: { id }
   });

   return result;
   ```

   **Jika ingin membuat hapus data**

   ```javascript
   const result = await cars.destroy({
    where: { id }
   });

   return result;
   ```

   **Jika ingin membuat ambil data**

   ```javascript
   const result = await cars.findAll();

   return result;
   ```

   **Jika ingin membuat ambil 1 data **

   ```javascript
   const result = await cars.findOne({
    where: { id }
   });

   return result;
   ```

## **MongoDB**

   MongoDB adalah salah satu jenis database NoSQL yang cukup populer digunakan dalam pengembangan website. Berbeda dengan database jenis SQL yang menyimpan data menggunakan relasi tabel, MongoDB menggunakan dokumen dengan format JSON. Bagaimana cara menggunakannya ?

   **Connection**

   ```javascript
   const mongoose = require("mongoose");

   const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
   };

   const uri = 'mongodb://localhost:27017/skilvul_mongodb';

   const mongooseConnect = mongoose.connect(
        uri, 
        connectionParams
   ).then(() => {
        console.log("Connected to mongodb!");
   }).catch((err) => {
        console.log(err);
   });

   module.exports = mongooseConnect; 
   ```

   **CRUD System**

   **Create**
   ```javascript
   db.table_name.insertOne({
    {
        name: "sanlok aja",
        email: "sanlokaja@gmail.com"
    },
   });
   ```

   **Update**
   ```javascript
   db.table_name.updateOne({
    {
        _id: 1
    },
    {
        $set: {email: "sanlokaza@gmail.com"}
    }
   });
   ```

   **Delete**
   ```javascript
   db.table_name.deleteOne({
    {
        _id: 1
    }
   });
   ```

   **GET**
   ```javascript
   db.table_name.find();
   ```

   **Relationship**

   > One to one Pada kasus one-to-one relationship biasa digunakan sistem embedding. Contoh, satu user hanya punya satu NIM.

   > One to Many Pada kasus one-to-many relationship biasa digunakan sistem referencing. Contoh, satu user bisa punya banyak smartphone.

   > Many to many Pada kasus many-to-many relationship biasanya juga menggunakan sistem referencing. Contoh, satu user punya banyak smartphone dan satu smartphone bisa dipunyai oleh banyak user.


## **Mongoose**

   Mongoose.js adalah MongoDB ODM untuk Node.js. Object Document Mapper (ODM) adalah sesuatu yang memetakan objek ke database dokumen seperti MongoDB. Di balik terpal, ia menggunakan driver MongoDB asli untuk Node.js tetapi memberikan beberapa manfaat tambahan termasuk kemampuan untuk menentukan skema, menerapkan sistem tipe, memvalidasi data, dan menggunakan fungsi JavaScript asinkron. Bagaimana cara penggunaannya?

   **Instalation**

   ```
   yarn add mongoose
   ```

   ```
   yarn add mongodb
   ```

   Setelah itu lakukan connection seperti mongoDB. Dan buatlah schema, contoh sebagai berikut.

   ```javascript
   const mongoose = require("mongoose");

   const schema = mongoose.Schema(
    {
        user_id: 'Object',
        title: 'String',
        content: 'String'
    },
    {
        timestamps: true
    }
   );

   const Post = mongoose.model('Post', schema);

   module.exports = Post;
   ```

   **CRUD System**

   **GET**
   ```javascript
   await schema_name.find()
   ```
   
   **CREATE**
   ```javascript
   await schema_name.save()
   ```

   **UPDATE**
   ```javascript
   await schema_name.findOneAndUpdate()
   ```

   **DELETE**
   ```javascript
   await schema_name.deleteOne()
   ```

## **Docker**

   Docker adalah platform perangkat lunak yang memungkinkan Anda membuat, menguji, dan menerapkan aplikasi dengan cepat. Docker mengemas perangkat lunak ke dalam unit standar yang disebut kontainer yang memiliki semua yang diperlukan perangkat lunak agar dapat berfungsi termasuk pustaka, alat sistem, kode, dan waktu proses. Dengan menggunakan Docker, Anda dapat dengan cepat menerapkan dan menskalakan aplikasi ke lingkungan apa pun dan yakin bahwa kode Anda akan berjalan. Bagaimana cara penggunaannya?

   **Container**

   Container adalah sebuah lingkungan khusus yang dibuat untuk instance Docker image. Menjalankan sebuah Image akan menghasilkan satu Docker container.

   ```
   sudo docker images
   ```

   **PULL**
   ```
   docker pull chuanwen/cowsay
   ```

   **Docker Images**
   ```
   docker images
   ```

   **Docker Run**
   ```
   docker run
   ```

   **Docker PS**
   ```
   docker ps
   ```