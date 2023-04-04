// profile screen
import UserCard from "./user-card";
import UserList from "./user-list";
import SavedRecipe from "./saved-recipe";
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
    // show all elements in the profile page just for debug purpose
    return (
        <div className="container border-start border-end">
            <img src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200__340.jpg" alt="Banner" style={{width: "100%"}}/>
            <h1 className="d-none d-sm-none d-md-block"
                style={{marginTop: "-60px", marginLeft: "480px"}}>
                    User 123
            </h1>
            <div class="row">
                <div className="col-3" style={{width: "500px", marginTop: "-15%"}}>
                    <UserCard />
                </div>
                <div className="col m-3">
                    <UserList />
                    <SavedRecipe />
                </div>
            </div>
        </div>
    )
}
export default Index;