import { ListItem, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {removeFavoriteThunk} from "../../services/favorite-thunks";

const SavedRecipeItem = ({ favorite }) => {
    const dispatch = useDispatch();
    const removeFavoriteHandler = (favorite) => {
        dispatch(removeFavoriteThunk(favorite.recipeId, favorite.userId));
    }
    console.log("in saved recipe item");
    console.log(favorite);
    return (
        <ListItem mt={3}>
            <Flex alignItems="center">
                <Image
                    width={70}
                    borderRadius="md"
                    src={favorite.recipeImg}
                    alt={favorite.recipeName}
                    mr={3}
                />
                <Text fontWeight="bold">{favorite.recipeName}</Text>
                <Flex flex={1} justifyContent="flex-end">
                    <IconButton
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