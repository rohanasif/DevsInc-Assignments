import React, { useState } from 'react';

function InputForm({onSubmit}) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
        setText("");
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} placeholder="Enter something" />
            <input type="submit" value="Add" />
        </form>
    );
}

export default InputForm;
