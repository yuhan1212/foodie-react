import {useDispatch, useSelector} from "react-redux";
import {Container, useToast} from "@chakra-ui/react";
import LoggedIn from "../StatusCards/LoggedIn";
import RegisterForm from "./RegisterForm";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {registerThunk} from "../../services/user-thunks";
import {statusReset} from "../../reducers/user-reducer";

const Register = () => {
    const user = useSelector(state => state.user);
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [selectedRoles, setSelectedRoles] = useState([]);

    useEffect(() => {
        if (user?.status === "register rejected") {
            toast({
                title: 'Register rejected!',
                description: `Error: ${user?.error?.message}, please try again or contact us`,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            dispatch(statusReset());
        }

        if (user?.status === "register fulfilled") {
            toast({
                title: 'Register fulfilled!',
                description: "You have successfully registered",
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            navigate('/login');
            dispatch(statusReset());
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const username = form.username.value;
        const phone = form.phone.value;
        const address = {
            street: form.street.value,
            city: form.city.value,
            state: form.state.value,
            zip: form.zip.value,
        }
        const password = form.password.value;
        const password2 = form.password2.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        // const roles = selectedRoles.map(role => role.value);

        // if (roles.length === 0) {
        //     toast({
        //         title: 'Oops!',
        //         description: "Please select at least one role",
        //         status: 'error',
        //         duration: 5000,
        //         isClosable: true,
        //     });
        //     return;
        // }

        if (password !== password2) {
            toast({
                title: 'Oops!',
                description: "Passwords don't match",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } else {
            dispatch(registerThunk({
                firstName,
                lastName,
                email,
                password,
                username,
                phone,
                address,
                }));
        }
    }

    return (
        <Container>
            {
                user.email === "" ? (
                        <RegisterForm
                            handleSubmit={handleSubmit}
                            submitting={user.loading || false}
                            selectedRoles={selectedRoles}
                            setSelectedRoles={setSelectedRoles}
                        />) :
                    <LoggedIn/>
            }
        </Container>
    );
}

export default Register;