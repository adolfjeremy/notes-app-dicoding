import React from "react";
import Label from "./Label";
import Input from "./Input";
import TextArea from "./TextArea";

function AddForm({
    onSubmit,
    InputValue,
    onInputValue,
    onInputBody,
    inputBody,
    activeContent,
    charLimit,
}) {
    return (
        <form
            className="add-form"
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
            }}
            aria-hidden={activeContent !== "add-form"}
        >
            <h2>Add New Note</h2>
            <div className="form-control">
                <div className="label-wrapper">
                    <Label children="Title" />
                    <small>Remaining characters: {charLimit}</small>
                </div>
                <Input value={InputValue} onInput={onInputValue} />
            </div>
            <div className="form-control">
                <Label children="Body" />
                <TextArea value={inputBody} onInput={onInputBody} />
            </div>
            <button type="submit">Add Note</button>
        </form>
    );
}

export default AddForm;
