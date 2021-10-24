import React from "react";
import {resetLoginError, resetUserData} from "../../store/actions";
import LoginDone from "../../component/login-done";
import {connect} from "react-redux";


const LoginDoneContainer = ({logOut, resetUserData, resetLoginError, resetError, loginData}) => {

    const onLogOut = () => {
        logOut(resetUserData);
        resetError(resetLoginError);
        localStorage.removeItem('email')
        localStorage.removeItem('token')
    };
    return (
        <LoginDone data={loginData} onLogOut={onLogOut}/>
    )
}
const mapStateToProps = (state) => {
    return {
        loginData: state.loginPage.loginData
    }
};


const mapDispatchToProps = (dispatch) => ({
    logOut: (val) => dispatch(resetUserData(val)),
    resetError: (val) => dispatch(resetLoginError(val))
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginDoneContainer);