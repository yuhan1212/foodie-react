import {Container} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import LoginForm from "./LoginForm";
import {userLogin} from "../../services/user-service";
import {login, logout} from "../../reducers/user-reducer";
import LoggedIn from "../StatusCards/LoggedIn";
import {useNavigate} from "react-router";

const Login = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        try {
            const userData = await userLogin({email, password});
            dispatch(login(userData));
            navigate('/');
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
                    error={null}
                    submitting={false}
                />
            ): (
                <LoggedIn />
            )}
        </Container>
    )
}

export default Login;