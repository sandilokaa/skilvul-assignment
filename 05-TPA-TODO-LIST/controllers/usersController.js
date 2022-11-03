const usersService = require("../services/usersService");


/* --------------- Handle Users Register --------------- */

const handleUsersRegister = async(req, res) => {

    const { name, email, password, phoneNumber, dateOfBirth } = req.body;

    const { status, status_code, message, data} = await usersService.handleUsersRegister({
        name,
        email,
        password,
        phoneNumber,
        dateOfBirth
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* --------------- End Handle Users Register --------------- */


/* --------------- Handle Users Login --------------- */

const handleUsersLogin = async(req, res) => {

    const { email, password } = req.body;

    const {status, status_code, message, data} = await usersService.handleUsersLogin({
        email,
        password
    });

    res.status(status_code).send({
        status : status,
        message: message,
        data : data,
    });

};

/* --------------- End Handle Users Login --------------- */


module.exports = { handleUsersRegister, handleUsersLogin };