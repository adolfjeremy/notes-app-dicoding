import React from "react";
import NoteList from "./NoteList";

function ArchiveNoteWrapper({ notes, activeContent, onDelete, onMark }) {
    return (
        <section
            className="note-list-wrapper"
            aria-hidden={activeContent !== "archive-notes"}
        >
            <h2>Archived Note</h2>
            <NoteList
                notes={notes}
                buttonText="Activate!"
                onDelete={onDelete}
                onMark={onMark}
            />
        </section>
    );
}

export default ArchiveNoteWrapper;
