import {useSelector} from "react-redux";
import {Container, useToast} from "@chakra-ui/react";
import LoggedIn from "../StatusCards/LoggedIn";
import RegisterForm from "./RegisterForm";
import {userRegister} from "../../services/user-service";
import {useNavigate} from "react-router";
import {useState} from "react";

const Register = () => {
    const user = useSelector(state => state.user);
    const toast = useToast();
    const navigate = useNavigate();

    const [selectedRoles, setSelectedRoles] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const password2 = form.password2.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const roles = selectedRoles.map(role => role.value);

        if (password !== password2) {
            toast({
                title: 'Oops!',
                description: "Passwords don't match",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } else {
            await userRegister({firstName, lastName, email, password, roles});
            toast({
                title: 'Success!',
                description: "You have successfully registered",
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            navigate('/login');
        }
    }

    return (
        <Container>
            {
                user.email === "" ? (
                        <RegisterForm
                            handleSubmit={handleSubmit}
                            submitting={false}
                            selectedRoles={selectedRoles}
                            setSelectedRoles={setSelectedRoles}
                        />) :
                    <LoggedIn/>
            }
        </Container>
    );
}

export default Register;