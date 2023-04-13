import React from 'react';

const UserBio = ({isEditing, profile, setProfile}) => {
    const bioChangeHandler = (event) => {
        profile.bio = event.target.value;
        setProfile(profile);
    }

    return (
        <div>
            <p className="card-subtitle fw-bold">About Me</p>
            {!isEditing && (
                <div>
                    <p className="card-text fw-normal">{profile.bio}</p>
                </div>
            )}
            {isEditing && (
                <div>
                    <textarea className="form-control mt-3" id="bio" rows="3"
                              placeholder={profile.bio} onChange={bioChangeHandler}>
                    </textarea>
                </div>
            )}
        </div>
    );
};

export default UserBio;