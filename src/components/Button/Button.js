import React from 'react';
import './Button.css';

const Button = ({ children, handleClick, className }) => {
    return (
        <button
            className={ className }
            onClick={ handleClick }>
            { children }
        </button>
    );
  }

export default Button;