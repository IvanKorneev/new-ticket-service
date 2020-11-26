import React from "react";
import './registration-page-container.sass'
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import RegistrationPage from "../../component/registration-page";



const RegistrationReduxForm = reduxForm({form: 'Registration'})(RegistrationPage);

const RegistrationPageContainer = () => {
    return (

      <RegistrationReduxForm />
    )
};




export default  connect(null, null)(RegistrationPageContainer);