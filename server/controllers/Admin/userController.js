const userSchema = require('../../models/Users/userSchema')

exports.getUsers = async (req, res) => {
try{
    userSchema.find().then((data)=>{
        console.log(data);
        res.status(200).json(data);
    })
} catch(err) {
    res.status(500).json(err);
    console.log(err);
}
}

exports.blockUser = async(req, res) =>{
    try{
        const user = userSchema.findOne({_id:req.query.id})
        await userSchema.updateOne({_id:req.query.id},{$set:{status:!result.status}})
        const data = await userSchema.find()
        res.status(200).json(data)
    } catch(err){
        console.log(err);
        res.status(500).json({message:'Internal Server Error'})
    }
}