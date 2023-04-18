import React from 'react';

const UserBio = ({isEditing, profile, setProfile}) => {

    return (
        <div>
            <p className="card-subtitle fw-bold">About Me</p>
            {!isEditing && (
                <div>
                    <p className="card-text fw-normal">{profile.bio ? profile.bio: 'This user doesn\'t have a bio.'}</p>
                </div>
            )}
            {isEditing && (
                <div>
                    <textarea className="form-control mt-3" id="bio" rows="3" placeholder={profile.bio}
                                onChange={(e) => {setProfile({ ...profile, firstName: e.target.value })}}>
                    </textarea>
                </div>
            )}
        </div>
    );
};

export default UserBio;