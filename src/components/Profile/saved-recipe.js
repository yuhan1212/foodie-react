// public details
import { Heading, UnorderedList } from "@chakra-ui/react";
import SavedRecipeItem from "./saved-recipe-item";
import {useDispatch, useSelector} from "react-redux";
import {findFavoritesByUserIdThunk} from "../../services/favorite-thunks";
import React, {useEffect, useState} from "react";


const SavedRecipe = ({user}) => {
    let {favorites, loading} = useSelector(
        state => state.favoritesData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFavoritesByUserIdThunk(user._id))
    }, [])

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
                            favorite={favorite}
                        />
                    ))}


            </UnorderedList>
        </>
    );
};

export default SavedRecipe;