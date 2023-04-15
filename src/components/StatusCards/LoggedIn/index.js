import {Button, Heading, HStack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {logout} from "../../../reducers/user-reducer";
import {useDispatch, useSelector} from "react-redux";
import s from './LoggedIn.module.css';

const LoggedIn = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <Heading>Hi <span className={s.username}>{user?.username}</span>,</Heading>
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