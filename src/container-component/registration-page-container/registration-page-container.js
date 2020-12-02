import React from "react";
import './registration-page-container.sass'
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import RegistrationPage from "../../component/registration-page";
import {fetchLogin} from "../../store/actions";
import LoginDone from "../../component/login-done";




const RegistrationReduxForm = reduxForm({form: 'Registration'})(RegistrationPage);

const RegistrationPageContainer = ({fetchLogin, loginData}) => {

    const onClickFormRegistration = (formDataReg) => {
        fetchLogin(formDataReg.email, formDataReg.password,formDataReg);
    };
    if (loginData.token) {
        return <LoginDone data={loginData}/>
    }
    return (
        <RegistrationReduxForm onSubmit={onClickFormRegistration}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPageContainer);