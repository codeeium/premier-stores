import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS file
import premierLogo from '../header/premierLogo.png'; // Import logo
// import proudToServe from '../header/proudToServe.png'; // Import logo

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img
                    src={premierLogo}
                    alt="Premier Logo"
                    className="logo"
                />
                {/*<img*/}
                {/*    src={proudToServe}*/}
                {/*    alt="proudTo Serve"*/}
                {/*    className="logo"*/}
                {/*/>*/}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
