import crypto from 'crypto'
import User from "../models/User.js"
import { registerEmail } from "../helper/email.js"


//this is to create a new user
//http://192.168.100.7:4000/api/user/new
const newUser = async(req,res)=>{

    const {email} =req.body
    const isUser = await User.findOne({email})
    
    if(isUser){
        return res.status(400).json({msg:'User already Registered'})
    }

    try {

        const user = new User(req.body)
        user.token = crypto.randomBytes(24).toString('hex') + user.email
        registerEmail('antdev1987@gmail.com')
        await user.save()

        res.json({msg:'User Created succesfully'})
        
    } catch (error) {
        console.log(error)
    }

}



export{
    newUser
}