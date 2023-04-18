import React, {useEffect, useState} from 'react';
import {useParams, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import * as service from "../../services/user-service";
import UserCard from "./user-card";
import UserList from "./user-list";
import SavedRecipe from "./saved-recipe";
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const {uid} = useParams();
    const currentUser = useSelector(state => state.user);
    console.log("currentUser", currentUser);
    const [profile, setProfile] = useState({})
    useEffect(() => {
        if (uid) {
            service.findUserById(uid)
                .then((profile) => {
                    setProfile(profile)
                })
        }
    }, [uid]);
    console.log('profile', profile);
    // console.log('username', profile.username);

    const isSelf = !uid;
    const isAdmin = currentUser.role === "ADMIN";
    const isUser = currentUser.role === "USER";
    const isManager = currentUser.role === "MANAGER";

    return (
        <>
            {currentUser.email === '' && !uid &&
                // Current user is a guest, direct to login page
                <Navigate to="/login" replace={true} />
            }
            {isSelf &&
                // Current user is checking personal profile
                <Navigate to="/profile" replace={true} />
            }
            {(currentUser !== '' || uid) &&
                // Logged in user or guest trying to view other user's profile, show profile
                <div>
                    <img src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200__340.jpg" alt="Banner" style={{width: "100%"}}/>
                    <h1 className="d-none d-sm-none d-md-block"
                        style={{marginTop: "-60px", marginLeft: "520px"}}>
                            {profile.username}
                    </h1>
                    <div className="row">
                        <div className="col-3" style={{width: "500px", marginTop: "-15%"}}>
                            <UserCard user={profile} isSelf={isSelf}/>
                        </div>
                        <div className="col m-3">
                            {isManager && !uid && <UserList targetRole="ADMIN"/>}
                            {isAdmin && !uid && <UserList targetRole="USER"/>}
                            {isUser && !uid && <SavedRecipe user={currentUser}/>}
                            {uid && <SavedRecipe user={{_id: uid}}/>}
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Profile;