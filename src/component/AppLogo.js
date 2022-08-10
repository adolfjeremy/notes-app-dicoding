import React from "react";
import appLogo from "../icons/big-note.png";

function AppLogo() {
    return (
        <>
            <div className="nav-logo md-none">
                <h1>Personal Note</h1>
                <p>by Jeremy</p>
            </div>
            <div className="nav-logo lg-none">
                <img src={appLogo} alt="Notes" />
            </div>
        </>
    );
}

export default AppLogo;
