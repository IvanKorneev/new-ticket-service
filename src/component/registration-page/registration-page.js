import React from "react";
import './registration-page.sass'
import FormControlsInput from "../forms-controls";
import {requiredField} from "../helpers/validator/validator";
import {Field} from "redux-form";
import {fieldsData} from '../helpers'


const RegistrationPage = (props) => {

    const {handleSubmit} = props;

    return (
        <section className='registration-container-page'>
            <h1><a href='#'>REGISTRATION</a></h1>
            <div className='registration-page'>
                <span>Contact information</span>
                <form onSubmit={handleSubmit}>
                    <Field name="favoriteColor" component="select">
                        <option/>
                        <option value="ff0000">Mr</option>
                        <option value="00ff00">Ms</option>
                        <option value="0000ff">Other</option>
                    </Field>
                    {fieldsData.map(({placeholder, name, validate}, index) => {
                        return <Field key={index} placeholder={placeholder} component={FormControlsInput} name={name}
                                      validate={validate}/>
                    })}
                    <Field name="sex1" component="input" type="checkbox" value="other"/>
                    <Field name="sex" component="input" type="checkbox" value="other"/>
                    <button type="submit" className='button-login-page'>Register</button>
                </form>
            </div>
        </section>
    )
};
export default RegistrationPage;