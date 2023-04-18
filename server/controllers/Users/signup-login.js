const userSchema = require('../../models/Users/userSchema')
const bcrypt = require('bcryptjs')
const generateToken = require('../../utils/generateToken')


//SIGNUP POST CONTROLLER
exports.signupPost = async (req, res) => {
    try {
        let details = {
            firstName, lastName, email, phone, password
        } = req.body

        details.password = await bcrypt.hash(req.body.password, 10)

        userSchema.findOne({ email: details.email }).then((userData) => {
            if (userData) {
                console.log("user already exists");
                res.status(400).json("User Already Exists")
            } else {
                userSchema.create(details).then((result) => {
                    let details = {
                        firstName: result.firstName,
                        lastName: result.lastName,
                        email: result.email,
                        token: generateToken(result.id)
                    }
                    res.status(201).json(details)
                    console.log(result);
                }).catch((err) => {
                    res.status(400)
                    console.log("Error", err);
                })
            }
        })
    } catch (error) {
        res.json(error.message)
    }
}


//LOGIN POST CONTROLLER
exports.loginPost = (req, res) => {
    try {
        userSchema.findOne({ email: req.body.email }).then((userData) => {
            if (userData) {
                if (userData.status) {
                    bcrypt.compare(req.body.password, userData.password, function (err, response) {
                        if (response) {
                            let details = {
                                id: userData.id,
                                firstName: userData.firstName,
                                lastName: userData.lastName,
                                email: userData.email,
                                phone: userData.phone,
                                token: generateToken(userData.id),
                                photo: userData.photo,
                                address: userData.address
                            }
                            res.status(200).json(details)
                        } else {
                            res.status(401).json("Incorrect Password")
                        }
                    })
                } else {
                    res.status(401).json("User is Blocked")
                }
            } else {
                res.status(400).json("User Does Not Exist")
            }
        })
    } catch (err) {
        console.log("Error: " + err);
    }
}

exports.otpLoginPost = (req, res) => {
    try {
        userSchema.findOne({ phone: req.body.phone }).then((userData) => {
            if (userData) {
                if (userData.status) {

                    const { id, firstName, lastName, email, status, phone, photo } = userData

                    const result = {
                        id, 
                        firstName,
                        lastName,
                        email,
                        phone,
                        photo,
                        status,
                        token: generateToken(id)
                    }
                    console.log(result, 'result otp');

                    res.status(200).json(result)
                } else {
                    res.json(400).json("Account suspended Temporarily")
                }
            } else {
                res.status(400).json("phone number not registred")
            }
        })
            .catch((error) => {
                res.json(error)
            })
    } catch (error) {

    }
}