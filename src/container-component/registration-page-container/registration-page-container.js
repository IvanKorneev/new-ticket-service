import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import RegistrationPage from "../../component/registration-page";
import {fetchLogin, loadingIndicatorLogin} from "../../store/actions";
import LoginDone from "../../component/login-done";
import {getLoading, getLoginData} from "../../store/selectors/login-page-selectors";
import Spinner from "../../component/spinner";
import LoginDoneContainer from "../login-done-container/login-done-container";


const RegistrationReduxForm = reduxForm({form: 'Registration'})(RegistrationPage);

const RegistrationPageContainer = ({fetchLogin, loginData, loading, loadingIndicatorLogin}) => {

    const onClickFormRegistration = (formDataReg) => {
        fetchLogin(formDataReg.email, formDataReg.password, formDataReg);
        loadingIndicatorLogin()
    };

    if (loginData.token) {
        return <LoginDoneContainer/>
    }
    if (loading) {
        return <Spinner/>
    }
    return (
        <RegistrationReduxForm onSubmit={onClickFormRegistration}/>
    )
};
const mapStateToProps = (state) => {
    return {
        loginData: getLoginData(state),
        loading: getLoading(state)
    }
};
const mapDispatchToProps = {
    fetchLogin,
    loadingIndicatorLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPageContainer);

