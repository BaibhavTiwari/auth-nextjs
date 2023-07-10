"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {axios} from "axios";



export default function  signup() {
  const [user, setUser] = React.useState({
    email : "",
    password : "",
  
  })
  const onLogin =async()=>{
    
  }

  return (
    <div className ='flex flex-col items-center justify-center min-h-screen py-4'>
      <h1>Login</h1>
      <hr/>
      <label htmlFor="username">Email</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      id="email"
      type="text"
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      placeholder="Email"
      />
      <label htmlFor="username">Password</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      id="password"
      type="password"
      value={user.password}
      onChange={(e) => setUser({...user,password: e.target.value})}
      placeholder="Password"
      />
      <button 
      onClick={onLogin}
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login Here</button>
      <Link href='/signup'>Visit Signup</Link>
    </div>
  )
}