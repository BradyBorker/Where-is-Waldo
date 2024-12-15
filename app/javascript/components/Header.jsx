import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
        <Link to="/">
            <h1 className="text">
                <span className="first">Where's</span> <span className="second">Waldo?</span>
            </h1>
        </Link>
    </div>
)

export default Header