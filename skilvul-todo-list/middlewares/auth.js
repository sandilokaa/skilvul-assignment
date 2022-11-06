const jwt = require('jsonwebtoken');
const { JWT } = require("../helper/jwtSecurity");
const usersRepository = require('../repositories/usersRepository');

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
        })

    try {
        
        const { email } = jwt.verify(token, JWT.SECRET);

        const getUserByEmail = await usersRepository.getUserByEmail({email});

        req.user = getUserByEmail;

        next();
    }catch(err) {
        return res.status(401).send({
            status: false,
            message:"Sesi telah kadaluarsa, silahkan login kembali",
            data: null,
        });
    } 
};

module.exports ={authenticate};