const { create,getUserByEmail} = require("./signup");

const {genSaltSync,hashSync, compareSync} = require('bcrypt');


module.exports = {
    createUser :(req,res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.userPassword = hashSync(body.userPassword,salt)
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection Error"
                });
            }
            return res.status(200).json({
                status:"S",
                message:"SignUp Successfully"
            });
        });
    }
}