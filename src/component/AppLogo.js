import React from "react";

function AppLogo() {
    return (
        <>
            <div className="nav-logo md-none">
                <h1>Personal Note</h1>
                <p>by Jeremy</p>
            </div>
            <div className="nav-logo lg-none">
                <img src="icons/big-note.png" alt="Notes" />
            </div>
        </>
    );
}

export default AppLogo;
