import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {autoLoginThunk} from "../../services/user-thunks";
import {useToast} from "@chakra-ui/react";

const BaseFrame = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const toast = useToast();
    useEffect(() => {
        dispatch(autoLoginThunk());
    }, []);

    useEffect(() => {
        if (user.status === "auto login rejected") {
            toast({
                title: "Auto login failed",
                description: "Please login again",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }

    }, [user.status]);

    return (
        <div className="container-fluid">
        {children}
        </div>
    )
}

export default BaseFrame;