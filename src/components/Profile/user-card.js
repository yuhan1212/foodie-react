import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk } from '../../services/user-thunks';
import { updateProfile } from '../../reducers/user-reducer';
import profilePic from './profile-image.jpeg';
import UserBio from "./user-bio";
import UserInfo from "./user-info";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCard = ({user}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(user._id))
    }, []);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        phone: user.phone,
        address: {street: user.address.street, city: user.address.city, state: user.address.state, zip: user.address.zip}, 
        bio: user.bio}
    );
    const saveProfile = () => {
        dispatch(updateProfile(profile));
        setIsEditing(false);
    };
    console.log(profile);

    return (
        <div className="card mx-5">
            <img className="card-img-top" src={profilePic} alt="Profile"/>
            <div className="card-body">
                {!isEditing && (
                    <button onClick={() => setIsEditing(true)}
                            className="float-end rounded-pill btn btn-light">
                        Edit
                    </button>
                )}
                {isEditing && (
                    <button onClick={() => saveProfile}
                            className="float-end rounded-pill btn btn-light">
                        Save
                    </button>
                )}
                <br/>
                <UserBio isEditing={isEditing} profile={profile} setProfile={setProfile} />
            </div>
            <UserInfo isEditing={isEditing} profile={profile} setProfile={setProfile} />
        </div>
    );
};

export default UserCard;