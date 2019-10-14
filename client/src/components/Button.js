import React from 'react';

function Button(props) {
    if (props.hide) {
        return null;
    } else {
        return(
            <button onClick={() => props.onClick(props.job)}>{props.title}</button>
        );
    }
    
    
}

export default  Button;