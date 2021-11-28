import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {reduxForm} from "redux-form";
import RegistrationPage from "../../component/registration-page";
import {getLoading, getLoginData} from "../../store/selectors/login-page-selectors";
import Spinner from "../../component/spinner";
import LoginDoneContainer from "../login-done-container/login-done-container";
import {fetchLogin, loadingIndicatorLogin} from "../../store/actions";


const RegistrationReduxForm = reduxForm({form: 'Registration'})(RegistrationPage);

const RegistrationPageContainer = () => {
    const loginData = useSelector(getLoginData);
    const loading = useSelector(getLoading);
    const dispatch = useDispatch();

    const onClickFormRegistration = (formDataReg) => {
        dispatch(fetchLogin(formDataReg.email, formDataReg.password, formDataReg));
        dispatch(loadingIndicatorLogin());
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


export default RegistrationPageContainer;

