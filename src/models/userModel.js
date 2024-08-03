import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose. Schema({
    username:{type: String,
             require: [true, "please provide a username"],
             unique: true
    }, 
    email:{type: String,
        require: [true, "please provide an email"],
        unique: true
}, 
    password:{type: String,
    require: [true, "please provide an email"],
    
}, 
    isVerified: {
    type:Boolean,
    default: false,
},
    isAdmin: {
    type:Boolean,
    default: false,
},
    forgotPasswordToken:String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

})

const User = mongoose. models .user  ||mongoose.model ("user", userSchema)

export default User;