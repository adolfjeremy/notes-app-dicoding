import React from "react";
import ActiveNoteWraper from "./ActiveNoteWraper";
import ArchiveNoteWrapper from "./ArchiveNoteWrapper";
import SearchResultWrapper from "./SearchResultWrapper";
import AddForm from "./AddForm";

function Main({
    onSubmit,
    InputValue,
    onInputValue,
    inputBody,
    onInputBody,
    charLimit,
    notes,
    activeContent,
    onDelete,
    onMark,
    keyword,
}) {
    return (
        <main>
            <AddForm
                onSubmit={onSubmit}
                InputValue={InputValue}
                onInputValue={onInputValue}
                inputBody={inputBody}
                onInputBody={onInputBody}
                activeContent={activeContent}
                charLimit={charLimit}
            />
            <ActiveNoteWraper
                notes={notes.filter((note) => note.archived === false)}
                activeContent={activeContent}
                onDelete={onDelete}
                onMark={onMark}
            />
            <ArchiveNoteWrapper
                notes={notes.filter((note) => note.archived === true)}
                activeContent={activeContent}
                onDelete={onDelete}
                onMark={onMark}
            />
            <SearchResultWrapper
                notes={notes.filter(
                    (note) =>
                        note.title
                            .toLowerCase()
                            .includes(keyword.toLowerCase()) ||
                        note.body.toLowerCase().includes(keyword.toLowerCase())
                )}
                activeContent={activeContent}
                onDelete={onDelete}
                onMark={onMark}
            />
        </main>
    );
}

export default Main;
