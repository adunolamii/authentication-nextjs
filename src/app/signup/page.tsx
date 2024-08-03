"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function page() {
  const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })
    const [buttonDisabled, setButtonDisabled] = React.
    useState(false)
    const onSignup = async => ()=>{

    }
  return (
    <div>signup page
        <form>
        <input 
            type="email"
            placeholder="email"
            id="email"
            value={user.email}
            onChange={(e)=> setUser({...user,email:e.target.value})}
             />
               <input 
            type="password"
            placeholder="password"
            id="password"
            value={user.password}
            onChange={(e)=> setUser({...user,password:e.target.value})}
             />
            <input 
            type="username"
            placeholder="username"
            id="username"
            value={user.username}
            onChange={(e)=> setUser({...user,username:e.target.value})}
             />
             <button onClick={onSignup}>Signup</button>
        </form>
        <Link href ="/login">Visit Login Page</Link>
    </div>
    
  )
}

export default page