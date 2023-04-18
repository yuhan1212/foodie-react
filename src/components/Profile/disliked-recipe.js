// public details
import { Heading, UnorderedList } from "@chakra-ui/react";
import DislikedRecipeItem from "./disliked-recipe-item";
import {useDispatch, useSelector} from "react-redux";
import {findDislikesByUserIdThunk} from "../../services/dislike-thunks";
import React, {useEffect} from "react";


const DislikedRecipe = ({user}) => {
    let {dislikes, loading} = useSelector(
        state => state.dislikeData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDislikesByUserIdThunk(user._id))
    }, [])
    console.log('dislikes', dislikes)
    return (
        <>
            <Heading as="h1" size="xl">
                Disliked Recipe
            </Heading>
            <UnorderedList mt={8} pl={0} listStyleType="none">
                    {
                        loading &&
                        <li className="list-group-item">
                            Loading...
                        </li>
                    }

                    {dislikes && dislikes.map((dislike) => (
                        <DislikedRecipeItem
                            key={dislike._id}
                            dislike={dislike}
                        />
                    ))}


            </UnorderedList>
        </>
    );
};

export default DislikedRecipe;