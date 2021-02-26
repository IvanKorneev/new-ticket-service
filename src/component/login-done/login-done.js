import React from "react";
import './login-done.sass'
import {Link} from "react-router-dom";


const LoginDone = ({data, onLogOut}) => {

    return (
        <section className='loginDone'>
            <h2>Thank you for registering. {data.email}</h2>
            <div className='login-done-button'>
                <Link to='/events'>
                    <button type='button' className='button-login-page'>Return to main</button>
                </Link>
                <button type='button' className='button-login-page' onClick={() => onLogOut()}>Logout</button>
            </div>
        </section>
    )
};


export default LoginDone;
