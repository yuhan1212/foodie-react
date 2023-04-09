import {Container, useToast} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import LoginForm from "./LoginForm";
import LoggedIn from "../StatusCards/LoggedIn";
import {loginThunk} from "../../services/user-thunks";
import {useEffect} from "react";
import {statusReset} from "../../reducers/user-reducer";

const Login = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        if (user?.status === "login rejected") {
            toast({
                title: 'Login rejected!',
                description: 'Invalid email or password',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            dispatch(statusReset());
        }
    }, [user]);

    const handleLogin = async (email, password) => {
        try {
            dispatch(loginThunk({email, password}));
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email, password);
    }

    return (
        <Container
            className="login">
            {user.email === "" ? (
                <LoginForm
                    handleSubmit={handleSubmit}
                    submitting={user.loading || false}
                />
            ): (
                <LoggedIn />
            )}
        </Container>
    )
}

export default Login;