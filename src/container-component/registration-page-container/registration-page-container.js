import React from "react";
import {fetchLogin, loadingIndicatorLogin} from "../../store/actions";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import LoginDone from "../../component/login-done";
import {getLoginData, getLoading} from "../../store/selectors/login-page-selectors";
import Spinner from "../../component/spinner";
import RegistrationPage from "../../component/registration-page";


const LoginReduxForm = reduxForm({form: 'Login'})(RegistrationPage);

const LoginPageContainer = ({fetchLogin, loginData, error, loading, loadingIndicatorLogin}) => {
    const onClickFormLogin = (formData) => {
        fetchLogin(formData.email, formData.password);
        loadingIndicatorLogin()
    };
    if (loginData.token) {
        return <LoginDone data={loginData}/>
    }
    if (loading) {
        return <Spinner/>
    }

    return (
        <LoginReduxForm onSubmit={onClickFormLogin} errorlogin={error}/>
    )
};
const mapStateToProps = (state) => {
    return {
        loginData: getLoginData(state),
        error: state.loginPage.error,
        loading: getLoading(state)
    }
};
const mapDispatchToProps = {
    fetchLogin,
    loadingIndicatorLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);