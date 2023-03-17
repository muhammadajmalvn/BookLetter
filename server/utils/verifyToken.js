const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()


const protect = asyncHandler(async (req, res, next) => {
    console.log(req.query, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            console.log(token, "Tokennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
            console.log(process.env.JWT_SECRET_KEY, "key checkingggggggggggggggggggggggg");
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            console.log("Decoded token:", decoded);
            next();
        } catch (error) {
            res.status(401).json("Invalid token")
            console.log("Error:", error);
        }
    } else {
        res.status(401).json("Token not found")
    }
})

module.exports = { protect }