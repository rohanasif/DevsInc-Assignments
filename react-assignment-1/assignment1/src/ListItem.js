import React from 'react';

function ListItem({text}) {
    // function onDelete() {
    //     handledelete(this.props.index);
    // }


    return (
        <>
            <li>{text}</li>
            {/* <button onClick={onDelete}>Delete</button> */}
        </>

    );

}

export default ListItem;
