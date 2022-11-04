const { users } = require("../models");

class usersRepository {


    /* --------------- Handle Get User By Email --------------- */
    
    static async getUserByEmail({ email }) {

        const getUserByEmail = await users.findOne({
            where: { email }
        });

        return getUserByEmail;
    };
    
    /* --------------- End Handle Get User By Email --------------- */


    /* --------------- Handle Users Register --------------- */

    static async handleUsersRegister({ name, email, password, phoneNumber, dateOfBirth }) {
        
        const registedUser = await users.create({
            name,
            email,
            password,
            phoneNumber,
            dateOfBirth
        });

        return registedUser;
    };

    /* --------------- End Handle Users Register --------------- */

};

module.exports = usersRepository;