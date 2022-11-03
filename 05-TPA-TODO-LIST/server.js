const express = require("express");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const PORT = process.env.PUBLIC_PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* --------------- Import Controller --------------- */

const usersController = require("./controllers/usersController");

/* --------------- End Import Controller --------------- */


/* --------------- Endpoint Define --------------- */

app.post('/users/register', usersController.handleUsersRegister);
app.post('/users/login', usersController.handleUsersLogin);

/* --------------- End Endpoint Define --------------- */


/* --------------- Server Listen --------------- */

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});