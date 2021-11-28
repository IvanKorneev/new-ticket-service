import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {reduxForm} from "redux-form";
import LoginPage from "../../component/login-page";
import {getLoginData, getLoading} from "../../store/selectors/login-page-selectors";
import Spinner from "../../component/spinner";
import LoginDoneContainer from "../login-done-container/login-done-container";
import {fetchLogin, loadingIndicatorLogin} from "../../store/actions";


const LoginReduxForm = reduxForm({form: 'Login'})(LoginPage);

const LoginPageContainer = () => {

    const loginData = useSelector(getLoginData);
    const { error } = useSelector(state => state.loginPage);
    const loading = useSelector(getLoading);

    const dispatch = useDispatch();

    const onClickFormLogin = (formData) => {
        dispatch(fetchLogin(formData.email, formData.password));
        dispatch(loadingIndicatorLogin());
    };
    if (loginData?.token) {
        return <LoginDoneContainer/>
    }
    if (loading) {
        return <Spinner/>
    }

    return (
        <LoginReduxForm onSubmit={onClickFormLogin} errorlogin={error}/>
    )
};

export default LoginPageContainer;