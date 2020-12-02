import React from "react";
import {fetchLogin} from "../../store/actions";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import LoginPage from "../../component/login-page";
import LoginDone from "../../component/login-done";


const LoginReduxForm = reduxForm({form: 'Login'})(LoginPage);

const LoginPageContainer = ({fetchLogin, loginData}) => {

    const onClickFormLogin = (formData) => {
        fetchLogin(formData.email, formData.password);
    };
    if (loginData.token) {
        return <LoginDone data={loginData}/>
    }
    return (
        <LoginReduxForm onSubmit={onClickFormLogin}/>
    )
};
const mapStateToProps = (state) => {
    return {
        loginData: state.loginPage.loginData
    }
};
const mapDispatchToProps = {
    fetchLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);