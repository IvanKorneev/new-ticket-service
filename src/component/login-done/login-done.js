import React from "react";
import './login-done.sass'

const LoginDone = ({data}) => {

    return (
        <section className='loginDone'>
            <h2>Thank you for registering.   {data.email}</h2>
            <div className='login-done-button'>
                <button type='click' className='button-login-page'>Return to main</button>
                <button type='click' className='button-login-page'>Logout</button>
            </div>


        </section>
    )
};
export default LoginDone