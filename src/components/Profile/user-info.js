import React from 'react';

const UserInfo = ({isEditing, profile, setProfile}) => {
    const firstNameChangeHandler = (event) => {
        profile.firstName = event.target.value;
        setProfile(profile);
    }
    const lastNameChangeHandler = (event) => {
        profile.lastName = event.target.value;
        setProfile(profile);
    }
    const emailChangeHandler = (event) => {
        profile.email = event.target.value;
        setProfile(profile);
    }
    const passwordChangeHandler = (event) => {
        profile.password = event.target.value;
        setProfile(profile);
    }
    const usernameChangeHandler = (event) => {
        profile.username = event.target.value;
        setProfile(profile);
    }
    const phoneChangeHandler = (event) => {
        profile.phone = event.target.value;
        setProfile(profile);
    }
    const streetChangeHandler = (event) => {
        profile.address.street = event.target.value;
        setProfile(profile);
    }
    const cityChangeHandler = (event) => {
        profile.address.city = event.target.value;
        setProfile(profile);
    }
    const stateChangeHandler = (event) => {
        profile.address.state = event.target.value;
        setProfile(profile);
    }
    const zipChangeHandler = (event) => {
        profile.address.zip = event.target.value;
        setProfile(profile);
    }

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
                            <input type="text" className="form-control" id="firstName" placeholder={profile.firstName} onChange={firstNameChangeHandler} />
                        </div>
                        <div className="col">
                            <p className="card-subtitle fw-bold">Last Name</p>
                            <input type="text" className="form-control" id="lastName" placeholder={profile.lastName}  onChange={lastNameChangeHandler}/>
                        </div>
                    </div>
                    <p className="card-subtitle fw-bold">E-mail</p>
                    <input type="email" className="form-control" id="email" placeholder={profile.email} onChange={emailChangeHandler}/>
                    <small className="form-text text-muted">E-mail used for logging into our website.</small>
                    <p className="card-subtitle fw-bold mt-3">Password</p>
                    <input type="password" className="form-control" id="password" placeholder={profile.password} onChange={passwordChangeHandler}/>
                    <p className="card-subtitle fw-bold mt-3">Username</p>
                    <input type="text" className="form-control" id="username" placeholder={profile.username} onChange={usernameChangeHandler}/>
                    <small className="form-text text-muted">Your name displayed to other users.</small>
                    <p className="card-subtitle fw-bold mt-3">Phone</p>
                    <input type="text" className="form-control" id="phone" placeholder={profile.phone} onChange={phoneChangeHandler}/>
                    <p className="card-subtitle fw-bold mt-3">Address</p>
                    <div className="form-row">
                        <label for="street">Street</label>
                        <input type="text" className="form-control" id="street"  placeholder={profile.address.street} onChange={streetChangeHandler}/>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" placeholder={profile.address.city} onChange={cityChangeHandler}/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="state">State</label>
                            <input type="text" className="form-control" id="state" placeholder={profile.address.state} onChange={stateChangeHandler}/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" id="zip" placeholder={profile.address.zip} onChange={zipChangeHandler}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserInfo;