"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function page() {
    const [user, setUser] = React.useState({
        email:"",
        password:"",
     
    })
    const onLogin= async => ()=>{

    }
  return (
    <div>login page
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
         
             <button onClick={onLogin}>Signup</button>
        </form>
        <Link href ="/signup">Visit Signup Page</Link>
    </div>
  )
}

export default page