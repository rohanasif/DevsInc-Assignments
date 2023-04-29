import React from 'react';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: "Enter something",
        }
    }
    render() {
        return (
            <>
                <input id="input" type="text" placeholder={this.state.placeholder} />
                <input type="button" id="button" value="Submit" onClick={clickHandler} />
            </>
        );
    }
}

function clickHandler(e) {
    e.preventDefault();
    console.log(document.getElementById("input").value);
}

export default InputForm;