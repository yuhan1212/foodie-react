import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <nav className="navbar bg-body-tertiary">

                <div className="container-fluid">
                    {/*logo*/}
                    <a className="navbar-brand" href="#">
                        <i className="bi bi-egg-fried"></i> Foodie</a>

                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/home" className="nav-link" data-activeclassname="active">
                            Home
                        </NavLink>
                    </div>
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/Profile" className="nav-link" data-activeclassname="active">
                            Profile
                        </NavLink>
                    </div>
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/others" className="nav-link" data-activeclassname="active">
                            Others
                        </NavLink>
                    </div>
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/Aboutus" className="nav-link" data-activeclassname="active">
                            About us
                        </NavLink>
                    </div>
                    <div className="navbar-nav me-auto mb-2 mb-lg-0 float-end">
                        <NavLink to="/login" className="nav-link" data-activeclassname="active">
                            Login
                        </NavLink>
                    </div>
                    <div className="navbar-nav me-auto mb-2 mb-lg-0 float-end">
                        <NavLink to="/register" className="nav-link" data-activeclassname="active">
                            Register
                        </NavLink>
                    </div>
                </div>
            </nav>
        </nav>
    )
}
export default Navbar;