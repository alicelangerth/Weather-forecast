import React from 'react';
import './Input.css';

const Input = ({ value, handleChange, listenOnEnter }) => {
    return (
        <input  onChange={ handleChange }
                onKeyDown={ listenOnEnter }
                type= 'text'
                value= {value}/>     
    );
}

export default Input;