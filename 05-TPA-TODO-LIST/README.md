# **TPA 5 (Web Service & RESTful API)**

Folder ini berisikan tentang pembuatan CRUD system to do list. Dimaksudkan untuk memenuhi tugas dari Skilvul. Berikut di bawah ini merupakan dokumentasi dari **Web Service & RESTful API** yang dibuat.


## **Endpoint RESTful API**

   Berikut endpoint RESTful API serta contoh request.


### **Registrasi User**

   Pada postman atur methode menjadi POST.

   **Example**

   ```
   http://localhost:2000/users/register
   ```

   **Request**

   ```
   {
        "name":"Sanlok Aja",
        "email":"sanlokaja@gmail.com",
        "password":"sanlokaja123.",
        "phoneNumber":"089123456789",
        "dateOfBirth":"2002-04-12"
   }
   ```

### **Login User**

   Pada postman atur methode menjadi POST.

   **Example**

   ```
   http://localhost:2000/users/login
   ```

   **Request**

   ```
   {
        "email":"sanlokaja@gmail.com",
        "password": "sanlokaja123."
   }
   ```

### **User Create To Do List**

   Pada postman atur methode menjadi POST.

   **Example**

   ```
   http://localhost:2000/users/todo-lists/create
   ```

   **Request**

   ```
   {
        "activity":"Belajar Drag",
        "description":"Belajar Drag 600m di sirkuit sentul",
        "activityDate":"2022-11-04",
        "activityTime":"15:30"
   }
   ```

   Masukkan Authorization (Bearer Token) hasil dari login.

   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJzYW5sb2thamFAZ21haWwuY29tIiwiaWF0IjoxNjY3NTc4MDkwLCJleHAiOjE2Njc2MDY4OTB9.GX5NJ3sbPepB-DWCvYb2yheZHFF5mnmYgMJQuf9Ydbo
   ```

### **User Get All To Do List**

   Pada postman atur methode menjadi GET.

   **Example**

   ```
   http://localhost:2000/users/todo-lists
   ```

### **User Get To Do List By User Id**

   Pada postman atur methode menjadi GET.

   **Example**

   ```
   http://localhost:2000/users/todo-lists/get-by-user-id/:id
   ```

   **Request**

   Masukkan Authorization (Bearer Token) hasil dari login.

   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJzYW5sb2thamFAZ21haWwuY29tIiwiaWF0IjoxNjY3NTc4MDkwLCJleHAiOjE2Njc2MDY4OTB9.GX5NJ3sbPepB-DWCvYb2yheZHFF5mnmYgMJQuf9Ydbo
   ```

   Masukkan Params.

   Path Variables

   | Key | Value |
   |-----|-------|
   | Id  | 1     |

   ```
   http://localhost:2000/users/todo-lists/get-by-user-id/1
   ```


### **User Get To Do List By Id**

   Pada postman atur methode menjadi GET.

   **Example**

   ```
   http://localhost:2000/users/todo-lists/:id
   ```

   **Request**

   Masukkan Authorization (Bearer Token) hasil dari login.

   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJzYW5sb2thamFAZ21haWwuY29tIiwiaWF0IjoxNjY3NTc4MDkwLCJleHAiOjE2Njc2MDY4OTB9.GX5NJ3sbPepB-DWCvYb2yheZHFF5mnmYgMJQuf9Ydbo
   ```

   Masukkan Params.

   Path Variables

   | Key | Value |
   |-----|-------|
   | Id  | 1     |

   ```
   http://localhost:2000/users/todo-lists/1
   ```

### **User Update To Do List By Id**

   Pada postman atur methode menjadi PUT.

   **Example**

   ```
   http://localhost:2000/users/todo-lists/update/:id
   ```

   **Request**

   ```
   {
        "activity":"Belajar Mencintai",
        "description":"Belajar mencintai orang yang salah, galau dulu",
        "activityDate":"2022-11-04",
        "activityTime":"20:30"
   }
   ```

   Masukkan Authorization (Bearer Token) hasil dari login.

   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJzYW5sb2thamFAZ21haWwuY29tIiwiaWF0IjoxNjY3NTc4MDkwLCJleHAiOjE2Njc2MDY4OTB9.GX5NJ3sbPepB-DWCvYb2yheZHFF5mnmYgMJQuf9Ydbo
   ```

   Masukkan Params.

   Path Variables

   | Key | Value |
   |-----|-------|
   | Id  | 1     |

   ```
   http://localhost:2000/users/todo-lists/update/1
   ```

### **User Delete To Do List By Id**

   Pada postman atur methode menjadi DELETE.

   **Example**

   ```
   http://localhost:2000/users/todo-lists/delete-by-id/:id
   ```

   **Request**

   Masukkan Authorization (Bearer Token) hasil dari login.

   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJzYW5sb2thamFAZ21haWwuY29tIiwiaWF0IjoxNjY3NTc4MDkwLCJleHAiOjE2Njc2MDY4OTB9.GX5NJ3sbPepB-DWCvYb2yheZHFF5mnmYgMJQuf9Ydbo
   ```

   Masukkan Params.

   Path Variables

   | Key | Value |
   |-----|-------|
   | Id  | 1     |

   ```
   http://localhost:2000/users/todo-lists/delete-by-id/1
   ```

### **User Delete All To Do List By User Id**

   Pada postman atur methode menjadi DELETE.

   **Example**

   ```
   http://localhost:2000/users/todo-lists/delete-by-user-id/:id
   ```

   **Request**

   Masukkan Authorization (Bearer Token) hasil dari login.

   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJzYW5sb2thamFAZ21haWwuY29tIiwiaWF0IjoxNjY3NTc4MDkwLCJleHAiOjE2Njc2MDY4OTB9.GX5NJ3sbPepB-DWCvYb2yheZHFF5mnmYgMJQuf9Ydbo
   ```

   Masukkan Params.

   Path Variables

   | Key | Value |
   |-----|-------|
   | Id  | 1     |

   ```
   http://localhost:2000/users/todo-lists/delete-by-user-id/1
   ```

### **User Delete All To Do List (Truncate)**

   Pada postman atur methode menjadi DELETE.

   **Example**

   ```
   http://localhost:2000/users/todo-lists/delete-all
   ```

   **Request**

   Masukkan Authorization (Bearer Token) hasil dari login.

   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJzYW5sb2thamFAZ21haWwuY29tIiwiaWF0IjoxNjY3NTc4MDkwLCJleHAiOjE2Njc2MDY4OTB9.GX5NJ3sbPepB-DWCvYb2yheZHFF5mnmYgMJQuf9Ydbo
   ```
