import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjsn from "bcryptjs";
import { error } from "console";


connect()

export async function POST(request:NextRequest) {
    try {
      const reqbody =   await request.json()
      const {username, email, password} = reqbody

      console.log(reqbody);

    //   CHECK IF USER ALREADY EXISTS
    const user = await User.findOne({email})

    if (user){
        return NextResponse.json({error: "User already exists"}, {status: 404})
    }

    // HASH PASSWORDDDDDDDDD

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash
    (password, salt)      

    const new User = new User({
        username,
        email,
        password: hashedPassword
    })

    const savedUser = await newUser.save()
    console.log(savedUser);

    return NextResponse.json({
            message: "User user created successfully",
            success: true,
            savedUser
        })




    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status:500})
        
    }
    
}