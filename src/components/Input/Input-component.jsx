import React from "react";
import './input-component-style.scss'

const InputComponent = ({type, name, label, value, id, required, onChange}) =>{
    return(
        <div className='group'>
            <label className='group__label' htmlFor={id}>{label}</label>
            <input className='group__input'
                   type={type}
                   name={name}
                   value={value}
                   id={id}
                   required={required}
                   onChange={onChange}
            />
        </div>
    )

}
export default InputComponent;