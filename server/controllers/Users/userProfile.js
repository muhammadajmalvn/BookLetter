const userSchema = require('../../models/Users/userSchema')

exports.viewProfile = (req, res) => {
    try {
        console.log(req.query.id, "UserrrrrrrrrrrIdddddddddddddddd");
        let userId = req.query.id;
        userSchema.findOne({ id: userId }).then((userData) => {
            console.log(userData, "Dataaaaaaaaaaaa offfffffffffff userrrr");
            res.json(userData);
        })
    } catch(err){
        console.log(err,"Error in fetching user data");
    }
}