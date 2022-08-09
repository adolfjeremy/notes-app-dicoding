import React from "react";

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
                <img src="/icons/search.png" alt="search" />
            </button>
        </form>
    );
}

export default SearchBar;
