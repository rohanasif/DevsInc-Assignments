import { useState } from "react";
export default function Form() {
    const [email, setEmail] = useState("");
    function handleChange(event) {
        setEmail(event.target.value);
    }
    return (
        <>
`
            <input type="text" value={email} onChange={handleChange} />
        </>
    )
}