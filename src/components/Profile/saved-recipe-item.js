import { ListItem, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const SavedRecipeItem = ({ saved_recipe }) => {
    console.log("in saved recipe item");
    console.log(saved_recipe);
    return (
        <ListItem mt={3}>
            <Flex alignItems="center">
                <Image
                    width={70}
                    borderRadius="md"
                    src={saved_recipe.strMealThumb}
                    alt={saved_recipe.strMeal}
                    mr={3}
                />
                <Text fontWeight="bold">{saved_recipe.strMeal}</Text>
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