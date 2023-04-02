import {Button, Heading, HStack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {logout} from "../../../reducers/user-reducer";
import {useDispatch} from "react-redux";

const LoggedIn = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <Heading>Hi,</Heading>
            <Text>You have logged in!</Text>
            <HStack>
                <Link to={'/'} >
                    <Button colorScheme="blue" variant="outline">Home</Button>
                </Link>
                <Button
                    onClick={handleLogout}
                    colorScheme="blue"
                    variant="outline">Logout</Button>
            </HStack>
        </>
    )
}

export default LoggedIn;