import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/home" className="nav-link" activeClassName="active" style={{ fontSize: '24px', padding: '10px' }}>
                    <span className="navbar-brand" href="#"><i className="bi bi-egg-fried"></i> Foodie</span>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/home" className="nav-link" data-activeclassname="active">
                            Home
                        </NavLink>
                        <NavLink to="/search" className="nav-link" data-activeclassname="active">
                            Search
                        </NavLink>
                        <NavLink to="/profile" className="nav-link" data-activeclassname="active">
                            Profile
                        </NavLink>
                        <NavLink to="/others" className="nav-link" data-activeclassname="active">
                            Others
                        </NavLink>
                        <NavLink to="/aboutus" className="nav-link" data-activeclassname="active">
                            About us
                        </NavLink>

                    </ul>
                    <span className="navbar-text ms-3 me-3">
                        <NavLink to="/login" className="nav-link" data-activeclassname="active">
                            Login
                        </NavLink>
                    </span>
                    <span className="navbar-text">
                        <NavLink to="/register" className="nav-link" data-activeclassname="active">
                            Register
                        </NavLink>
                    </span>
                </div>

            </div>
        </nav>
    )
}
export default Navbar;