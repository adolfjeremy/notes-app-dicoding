import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";

import menus from "./data/menus";
import { getInitialData } from "./utils/index";
import "./style/style.css";

function App() {
    const [keyword, setKeyword] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [inputBody, setInputBody] = useState("");
    const [titleLength, setTitleLength] = useState(0);

    const [activeNav, setActiveNav] = useState("active-notes");
    const [notes, setNote] = useState(getInitialData());

    const MAX_CHAR = 50;
    const charLimit = MAX_CHAR - titleLength;

    const handleInputValue = (title) => {
        setInputValue(title.slice(0, MAX_CHAR - 1));
        setTitleLength(title.length);
    };

    const handleAddNote = () => {
        const newNotes = {
            id: +new Date(),
            title: inputValue,
            body: inputBody,
            archived: false,
            createdAt: new Date(),
        };
        setNote([...notes, newNotes]);
        setActiveNav("active-notes");
        setInputValue("");
        setInputBody("");
    };

    const onNavItemClick = (nav) => {
        setActiveNav(nav);
    };

    const onSearch = () => {
        setActiveNav("search-result");
    };

    const onMark = (id) => {
        const newNotes = [...notes];
        const index = newNotes.findIndex((newNote) => newNote.id === id);
        newNotes[index].archived = !newNotes[index].archived;
        setNote(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNote(newNotes);
    };
    return (
        <>
            <Sidebar
                keyword={keyword}
                setKeyword={setKeyword}
                onSearch={onSearch}
                menu={menus}
                onNavItemClick={onNavItemClick}
                activeNav={activeNav}
            />
            <Main
                charLimit={charLimit}
                onSubmit={handleAddNote}
                InputValue={inputValue}
                onInputValue={handleInputValue}
                inputBody={inputBody}
                onInputBody={setInputBody}
                notes={notes}
                keyword={keyword}
                activeContent={activeNav}
                onDelete={deleteNote}
                onMark={onMark}
            />
        </>
    );
}

export default App;
