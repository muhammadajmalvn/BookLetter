const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const generateToken = (id) => {
    console.log(process.env.JWT_SECRET_KEY,'keyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "6h"
    })
}

module.exports = generateToken