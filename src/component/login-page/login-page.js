import React from "react";
import './login-page.sass'
import {Field} from "redux-form";
import {email, maxLength, requiredField} from "../helpers/validator/validator";
import FormControlsInput from "../forms-controls";
import {Link} from "react-router-dom";


const LoginPage = (props) => {
    const {handleSubmit} = props;
    return (
        <section className='login-page-container'>
            <h1><a href='#'>REGISTRATION</a></h1>
            <div className='login-page'>
                <div className='login-page-left'>
                    <span>I am already a customer.</span>
                    <form onSubmit={handleSubmit}>
                        <div className='login-page-input-container'>
                            <div className='login-page-input'>
                                <Field placeholder="Email" component={FormControlsInput} name={'email'}
                                       validate={[requiredField, maxLength, email]}/>
                                <i className="fas fa-times"/>
                            </div>
                            <div className='login-page-input'>
                                <Field placeholder="Password" type='password' component={FormControlsInput}
                                       name={'password'}
                                       validate={[requiredField, maxLength]}/>
                                <i className="fas fa-times"/>
                            </div>
                            <span className='password'>Forget password</span>
                        </div>
                        <div>
                            <button type="submit" className='button-login-page'>Login</button>
                        </div>
                    </form>
                </div>
                <div className='login-page-right'>
                    <span>New customer</span>
                   <Link to='/registration'><button type="button" className='button-login-page'>Register</button></Link>
                    <button type="button" className='button-login-page'>Login with invitation</button>

                </div>
            </div>
        </section>
    )
};
export default LoginPage;


