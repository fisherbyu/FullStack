import React from "react";
import af_logo from './logo.png'
function Header() {
    return (
        <React.Fragment>
            <header className="row">
                <div className="col-4">
                    <img src={af_logo} alt="log"/>
                </div>
                <div className="col">
                    <h3>Andrew is the Coolest</h3>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header