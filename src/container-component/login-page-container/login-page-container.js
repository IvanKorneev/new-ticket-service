import React, {Component} from "react";
import LoginPage from "../../component/login-page";
import WithTicketsService from "../../hoc";
import {connect} from "react-redux";

class LoginPageContainer extends Component {

    handleSubmit = () => {
        console.log(11)
    };

    render() {
        return (
            <div>
                <LoginPage handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        email:state.email,
        password:state.password,
        token:state.token,
        loginResult:state.loginResult
    }
};

const mapDispatchToProps = {};
export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer));
