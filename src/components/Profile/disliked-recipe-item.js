import { ListItem, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { FaThumbsDown } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {removeDislikeThunk} from "../../services/dislike-thunks";
import {Link, useParams} from "react-router-dom";
import React from "react";

const DislikedRecipeItem = ({dislike}) => {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const removeDislikeHandler = (dislike) => {
        if (!uid) {
            console.log('removeDislikeHandler', dislike)
            dispatch(removeDislikeThunk(dislike))
        }
    }
    return (
        <ListItem mt={3}>
            <Flex alignItems="center">
                <Link to={`/details/${dislike.recipeId}`}>
                    <Image
                        width={70}
                        borderRadius="md"
                        src={dislike.recipeImg}
                        alt={dislike.recipeName}
                        mr={3}
                    /></Link>
                <Link to={`/details/${dislike.recipeId}`}><Text fontWeight="bold">{dislike.recipeName}</Text></Link>
                <Flex flex={1} justifyContent="flex-end">
                    <IconButton
                        onClick={() => removeDislikeHandler(dislike)}
                        variant="ghost"
                        colorScheme="red"
                        aria-label="Add to favorites"
                        icon={<FaThumbsDown />}
                    />
                </Flex>
            </Flex>
        </ListItem>
    );
};

export default DislikedRecipeItem;