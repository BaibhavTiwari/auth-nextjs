"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";



export default function  signup() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email : "",
    password: "",
  })

  const [buttonDisabled, setButtonDisabled] = React.
    useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin =async()=>{
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login Success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);



  return (
    <div className ='flex flex-col items-center justify-center min-h-screen py-4'>
      <h1 className="text-2xl py-4">{loading ? "Processing" : "Login"}</h1>
      <hr/>
      <label htmlFor="username">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-black"
      id="email"
      type="text"
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      placeholder="Email"
      />
      <label htmlFor="username">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-black"
      id="password"
      type="password"
      value={user.password}
      onChange={(e) => setUser({...user,password: e.target.value})}
      placeholder="Password"
      />
      <button 
      onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-white">Login Here</button>
      <Link href='/signup'>Visit Signup</Link>
    </div>
  )
}