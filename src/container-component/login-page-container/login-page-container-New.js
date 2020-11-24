import React, {Component} from "react";
import {fetchLogin} from "../../store/actions";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import LoginPage from "../../component/login-page";
import LoginDone from "../../component/login-done";


const LoginReduxForm = reduxForm({
    form: 'Login'
})(LoginPage);



class LoginPageContainer extends Component {

    onClickForm = (formData) => {
        const {fetchLogin} = this.props;
        fetchLogin(formData.email, formData.password);
    };
    render() {
        if(this.props.loginData.token){
            return <LoginDone data={this.props.loginData}/>
        }

        return (
            <LoginReduxForm onSubmit={this.onClickForm}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginData: state.loginPage.loginData
    }
};


const mapDispatchToProps = {
    fetchLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);