import React, {useState} from 'react';
import profilePic from './profile-image.jpeg';
import UserBio from "./user-bio";
import UserInfo from "./user-info";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCard = () => {

    const user = {
        "_id": "123", "name": "CS5610 Foodie",
        "email": "foodie-admin@gmail.com", "password": "foodieadminpassword",
        "bio": "This is where users put their self-introduction."
    };

    const [isEditing, setIsEditing] = useState(false);

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
                    <button onClick={() => setIsEditing(false)}
                            className="float-end rounded-pill btn btn-light">
                        Save
                    </button>
                )}
                <br/>
                {UserBio(user, isEditing)}
            </div>
            {UserInfo(user, isEditing)}
        </div>
    );
};

export default UserCard;