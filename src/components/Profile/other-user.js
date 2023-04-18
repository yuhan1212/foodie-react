import React from 'react';
import profilePic from './profile-image.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const OtherUser = ({user}) => {

    return (
        <div className="card mx-5">
            <img className="card-img-top" src={profilePic} alt="Profile"/>
            <div className="card-body">
                <p className="card-subtitle fw-bold">About Me</p>
                <p className="card-text fw-normal">{user.bio ? user.bio: 'This user doesn\'t have a bio.'}</p>
                <p className="card-subtitle fw-bold">E-mail</p>
                <p className="card-text fw-normal">{user.email}</p>
            </div>
        </div>
    );
};

export default OtherUser;