import React from "react";

const InputComponent = ({type, name, label, value, id, required, onChange}) =>{
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} value={value} id={id} required={required} onChange={onChange}/>
        </div>
    )

}
export default InputComponent;