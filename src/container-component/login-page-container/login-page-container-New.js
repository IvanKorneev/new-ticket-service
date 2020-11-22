import React from "react";
import {fetchLogin} from "../../store/actions";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import LoginPage from "../../component/login-page";


const LoginReduxForm = reduxForm({
    form: 'Login'
})(LoginPage);


const LoginPageContainer = (props) => {

    const onClickForm = (formData) => {
        console.log(formData);
        // console.log(this.props);

       props.fetchLogin(formData.email,formData.password);

    };
    return (
        <div>
            <LoginReduxForm onSubmit={onClickForm}/>
        </div>
    );
};

const mapDispatchToProps = {
    fetchLogin
};
export default connect(null, mapDispatchToProps)(LoginPageContainer);