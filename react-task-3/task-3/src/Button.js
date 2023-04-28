import React from 'react';

function Button(props) {
    return <button ref={props.ref} onClick={props.onClick}>{props.text}</button>
}

export default Button;