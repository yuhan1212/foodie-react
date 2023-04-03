// only admin can see this component
import React from "react";
import UserListItem from "./user-list-item";
import {Container, Heading, UnorderedList} from "@chakra-ui/react";

const users = [{_id: 1, userName: 'Ann', password: '123', email: 'ann@gmail.com', role: 'ADMIN'},
    {_id: 2, userName: 'Bee', password: '123', email: 'bee@gmail.com', role: 'MEMBER'},
    {_id: 3, userName: 'Coo', password: '123', email: 'coo@gmail.com', role: 'MEMBER'}]

const UserList = () => {
    return (
        <Container>
            <Heading as="h1" size="xl">Foodie Users</Heading>
            <UnorderedList mt={8} listStyleType="none">

                {users.map(user => <UserListItem
                    key={user._id}
                    user={user}/>)}
            </UnorderedList>
        </Container>
    )
};
export default UserList;