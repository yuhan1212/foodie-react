import { ListItem, Flex, Box, Text, IconButton } from "@chakra-ui/react";
import { BsPersonBadge } from "react-icons/bs";
import { FaTrash, FaUserCog } from "react-icons/fa";

const UserListItem = ({ user }) => {
    return (
        <ListItem mt={3}>
            <Flex alignItems="center">
                <Box as="span" textAlign="center" mr={3} width={70} display="flex"
                     flexDirection="column" mr={3} alignItems="center">
                    {user.role === "MEMBER" && (
                        <>
                            <BsPersonBadge/>
                            <Text fontSize="xs" mt={1}>
                                MEMBER
                            </Text>
                        </>
                    )}
                    {user.role === "ADMIN" && (
                        <>
                            <FaUserCog/>
                            <Text fontSize="xs" mt={1}>
                                ADMIN
                            </Text>
                        </>
                    )}
                </Box>
                <Box flex={1}>
                    <Text fontWeight="bold">{user.userName}</Text>
                    <Text fontSize="sm" color="gray.600">
                        {user.email}
                    </Text>
                </Box>
                <Box textAlign="center" my="auto">
                    <IconButton
                        variant="ghost"
                        colorScheme="red"
                        aria-label="Delete user"
                        icon={<FaTrash />}
                    />
                </Box>
            </Flex>
        </ListItem>
    );
};

export default UserListItem;
