import React from "react";
import './login-done.sass'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {resetUserData} from "../../store/actions";
import {email} from "../helpers/validator/validator";


const LoginDone = ({data, logOut, resetUserData}) => {

    const onLogOut = () => {
        logOut(resetUserData);
        localStorage.removeItem('email');
        localStorage.removeItem('token');
    };
    return (
        <section className='loginDone'>
            <h2>Thank you for registering. {data.email}</h2>
            <div className='login-done-button'>
                <Link to='/events'>
                    <button type='button' className='button-login-page'>Return to main</button>
                </Link>
                <button type='button' className='button-login-page' onClick={onLogOut}>Logout</button>
            </div>
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        loginData: state.loginPage.loginData
    }
};
const mapDispatchToProps = {
    logOut: (val) => resetUserData(val)
};

// const mapDispatchToProps = (dispatch) => ({
//     logOut: (val) => dispatch(resetUserData(val)),
// });
export default connect(mapStateToProps, mapDispatchToProps)(LoginDone);
