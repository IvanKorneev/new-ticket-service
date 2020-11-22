import React from "react";
import './login-page.sass'
import {Field} from "redux-form";
import {maxLength, requiredField} from "../helpers/validator/validator";
import FormControlsInput from "../forms-controls";

const LoginPage = (props) => {
    return (
        <section className='login-page-container'>
            <h1>REGISTRATION</h1>
            <div className='login-page'>
                <div className='login-page-left'>
                    <span>I am already a customer.</span>
                    <form onSubmit={props.handleSubmit}>
                        <div className='login-page-input'>
                            <Field placeholder="Email" component={FormControlsInput} name={'email'}
                                   validate={[requiredField, maxLength]}/>
                            <Field placeholder="Password" component={FormControlsInput} name={'password'}
                                   validate={[requiredField, maxLength]}/>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <div className='login-page-right'>
                    <span>New customer</span>
                    <button type="submit">Register</button>
                    <button type="submit">Login with invitation code</button>
                </div>
            </div>

        </section>
    )
};
export default LoginPage;


