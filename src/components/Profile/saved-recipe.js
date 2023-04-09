// public details
import { Heading, UnorderedList } from "@chakra-ui/react";
import SavedRecipeItem from "./saved-recipe-item";
import {useDispatch, useSelector} from "react-redux";
import {findFavoritesByUserIdThunk} from "../../services/favorite-thunks";
import React, {useEffect} from "react";


const SavedRecipe = ({user}) => {
    const {favorites, loading} = useSelector(
        state => state.favoritesData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFavoritesByUserIdThunk(user._id))
        console.log("in saved recipe useEffect")
        console.log(favorites)
    }, [])
    console.log("in saved recipe")
    console.log(favorites)
    return (
        <>
            <Heading as="h1" size="xl">
                Favorite Recipe
            </Heading>
            <UnorderedList mt={8} pl={0} listStyleType="none">
                    {
                        loading &&
                        <li className="list-group-item">
                            Loading...
                        </li>
                    }

                    {favorites && favorites.map((favorite) => (
                        <SavedRecipeItem
                            key={favorite._id}
                            saved_recipe={favorite}
                        />
                    ))}


            </UnorderedList>
        </>
    );
};

export default SavedRecipe;