/*eslint-disable*/
// @ts-nocheck
import React from 'react';
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async(e)=>{
      e.preventDefault();
    try {
        const res = await fetch("http://localhost:3900/login",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({username,password})
        });
        const data = await res.json();
        console.log(data);
        if(res.ok){
            localStorage.setItem("token",data.token);
            alert("Login Successfull");
            navigate("/employee")
        }else{
            alert(data.message);
        }
      }catch{
        alert("Sever Error");
      }
    }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{width:"350px"}}>
         <h2 className="text-center mb-4">Login</h2>
         <form onSubmit={handleLogin}>
            <label className="form-label"></label>
            <input type="text" className="form-control" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} required/>
            <label className="form-label"></label>
            <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required/><br/>
            <button type="submit" className="btn btn-primary w-100">Login</button>
         </form>
      </div>
    </div>
  )
}

export default Login