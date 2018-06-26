import React from 'react'

function TextInputField (props) {
    return (
        <div className='input-field inline'>
            <label className='label'>{props.label}</label>
            <div className='control'>
                <input className='input'
                type={props.inputType}
                onChange={props.onChange}
                placeholder={props.placeholdertTxt}
                value={props.value} />
            </div>
        </div>

    )
}

export {TextInputField}



