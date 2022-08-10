import React from "react";
import searchImage from "../icons/search.png";

function SearchBar({ onSearch, keyword, setKeyword }) {
    return (
        <form
            className="search-bar"
            onSubmit={(event) => {
                event.preventDefault();
                onSearch();
            }}
        >
            <input
                type="text"
                name="keyword"
                placeholder="Search Note"
                value={keyword}
                onInput={(event) => setKeyword(event.target.value)}
            />
            <button type="submit">
                <img src={searchImage} alt="search" />
            </button>
        </form>
    );
}

export default SearchBar;
