import React from "react";
import NavItem from "./NavItem";

function NavList({ menu, onNavItemClick, activeNav }) {
    const { addNote, navList } = menu;
    return (
        <div className="nav-list">
            <NavItem
                menu={addNote}
                onNavItemClick={onNavItemClick}
                activeNav={activeNav}
            />
            {navList.map((navItem) => (
                <NavItem
                    menu={navItem}
                    onNavItemClick={onNavItemClick}
                    activeNav={activeNav}
                    key={navItem.id}
                />
            ))}
        </div>
    );
}

export default NavList;
