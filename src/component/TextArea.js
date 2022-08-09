import React from "react";

function TextArea({ value, onInput }) {
    return (
        <textarea
            value={value}
            onInput={({ target }) => onInput(target.value)}
            rows="5"
            required
        />
    );
}

export default TextArea;
