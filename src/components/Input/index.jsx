import React from 'react'

export const Input = ({ typ, title, icon, placholder, handleChange, value }) => {
    return (
        <div className='register-input'>
            <p className='register-input_title'>
                {title}
            </p>
            <div className="input-group">
                <i className={`${icon} register-input_icon`} ></i>
                <input type={typ} placeholder={placholder} value={value} onChange={(e) => {
                    handleChange(e.target.value)
                }} />
            </div>

        </div>
    )
}
