import React from 'react'
import { useNavigate , Link } from "react-router-dom"
function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const handleLogout = () => {
        localStorage.clear()
        navigate("/login");
    }
  return (
    <nav className="navbar navbar-dark bg-dark py-3 shadow-sm">
        <h2 className="navbar-brand fw-bold">Employee</h2>
        <div className="ms-auto d-flex gap-2">
            {
                token? (
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                ) :(
                    <Link to="/login" className="btn btn-outline-light btn-l">Login</Link>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar