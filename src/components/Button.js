import React from 'react';
import '../styles/Button.css';

function Button(props) {
  const isOperator = value => {
    return isNaN(value) && (value != '.') && (value != '=');
  };

  return (
    <div
      className={`button-container ${props.buttonKey} ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  )
}

export default Button;