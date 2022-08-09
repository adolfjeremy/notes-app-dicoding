import React from "react";
import NoteList from "./NoteList";

function SearchResultWrapper({ notes, activeContent, onDelete, onMark }) {
    return (
        <section
            className="search-result-wrapper"
            aria-hidden={activeContent !== "search-result"}
        >
            <h3>Archived Notes</h3>
            <NoteList
                notes={notes.filter((note) => note.archived === true)}
                buttonText="Activate!"
                onDelete={onDelete}
                onMark={onMark}
            />
            <h3>Active Notes</h3>
            <NoteList
                notes={notes.filter((note) => note.archived === false)}
                buttonText="Archive!"
                onDelete={onDelete}
                onMark={onMark}
            />
        </section>
    );
}

export default SearchResultWrapper;
