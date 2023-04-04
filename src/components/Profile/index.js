// profile screen
// import {Container, Grid, GridItem, Image} from "@chakra-ui/react";
import UserCard from "./user-card";
import UserList from "./user-list";
import SavedRecipe from "./saved-recipe";
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
    // show all elements in the profile page just for debug purpose
    return (
        <div className="container">
            <img src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200__340.jpg" alt="Banner"/>
            <h1 className="d-none d-sm-none d-md-none d-lg-block"
                style={{marginTop: "-60px", marginLeft: "480px", position: "absolute"}}>
                    User 123
            </h1>
            <div style={{width: "500px", marginTop: "-15%", position: "absolute"}}>
                <UserCard />
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block" style={{marginLeft: "525px"}}>
                <UserList />
                <SavedRecipe />
            </div>
        </div>
    )
}
export default Index;