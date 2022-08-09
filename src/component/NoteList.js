import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, buttonText, onDelete, onMark }) {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    buttonText={buttonText}
                    onDelete={onDelete}
                    onMark={onMark}
                />
            ))}
            {!notes.length && <p>Empty</p>}
        </div>
    );
}

export default NoteList;
