import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
    return (
        <>
            <div className="collapse navbar-collapse d-lg-flex bg-color justify-content-lg-between"
                id="navbarSupportedContent">
                <ul className="navbar-nav d-flex flex-lg-row align-items-left px-3 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/filter" className="nav-link">Product</NavLink>
                    </li>
                </ul>
                <div className="logo d-none d-lg-block">
                    <a href="#">
                        <img src="./image/LOGO.png" alt="" />
                    </a>
                </div>
                <div className="call-box d-flex flex-lg-row d-lg-flex">
                    <a href="#">
                        <div className="header-but mt-2 mt-lg-0">
                            Apply now
                        </div>
                    </a>
                    <NavLink to="/login" className="login">Login</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar