const express = require("express");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* --------------- Import Controller --------------- */

const usersController = require("./controllers/usersController");
const todolistsController = require("./controllers/todolistsController");

/* --------------- End Import Controller --------------- */


/* --------------- Import Middlewares --------------- */

const middlewares = require("./middlewares/auth");

/* --------------- End Import Middlewares --------------- */


/* --------------- Endpoint Define --------------- */

/* ------- Auth ------- */

app.post('/users/register', usersController.handleUsersRegister);
app.post('/users/login', usersController.handleUsersLogin);

/* ------- End Auth ------- */


/* ------- Todo List ------- */

app.post('/users/todo-lists/create', middlewares.authenticate, todolistsController.handleCreateToDoList);
app.get('/users/todo-lists', todolistsController.handleGetAllToDoLists);
app.get('/users/todo-lists/get-by-user-id/:id', middlewares.authenticate, todolistsController.handleGetToDoListByUserId);
app.get('/users/todo-lists/:id', middlewares.authenticate, todolistsController.handleGetToDoListById);
app.put('/users/todo-lists/update/:id', middlewares.authenticate, todolistsController.handleUpdateToDoListById);
app.delete('/users/todo-lists/delete-by-id/:id', middlewares.authenticate, todolistsController.handleDeleteToDoListById);
app.delete('/users/todo-lists/delete-by-user-id/:id', middlewares.authenticate, todolistsController.handleDeleteToDoListByUserId);
app.delete('/users/todo-lists/delete-all', middlewares.authenticate, todolistsController.handleDeleteAllToDoList);

/* ------- End Todo List ------- */


/* --------------- End Endpoint Define --------------- */


/* --------------- Server Listen --------------- */

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});