import React from 'react';

const UserInfo = (user, isEditing) => {

    return (
        <div>
            {!isEditing && (
                <div className="card-body">
                    <p className="card-subtitle fw-bold">E-mail</p>
                    <p className="card-text fw-normal">{user.email}</p>
                    <p className="card-subtitle fw-bold">User Name</p>
                    <p className="card-text fw-normal">{user.name}</p>
                    <p className="card-subtitle fw-bold">Password</p>
                    <p className="card-text fw-normal">{user.password}</p>
                </div>
            )}
            {isEditing && (
                <div className="card-body">
                    <p className="card-subtitle fw-bold">E-mail</p>
                    <input type="email" className="form-control" id="email" placeholder={user.email} />
                    <p className="card-subtitle fw-bold mt-3">User Name</p>
                    <input type="text" className="form-control" id="name"
                           placeholder={user.name} />
                    <p className="card-subtitle fw-bold mt-3">Password</p>
                    <input type="password" className="form-control" id="password"
                           placeholder={user.password} />
                </div>
            )}
        </div>
    );
};

export default UserInfo;