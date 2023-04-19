import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from '../../services/user-thunks';
import profilePic from './profile-image.jpeg';
import UserBio from "./user-bio";
import UserInfo from "./user-info";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCard = () => {
    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [profile, setProfile] = useState(currentUser);
    const saveProfile = async () => {
        await dispatch(updateUserThunk(profile));
        setIsEditing(false);
    };
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="card mx-5">
            <img className="card-img-top" src="../../../images/cake.jpg" alt="Profile"
                 style={{ width: 400, height: 400 }}/>
            <div className="card-body">
                {!isEditing && (
                    <button className="float-end rounded-pill btn btn-light"
                            onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                )}
                {isEditing && (
                    <button className="float-end rounded-pill btn btn-light"
                            onClick={(e) => {
                                e.preventDefault()
                                saveProfile(profile)
                            }}>
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