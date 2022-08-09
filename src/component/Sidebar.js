import React from "react";
import AppLogo from "./AppLogo";
import NavList from "./NavList";
import SearchBar from "./SearchBar";

function Sidebar({
    onSearch,
    keyword,
    setKeyword,
    menu,
    onNavItemClick,
    activeNav,
}) {
    return (
        <aside>
            <AppLogo />
            <SearchBar
                onSearch={onSearch}
                onNavItemClick={onNavItemClick}
                keyword={keyword}
                setKeyword={setKeyword}
            />
            <NavList
                menu={menu}
                onNavItemClick={onNavItemClick}
                activeNav={activeNav}
            />
        </aside>
    );
}

export default Sidebar;
