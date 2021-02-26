import React from "react";
import {fetchLogin, loadingIndicatorLogin} from "../../store/actions";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import LoginPage from "../../component/login-page";
import {getLoginData, getLoading} from "../../store/selectors/login-page-selectors";
import Spinner from "../../component/spinner";
import LoginDoneContainer from "../login-done-container/login-done-container";


const LoginReduxForm = reduxForm({form: 'Login'})(LoginPage);

const LoginPageContainer = ({fetchLogin, loginData, error, loading, loadingIndicatorLogin}) => {
    const onClickFormLogin = (formData) => {
        fetchLogin(formData.email, formData.password);
        loadingIndicatorLogin()
    };
    if (loginData.token) {
        return <LoginDoneContainer/>
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