import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Others = () => {
    // const currentUser = useSelector(state => state.auth.currentUser);

    return(
        <div className='alert alert-light'>
            Please log in first
        </div>

        // <div>
        //     <h2>User Profile</h2>
        //     <p>Name: {currentUser.name}</p>
        //     <p>Email: {currentUser.email}</p>
        //     {/*<p>Username: {currentUser.username}</p>*/}
        // </div>

    )
}
export default Others;