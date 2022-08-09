import React from "react";
import { showFormattedDate } from "../utils/index";

function NoteItem({ note, buttonText, onDelete, onMark }) {
    return (
        <article>
            <h3>{note.title}</h3>
            <span>{showFormattedDate(note.createdAt)}</span>
            <p>{note.body}</p>
            <div className="button-wrapper">
                <button
                    type="button"
                    className="btn btn-mark"
                    onClick={() => onMark(note.id)}
                >
                    {buttonText}
                </button>
                <button
                    type="button"
                    className="btn btn-delete"
                    onClick={() => onDelete(note.id)}
                >
                    Delete
                </button>
            </div>
        </article>
    );
}

export default NoteItem;
