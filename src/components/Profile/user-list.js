// only admin can see this component
import React, {useEffect} from "react";
import UserListItem from "./user-list-item";
import {Heading, UnorderedList} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../../services/user-thunks";


const UserList = ({targetRole}) => {
    let {users, loading} = useSelector(
        state => state.usersData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    const filteredUsers = users.filter((user) => user.role === targetRole);

    return (
        <>
            <Heading as="h1" size="xl">Foodie Users</Heading>
            <UnorderedList mt={8}  pl={0} listStyleType="none">

                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }

                {filteredUsers && filteredUsers.map(user => <UserListItem
                    key={user._id}
                    user={user}/>)}
            </UnorderedList>
        </>
    )
};
export default UserList;