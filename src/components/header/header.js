import React from 'react';
import './header.css';

import Logo from './logo';
import NavButtons from './navbuttons';
import UserButtons from './userbuttons';

function Header() {
    return (
        <nav className="menunav">
            <div className="nav-buttons">
                <NavButtons/>
            </div>
            <div className="logo">
                <Logo/>
            </div>
            <div className="user-buttons">
                <UserButtons/>
            </div>
        </nav>
    )
}

export default Header;