import UserCard from "./user-card";
import UserList from "./user-list";
import SavedRecipe from "./saved-recipe";
import {useParams, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";
import * as service from "../../services/user-service";
import React, {useEffect, useState} from 'react';
import DislikedRecipe from "./disliked-recipe";


const Profile = () => {
    const currentUser = useSelector(state => state.user);
    const [profile, setProfile] = useState({})
    const {uid} = useParams();
    useEffect(() => {
        if(uid) {
            service.findUserById(uid)
                .then((profile) => {
                    setProfile(profile)
                })
        }
    }, [uid])
    console.log('profile', profile)

    const isAdmin = currentUser && currentUser.role === "ADMIN";
    const isUser = currentUser && currentUser.role === "USER";
    const isManager = currentUser && currentUser.role === "MANAGER";

    // show all elements in the profile page just for debug purpose
    return (
        <>
            {currentUser && currentUser._id === uid &&
            // Current user is checking personal profile
            <Navigate to="/profile" replace={true} />
            }

            {!currentUser && !uid &&
                // Current user is a guest, direct to login page
                <Navigate to="/login" replace={true} />
            }
            {(currentUser || uid) &&
                // Logged in user, show profile
                <div>
                    <img src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200__340.jpg" alt="Banner" style={{width: "100%"}}/>
                    <h1 className="d-none d-sm-none d-md-block"
                        style={{marginTop: "-60px", marginLeft: "520px"}}>
                            {currentUser && currentUser.username}
                    </h1>
                    <div className="row">
                        <div className="col-3" style={{width: "500px", marginTop: "-15%"}}>
                            <UserCard user={currentUser} />
                        </div>
                        <div className="col m-3">
                            {isManager && !uid && <UserList targetRole="ADMIN"/>}
                            {isAdmin && !uid && <UserList targetRole="USER"/>}
                            {isUser && !uid && <SavedRecipe user={currentUser}/>}
                            {isUser && !uid && <DislikedRecipe user={currentUser}/>}
                            {uid && <SavedRecipe user={{_id: uid}}/>}
                            {uid && <DislikedRecipe user={{_id: uid}}/>}
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Profile;