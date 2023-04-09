import React from 'react';

const UserInfo = ({user, isEditing}) => {

    return (
        <div>
            {!isEditing && (
                <div className="card-body">
                    <div class="row mb-3">
                        <div class="col">
                            <p className="card-subtitle fw-bold">First Name</p>
                            <p className="card-text fw-normal">{user.firstName}</p>
                        </div>
                        <div class="col">
                            <p className="card-subtitle fw-bold">Last Name</p>
                            <p className="card-text fw-normal">{user.lastName}</p>
                        </div>
                    </div>
                    <p className="card-subtitle fw-bold">E-mail</p>
                    <p className="card-text fw-normal">{user.email}</p>
                    <p className="card-subtitle fw-bold">Password</p>
                    <p className="card-text fw-normal">{user.password}</p>
                    <p className="card-subtitle fw-bold">Username</p>
                    <p className="card-text fw-normal">{user.username}</p>
                    <p className="card-subtitle fw-bold">Phone</p>
                    <p className="card-text fw-normal">{user.phone}</p>
                    <p className="card-subtitle fw-bold">Address</p>
                    <p className="card-text fw-normal">{user.address.street}, {user.address.city}, {user.address.state} {user.address.zip}</p>
                </div>
            )}
            {isEditing && (
                <div className="card-body">
                    <div class="row mb-3">
                        <div class="col">
                            <p className="card-subtitle fw-bold">First Name</p>
                            <input type="text" className="form-control" id="firstName" placeholder={user.firstName} />
                        </div>
                        <div class="col">
                            <p className="card-subtitle fw-bold">Last Name</p>
                            <input type="text" className="form-control" id="lastName" placeholder={user.lastName} />
                        </div>
                    </div>
                    <p className="card-subtitle fw-bold">E-mail</p>
                    <input type="email" className="form-control" id="email" placeholder={user.email} />
                    <small className="form-text text-muted">E-mail used for logging into our website.</small>
                    <p className="card-subtitle fw-bold mt-3">Password</p>
                    <input type="password" className="form-control" id="password" placeholder={user.password} />
                    <p className="card-subtitle fw-bold mt-3">Username</p>
                    <input type="text" className="form-control" id="username" placeholder={user.username} />
                    <small className="form-text text-muted">Your name displayed to other users.</small>
                    <p className="card-subtitle fw-bold mt-3">Phone</p>
                    <input type="text" className="form-control" id="phone" placeholder={user.phone} />
                    <p className="card-subtitle fw-bold mt-3">Address</p>
                    <div class="form-row">
                        <label for="street">Street</label>
                        <input type="text" className="form-control" id="street"  placeholder={user.address.street} />
                    </div>
                    <div class="row">
                        <div class="form-group col">
                            <label for="city">City</label>
                            <input type="text" class="form-control" id="city" placeholder={user.address.city} />
                        </div>
                        <div class="form-group col">
                            <label for="state">State</label>
                            <input type="text" class="form-control" id="state" placeholder={user.address.state} />
                        </div>
                        <div class="form-group col">
                            <label for="zip">Zip</label>
                            <input type="text" class="form-control" id="zip" placeholder={user.address.zip} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserInfo;