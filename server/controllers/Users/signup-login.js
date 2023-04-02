const userSchema = require('../../models/Users/userSchema')
const bcrypt = require('bcryptjs')
const generateToken = require('../../utils/generateToken')


//SIGNUP POST CONTROLLER
exports.signupPost = async (req, res) => {
    console.log(req.body, 'server posttttttttttttt');
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
    console.log(req.body);
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
                            console.log(details, 'details of user');
                            res.status(200).json(details)
                        } else {
                            res.status(401).json("Incorrect Password")
                            console.log("Incorrect Password");
                        }
                    })
                } else {
                    res.status(401).json("User is Blocked")
                    console.log("User is Blocked");
                }
            } else {
                res.status(400).json("User Does Not Exist")
                console.log("User Does Not Exist");
            }
        })
    } catch (err) {
        console.log("Error: " + err);
    }
}