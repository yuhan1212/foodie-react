import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {autoLoginThunk} from "../../services/user-thunks";

const BaseFrame = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(autoLoginThunk());
    }, []);

    return (
        <div className="container-fluid">
        {children}
        </div>
    )
}

export default BaseFrame;