import React from "react";

function Input({ value, onInput }) {
    return (
        <input
            type="text"
            value={value}
            onInput={(event) => onInput(event.target.value)}
            required
        />
    );
}

export default Input;
