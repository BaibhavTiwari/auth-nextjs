"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {axios} from "axios";
import { setSourceMapRange } from "typescript";
import { userAgent } from "next/server";


export default function  signup() {
  const [user, setUser] = React.useState({
    email : "",
    password : "",
    username : "",
  })
  const onSignup =async()=>{
    
  }

  return (
    <div className ='flex flex-col items-center justify-center min-h-screen py-4'>
      <h1> Signup</h1>
      <hr/>
      <label htmlFor="username">Username</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      id="username"
      type="text"
      value={user.username}
      onChange={(e) => setUser({...user, username: e.target.value})}
      placeholder="username"
      />
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
      onClick={onSignup}
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup Here</button>
      <Link href='/Login'>Visit Login</Link>
    </div>
  )
}