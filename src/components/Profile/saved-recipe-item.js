import { ListItem, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {removeFavoriteThunk} from "../../services/favorite-thunks";
import {Link, useParams} from "react-router-dom";
import React from "react";

const SavedRecipeItem = ({favorite}) => {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const removeFavoriteHandler = (favorite) => {
        if (!uid) {
            console.log('removeFavoriteHandler', favorite)
            dispatch(removeFavoriteThunk(favorite))
        }
    }
    return (
        <ListItem mt={3}>
            <Flex alignItems="center">
                <Link to={`/details/${favorite.recipeId}`}>
                    <Image
                        width={70}
                        borderRadius="md"
                        src={favorite.recipeImg}
                        alt={favorite.recipeName}
                        mr={3}
                    /></Link>
                <Link to={`/details/${favorite.recipeId}`}><Text fontWeight="bold">{favorite.recipeName}</Text></Link>
                <Flex flex={1} justifyContent="flex-end">
                    <IconButton
                        onClick={() => removeFavoriteHandler(favorite)}
                        variant="ghost"
                        colorScheme="red"
                        aria-label="Add to favorites"
                        icon={<FaHeart />}
                    />
                </Flex>
            </Flex>
        </ListItem>
    );
};

export default SavedRecipeItem;