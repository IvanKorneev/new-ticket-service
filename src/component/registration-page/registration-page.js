import React from "react";
import './registration-page.sass'
import FormControlsInput from "../forms-controls";
import {requiredField} from "../helpers/validator/validator";
import {Field} from "redux-form";



const RegistrationPage = (props) => {

    // const {handleSubmit} = props;
    return (
        <section className='registration-container-page'>
            <h1><a href='#'>REGISTRATION</a></h1>
            <div className='registration-page'>
                <span>Salutation and address</span>
                <span>Contact information</span>
                <form>
                    <div>

                    </div>
                    <Field name="inputName" component="input" type="text" />
                    <Field placeholder="Name*" component={FormControlsInput} name={'Name'}
                           validate={[requiredField]}/>
                    <Field placeholder="Surname*" component={FormControlsInput} name={'Surname'}
                           validate={[requiredField]}/>
                    <Field placeholder="Company" component={FormControlsInput} name={'Company'}
                           validate={[requiredField]}/>
                    <Field placeholder="Street*" component={FormControlsInput} name={'Street'}
                           validate={[requiredField]}/>
                    <Field placeholder="House*" component={FormControlsInput} name={'Street'}
                           validate={[requiredField]}/>
                    <Field placeholder="Additional info" component={FormControlsInput} name={'Additional'}
                           validate={[requiredField]}/>
                    <Field placeholder="Postcode" component={FormControlsInput} name={'Postcode'}
                           validate={[requiredField]}/>
                    <Field placeholder="City" component={FormControlsInput} name={'City'}
                           validate={[requiredField]}/>
                    <Field placeholder="Country" component={FormControlsInput} name={'Country'}
                           validate={[requiredField]}/>
                    <Field placeholder="Email" component={FormControlsInput} name={'Email'}
                           validate={[requiredField]}/>
                    <Field placeholder="Password" component={FormControlsInput} name={'Password'}
                           validate={[requiredField]}/>
                    <Field placeholder="Confirm Password " component={FormControlsInput} name={'Confirm'}
                           validate={[requiredField]}/>
                    <Field placeholder="Phone Number " component={FormControlsInput} name={'Phone'}
                           validate={[requiredField]}/>
                    <Field placeholder="Additional Phone Number " component={FormControlsInput} name={'Additional'}
                           validate={[requiredField]}/>
                </form>
            </div>
        </section>
    )
};
export default RegistrationPage