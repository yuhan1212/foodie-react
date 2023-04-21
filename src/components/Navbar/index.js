import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { logout } from '../../reducers/user-reducer';
import { logoutThunk } from '../../services/user-thunks';

const Navbar = () => {
    const currentUser = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutThunk());
        dispatch(logout());
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink
                    to="/home"
                    className="nav-link"
                    activeclassname="active"
                    style={{ fontSize: '24px', padding: '10px' }}>
                  <span className="navbar-brand" href="#">
                    <i className="bi bi-egg-fried"></i> Foodie
                  </span>
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
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
                        <NavLink to="/aboutus" className="nav-link" data-activeclassname="active">
                            About us
                        </NavLink>
                    </ul>
                    {currentUser._id == null ? (
                        <div style={{ display: 'flex' }}>
                            <span className="navbar-text me-3">
                                <NavLink to="/login" className="nav-link" activeclassname="active">
                                    Login
                                </NavLink>
                            </span>
                            <span className="navbar-text">
                                <NavLink to="/register" className="nav-link" activeclassname="active">
                                    Register
                                </NavLink>
                            </span>
                        </div>
                    ) : (
                        <div>
                            <span className="navbar-text me-3">Hi {currentUser.username}!</span>
                            <button onClick={handleLogout} className="btn btn-outline-dark rounded-pill">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;