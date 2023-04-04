import React from 'react';

const UserBio = (user, isEditing) => {

    return (
        <div>
            <p className="card-subtitle fw-bold">About Me</p>
            {!isEditing && (
                <div>
                    <p className="card-text fw-normal">{user.bio}</p>
                </div>
            )}
            {isEditing && (
                <div>
                    <textarea className="form-control mt-3" id="bio" rows="3"
                              placeholder={user.bio}>
                    </textarea>
                </div>
            )}
        </div>
    );
};

export default UserBio;