import UserCard from "./user-card";
import UserList from "./user-list";
import SavedRecipe from "./saved-recipe";
import {useParams, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";

const Profile = () => {
    const currentUser = useSelector(state => state.user);
    // const user = {
    //     "_id": "643741149b0ce4bf19681e8b", "email": "foodieadmin@gmail.com", "password": "foodieadminpassword",
    //     "firstName": "John", "lastName": "Bright", "username": "Foodie Admin",
    //     "phone": "123456789", "address": {"street": "602 White Street", "city": "Sunnyvale", "state": "CA", "zip": "95051"},
    //     "role": "ADMIN", "bio": "This is where users put their self-introduction."
    // };

    // const user = {
    //     "_id": "643214d9310aaac5adc27d78", "email": "foodieadmin@gmail.com", "password": "foodieadminpassword",
    //     "firstName": "John", "lastName": "Bright", "username": "john_bright",
    //     "phone": "123456789", "address": {"street": "602 White Street", "city": "Sunnyvale", "state": "CA", "zip": "95051"},
    //     "role": "USER", "bio": "This is where users put their self-introduction."
    // };

    const {uid} = useParams();
    const isAdmin = currentUser && currentUser.role === "ADMIN";
    const isUser = currentUser && currentUser.role === "USER";
    const isManager = currentUser && currentUser.role === "MANAGER";

    const isAdminForCurrentUser = currentUser && currentUser.roles?.includes("ADMIN");
    const isUserForCurrentUser = currentUser && currentUser.roles?.includes("USER");

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
                            {uid && <SavedRecipe user={{_id: uid}}/>}
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Profile;