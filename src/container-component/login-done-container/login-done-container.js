import React from "react";
import {useDispatch, useSelector} from "react-redux";
import LoginDone from "../../component/login-done";
import {resetLoginError, resetUserData} from "../../store/actions";



const LoginDoneContainer = () => {
    const {loginData} = useSelector(state => state.loginPage);
    const dispatch = useDispatch();
    const onLogOut = () => {
        dispatch(resetUserData())
        dispatch(resetLoginError())
        localStorage.removeItem('email')
        localStorage.removeItem('token')
    };
    return (
        <LoginDone data={loginData} onLogOut={onLogOut}/>
    )
}
export default LoginDoneContainer;