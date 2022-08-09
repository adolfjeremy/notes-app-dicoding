import React from "react";
import NoteList from "./NoteList";

function ActiveNoteWraper({ notes, activeContent, onDelete, onMark }) {
    return (
        <section
            className="note-list-wrapper"
            aria-hidden={activeContent !== "active-notes"}
        >
            <h2>Active Note</h2>
            <NoteList
                notes={notes}
                buttonText="Archive!"
                onDelete={onDelete}
                onMark={onMark}
            />
        </section>
    );
}

export default ActiveNoteWraper;
