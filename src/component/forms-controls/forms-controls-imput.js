import React from "react";
import './form-comtrols-input.sass'

const FormControlsInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`formControl ${hasError ? 'error' : ''}`}>
            <input{...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};
export default FormControlsInput;
