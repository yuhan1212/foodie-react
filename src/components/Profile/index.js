// profile screen
import {Container} from "@chakra-ui/react";
import UserList from "./user-list";
import SavedRecipe from "./saved-recipe";

const Index = () => {
    // show all elements in the profile page just for debug purpose
    return (
        <Container className="container">
            <UserList />
            <SavedRecipe />
        </Container>
    )
}
export default Index;