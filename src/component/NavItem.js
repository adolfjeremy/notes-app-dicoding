import React from "react";

function NavItem({ menu, onNavItemClick, activeNav }) {
    const isNavActive = menu.control === activeNav;

    return (
        <a
            href="#!"
            className="nav-item"
            role="tab"
            aria-selected={isNavActive}
            aria-controls={menu.control}
            onClick={() => onNavItemClick(menu.control)}
        >
            <img src={menu.img} alt="nav logo" />
            <span>{menu.title}</span>
        </a>
    );
}

export default NavItem;
