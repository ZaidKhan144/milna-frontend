import React from 'react'

const TextField = ({ name, handleChange, label, autoFocus, type, handleShowPassword, placeholder}) => {

    return(
        
        <input 
            name={name}
            onChange={handleChange}
            required
            label={label}
            placeholder={placeholder}
            autoFocus={autoFocus}
            type={type}
        />
    )
}

export default TextField
