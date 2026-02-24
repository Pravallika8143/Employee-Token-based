/*eslint-disable*/
//@ts-nocheck
import React from 'react'
import{useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"

function EmployeeTable() {
    const [employees,setEmployees] = useState([]);
    const [username,setUsername] = useState("");
    const [salary,setSalary] = useState("");
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const fetchEmployees = async()=>{ 
        try{
        const res = await fetch("http://localhost:3900/emp/employees",{
            headers:{
              Authorization:`Bearer ${token}`
            }
        });
        if (!res.ok) throw new Error("Unauthorized");
        const data = await res.json();
        setEmployees(data.employee);
        console.log(data);
     }catch(err){
        localStorage.removeItem("token");
        navigate("/login");
     }
    }
    useEffect(()=>{
      if (!token) {
      navigate("/login");
      return;
    }
      fetchEmployees()
    },[])
    const handleAdd =async(e)=>{
        e.preventDefault();
        await fetch("http://localhost:3900/emp/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            },
            body: JSON.stringify({username,salary:Number(salary)})
        })
        setUsername(""),
        setSalary(""),
        fetchEmployees()
    }
    const handleDelete = async(id) => {
         await fetch(`http://localhost:3900/emp/employee/${id}`,{
            method:"DELETE",
            headers:{
              Authorization:`Bearer ${token}`
            }
        })
        fetchEmployees();
    }
  return (
    <div className="container mt-4">
      <h2>Employee Management</h2>
      <form onSubmit={handleAdd} className="mb-4">
        <input className="me-2" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input className="me-2" type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Username</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees)&&
            employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.username}</td>
                <td>{emp.salary}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(emp._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable;