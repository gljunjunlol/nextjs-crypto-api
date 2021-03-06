import React from 'react';

const InputBase = ({ textLabel,...props }) => (

        <>
            <input type="number" className="form-control" {...props}/>
            <span className="input-group-text">{textLabel}</span>
        </>
    );


export default InputBase;