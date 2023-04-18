import React from 'react';

const UserInfo = ({isEditing, profile, setProfile}) => {

    return (
        <div>
            {!isEditing && (
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col">
                            <p className="card-subtitle fw-bold">First Name</p>
                            <p className="card-text fw-normal">{profile.firstName}</p>
                        </div>
                        <div className="col">
                            <p className="card-subtitle fw-bold">Last Name</p>
                            <p className="card-text fw-normal">{profile.lastName}</p>
                        </div>
                    </div>
                    <p className="card-subtitle fw-bold">E-mail</p>
                    <p className="card-text fw-normal">{profile.email}</p>
                    <p className="card-subtitle fw-bold">Password</p>
                    <p className="card-text fw-normal">********</p>
                    <p className="card-subtitle fw-bold">Username</p>
                    <p className="card-text fw-normal">{profile.username}</p>
                    <p className="card-subtitle fw-bold">Phone</p>
                    <p className="card-text fw-normal">{profile.phone}</p>
                    <p className="card-subtitle fw-bold">Address</p>
                    <p className="card-text fw-normal">{profile.address.street}, {profile.address.city}, {profile.address.state} {profile.address.zip}</p>
                </div>
            )}
            {isEditing && (
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col">
                            <p className="card-subtitle fw-bold">First Name</p>
                            <input type="text" className="form-control" id="firstName" placeholder={profile.firstName} 
                                onChange={(e) => {setProfile({ ...profile, firstName: e.target.value })}}/>
                        </div>
                        <div className="col">
                            <p className="card-subtitle fw-bold">Last Name</p>
                            <input type="text" className="form-control" id="lastName" placeholder={profile.lastName}
                                onChange={(e) => {setProfile({ ...profile, lastName: e.target.value })}}/>
                        </div>
                    </div>
                    <p className="card-subtitle fw-bold">E-mail</p>
                    <input type="email" className="form-control" id="email" placeholder={profile.email} 
                            onChange={(e) => {setProfile({ ...profile, email: e.target.value })}}/>
                    <small className="form-text text-muted">E-mail used for logging into our website.</small>
                    <p className="card-subtitle fw-bold mt-3">Password</p>
                    <input type="password" className="form-control" id="password" placeholder={profile.password}
                            onChange={(e) => {setProfile({ ...profile, password: e.target.value })}}/>
                    <p className="card-subtitle fw-bold mt-3">Username</p>
                    <p className="card-text fw-normal">{profile.username}</p>
                    <small className="form-text text-muted">Your name displayed to other users.</small>
                    <p className="card-subtitle fw-bold mt-3">Phone</p>
                    <input type="text" className="form-control" id="phone" placeholder={profile.phone} 
                            onChange={(e) => {setProfile({ ...profile, phone: e.target.value })}}/>
                    <p className="card-subtitle fw-bold mt-3">Address</p>
                    <div className="form-row">
                        <label htmlFor="street">Street</label>
                        <input type="text" className="form-control" id="street"  placeholder={profile.address.street}
                                onChange={(e) => {setProfile({ ...profile, address: {street: e.target.value, city: profile.address.city, state: profile.address.state, zip: profile.address.zip} })}}/>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" placeholder={profile.address.city}
                                    onChange={(e) => {setProfile({ ...profile, address: {street: profile.address.street, city: e.target.value, state: profile.address.state, zip: profile.address.zip} })}}/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="state">State</label>
                            <input type="text" className="form-control" id="state" placeholder={profile.address.state}
                                    onChange={(e) => {setProfile({ ...profile, address: {street: profile.address.street, city: profile.address.city, state: e.target.value, zip: profile.address.zip} })}}/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" id="zip" placeholder={profile.address.zip}
                                    onChange={(e) => {setProfile({ ...profile, address: {street: profile.address.street, city: profile.address.city, state: profile.address.state, zip: e.target.value} })}}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserInfo;