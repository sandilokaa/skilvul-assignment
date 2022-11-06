# **Rangkuman Backend Bootcamp Week-2**

Backend Bootcamp merupakan salah satu kegiatan yang ada di Skilvul. Tujuannya untuk berbagi ilmu mengenai apa saja yang dibutuhkan dalam pembuatan sebuah server, database serta business logic.


## **SQL (Structured Query Language)**

   SQL adalah perintah pemrograman yang digunakan untuk mengakses dan mengelola data pada sistem database. Di bawah ini merupakan beberapa query yang sering digunakan.

   **Create Database**
   
   ```sql
   CREATE DATABASE databaseName;
   ```

   ```sql
   use databaseName;
   ```

   **Create Table**

   ```sql
   CREATE TABLE tableName (column1 datatype,...)
   ```

   **Select Syntax**

   ```sql
   SELECT * FROM tableName;
   ```

   **Where Syntax**

   ```sql
   SELECT * FROM tableName WHERE condition;
   ```

   **Insert Syntax**
   
   ```sql
   INSERT INTO tableName (column1, ...)
   VALUES (value1, ...);
   ```
   
   **Update Syntax**

   ```sql
   UPDATE tableName
   SET column1 = value1, ...
   WHERE condition;
   ```

   **Delete Syntax**

   ```sql
   DELETE FROM tableName WHERE condition;
   ```

   **Inner Join Syntax**

   ```sql
   SELECT columnName
   FROM table1
   INNER JOIN table2
   ON table1.columnNname = table2.columnName;
   ```

   **Left Join Syntax**

   ```sql
   SELECT columnName
   FROM table1
   LEFT JOIN table2
   ON table1.columnNname = table2.columnName;
   ```

   **Right Join Syntax**

   ```sql
   SELECT columnName
   FROM table1
   RIGHT JOIN table2
   ON table1.columnNname = table2.columnName;
   ```

