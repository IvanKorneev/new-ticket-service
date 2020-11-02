import React from "react";
import './login-page.sass'

const LoginPage = ({handleSubmit}) => {

    return (
        <section className='login-page-container'>
            <h1>REGISTRATION</h1>
            <div className='login-page'>
                <div className='login-page-left'>
                    <span>I am already a customer.</span>
                    <form>
                        <div className='login-page-input'>
                            <input type="text" name="code" placeholder="Email"/>
                            <input type="text" name="code" placeholder="Password"/>
                        </div>
                        <div>
                            <button type="submit" onClick={handleSubmit}>Login</button>
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

export default LoginPage