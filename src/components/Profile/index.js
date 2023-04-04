// profile screen
import {Container, Grid, GridItem, Image} from "@chakra-ui/react";
import UserList from "./user-list";
import SavedRecipe from "./saved-recipe";

const Index = () => {
    // show all elements in the profile page just for debug purpose
    return (
        <Container maxW='1000px'>
        <Grid
            templateAreas={`"banner banner"
                  "about-me recipe-or-user-list"
                  "info recipe-or-user-list"`}
            h='300px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem pl='2' area={'banner'}>
                <Image src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200__340.jpg"/>
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'about-me'}>
                about-me
            </GridItem>
            <GridItem pl='2' bg='pink.300' area={'info'}>
                info
            </GridItem>
            <GridItem pl='2'  area={'recipe-or-user-list'}>
                <UserList />
                <SavedRecipe />
            </GridItem>
        </Grid>
        </Container>
    )
}
export default Index;