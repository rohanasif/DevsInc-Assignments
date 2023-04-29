import React from 'react';


function ListItem(props) {
    return (
        <li key={props.id}>{props.text}</li>
    )
}

export default ListItem;