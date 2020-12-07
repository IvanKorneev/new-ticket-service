import React from "react";
import './form-comtrols-input.sass'

const FormControlsInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`formControl ${hasError ? 'formError' : ''}`}>
            <input{...input} {...props}/>
            {hasError && <span className='errors'>{meta.error}</span>}
        </div>
    )
};
export default FormControlsInput;