## **ExpressJS**

   Express.js adalah framework back end. Artinya, ia bertanggung jawab untuk mengatur fungsionalitas website, seperti pengelolaan routing dan session, permintaan HTTP, penanganan error, serta pertukaran data di server. Berikut contoh bagaimana cara melakukan **koneksi antara ExpressJS dan MySQL** serta melakukan **authentication dan authorization**.

   **Express connect MySQL**

   ```
   yarn add mysql2
   ```

   ```javascript
   // get the client, make file connection.js
   const mysql = require('mysql2');

   // create the connection to database
   const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'skilvul_store'
   });

   module.exports = {connection};
   ```

   ```javascript
   // make file server.js
   const express = require('express');

   const app = express();
   const PORT = 3000;

   app.use(express.json());
  
   const skilvulController = require("./controllers/skilvulController");

   app.get('/products', skilvulController.handleGetProducts);

   app.listen(PORT, () => {
        console.log(`Server running successfully on port http://localhost:${PORT}`);
   });
   ```

   ```javascript
   // make controller.js
   const { connection } = require("../connection");

   const handleGetProducts = async (req, res) => {

   connection.query(
        'SELECT * FROM products',
        function (err, results, fields) {
            console.log(results); 
            console.log(fields);
        }
   );

   res.json.status(200).send({
        status: true, 
        message: "berhasil"
   });

   };

   module.exports = { handleGetProducts };
   ```

   **Authentication & Authorization With Service Repository Pattern**

   ```javascript
   // make auth.js to authenticate (Bearer token)
   const authenticate = async (req, res, next) => {
   const authHeader = req.get("Authorization");
   let token = "";

   if(authHeader && authHeader.startsWith("Bearer"))
        token = authHeader.split(" ")[1];
   else
        return res.status(401).send({
            status: false,
            message: "Anda harus login untuk mengakses resource ini",
            data: null,
        });

   try {
        
        const { email } = jwt.verify(token, JWT.SECRET);

        const getUserByEmail = await usersRepository.getUserByEmail({email});

        req.user = getUserByEmail;

        next();
   } catch(err) {
            return res.status(401).send({
                status: false,
                message:"Sesi telah kadaluarsa, silahkan login kembali",
                data: null,
            });
        } 
   };

   module.exports ={authenticate};
   ```

   ```javascript
   // at server.js import middlewares
   const middlewares = require("./middlewares/auth");

   // at endpoint add the middlewares
   app.post('/users/register', controller.handleCreateUser);
   app.post('/users/login', controller.handleLoginUser);
   app.post('/users/products', middlewares.authenticate, controller.handleCreateProduct);
   ```

   **Register**
   
   ```javascript
   // Business login (Register)

   const getUserByEmail = await usersRepository.getUserByEmail({ email });

        if (getUserByEmail) {
            return {
                status: false,
                status_code: 400,
                message: "Email sudah digunakan!",
                data: {
                    registered_user: null,
                },
            };
        } else {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
        const registeredUser = await usersRepository.handleCreateUser({
            name,
            email,
            password: hashedPassword
        });

        return {
            status: true,
            status_code: 201,
            message: "User berhasil melakukan registrasi!",
            data: {
                registered_user: registeredUser,
            },
        };
   }     
   ```

   **Login**

   ```javascript
   // Business login (Login)

   const getUserByEmail = await usersRepository.getUserByEmail({ email });

   if (!getUserByEmail) {
        return {
            status: false,
            status_code: 404,
            message: "Email belum terdaftar",
            data: {
                user: null,
            },
        };
   } else {

        const isPasswordMatch = await bcrypt.compare(password, getUserByEmail.password);

        if (isPasswordMatch) {
            const token = jwt.sign({
                id: getUserByEmail.id,
                email: getUserByEmail.email,
            },
                JWT.SECRET,
                {
                    expiresIn: JWT.EXPIRED,
                });

                return {
                    status: true,
                    status_code: 201,
                    message: "User berhasil login",
                    data: {
                        token,
                    },
                };
        } else {
            return {
                status: false,
                status_code: 400,
                message: "Password salah",
                data: {
                     user: null,
                },
            };
        }
   }
   ```

   **Create Product asked to login**

   ```javascript
   // Business login (Create Product)

   const createdToDoList = await todolistsRepository.handleCreateProduct({
        user_id,
        name,
        price,
        description
   });

        return {
            status: true,
            status_code: 201,
            message: "User berhasil menambahkan to do list",
            data: {
                todo_lists: createdToDoList,
            },
        };
   ```

## **ORM Sequelize**

   Object-Relational Mapping (ORM) adalah teknik yang memungkinkan Anda melakukan kueri dan memanipulasi data dari database menggunakan paradigma berorientasi objek. Sequelize adalah ORM untuk Node.js yang bersifat promise-based. Sequelize memiliki support berbagai macam untuk PostgreSQL, MySQL, MariaDB, SQLite, dan MSSQL, jadi Sequelize mampu disandingkan dengan mayoritas berbagai macam jenis database. Di bawah ini merupakan urutan bagaimana cara melakukan instalasi sequelize di NodeJS.

   ```
   yarn add sequelize
   ```

   ```
   yarn add sequelize-cli
   ```

   ```
   npx sequelize-cli init
   ```

   Setelah sequelize di-init, maka seqeulize akan membuatkan beberapa folder diantaranya adalah **config**, **migration**, **models**, **seeders**. Pada folder config kita bisa isinya sesuai apa yang dibutuhkan mulai dari username, password, nama database, dialect, host.

   ```
   npx sequelize-cli db:create
   ```

   ```
   npx sequelize-cli model:generate --name tableName --attributes columnName:typedata,...
   ```

   ```
   npx sequelize-cli db:migrate
   ```

   **Query di Sequelize**

   ---
   
   **GET**

   ```javascript
   const result = await tableName.findAll();
   ```

   ```javascript
   const result = await tableName.findOne({
    where: {columnName}
   });
   ```

   **CREATE**

   ```javascript
   const result = await tableName.create({
    columnName,
    ...
   });
   ```

   **UPDATE**

   ```javascript
   const result = await tableName.update({
    columnName,
    ...
   }, {
    where: {columnName}
   });
   ```

   **DELETE**

   ```javascript
   const result = await tableName.destroy({
    where: {columnName}
   });
   ```