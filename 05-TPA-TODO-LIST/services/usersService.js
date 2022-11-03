const usersRepository = require("../repositories/usersRepository");
const bcrypt = require("bcrypt");

require('dotenv').config();

const jwt = require("jsonwebtoken");
const { JWT } = require("../helper/jwtSecurity");

const SALT_ROUND = 10;

class usersService {

    /* --------------- Handle Users Register --------------- */

    static async handleUsersRegister({ name, email, password, phoneNumber, dateOfBirth }) {

        try {

            // ------------------------- Payload Validation ------------------------- //

            if (!name) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Nama wajib diisi!",
                    data: {
                        registered_user: null,
                    },
                };
            }

            if (!email) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Email wajib diisi!",
                    data: {
                        registered_user: null,
                    },
                };
            }

            if (!password) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password wajib diisi!",
                    data: {
                        registered_user: null,
                    },
                };
            } else if (password.length < 8) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password minimal 8 karakter!",
                    data: {
                        registered_user: null,
                    },
                };
            }

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
                const registeredUser = await usersRepository.handleUsersRegister({
                    name,
                    email,
                    password: hashedPassword,
                    phoneNumber,
                    dateOfBirth
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
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    registered_user: null,
                },
            };
        }
    };

    /* --------------- End Handle Users Register --------------- */


    /* --------------- Handle Users Login --------------- */

    static async handleUsersLogin({ email, password }) {

        try {

            // ------------------------- Payload Validation ------------------------- //

            if (!email) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Email wajib diisi",
                    data: {
                        login_user: null,
                    },
                };
            }

            if (!password) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password wajib diisi",
                    data: {
                        login_user: null,
                    },
                };
            } else if (password.length < 8) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password minimal 8 karakter",
                    data: {
                        login_user: null,
                    },
                };
            }

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

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    users_login: null,
                },
            };
        }

    };

    /* --------------- End Handle Users Login --------------- */

};

module.exports = usersService;