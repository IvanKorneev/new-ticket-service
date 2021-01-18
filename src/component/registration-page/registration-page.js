import React from "react";
import './registration-page.sass'
import FormControlsInput from "../forms-controls";
import {Field} from "redux-form";
import {fieldsData} from '../helpers'
import {Link} from "react-router-dom";


const RegistrationPage = (props) => {
    const {handleSubmit} = props;
    return (
        <section className='registration-container-page'>
            <h1>REGISTRATION</h1>
            <div className='registration-page'>
                <span>Contact information</span>
                <form onSubmit={handleSubmit} className='form-registration'>
                    <div className='input-form'>
                        {fieldsData.map(({placeholder, name, validate, type}, index) => {
                            return <Field key={index} placeholder={placeholder} component={FormControlsInput}
                                          name={name}
                                          validate={validate} type={type}/>
                        })}
                    </div>
                    <div className='registration-agreement'>
                        <div className='agreement-box'>
                            <Field name="agreement" component="input" type="checkbox" value="other"/>
                            <div className='checkbox1'>*I have read the notice on <Link to='/conditions'>data
                                protection</Link> and the content of the <Link to='/conditions'>Standart Terms of
                                Business</Link> and
                                agree to the storage of my personal data.
                            </div>
                        </div>
                        <div className='agreement-box'>
                            <Field name="agreement" component="input" type="checkbox" value="other"/>
                            <div className='checkbox1'>I agree to get notifications on me Email and phone.</div>
                        </div>
                        <button type="submit" className='button-login-page'>Register</button>
                    </div>
                </form>

            </div>
        </section>
    )
};
export default RegistrationPage;