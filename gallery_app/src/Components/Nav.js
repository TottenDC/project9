import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/gallery/ocean">Ocean</NavLink></li>
                <li><NavLink to="/gallery/storm">Storm</NavLink></li>
                <li><NavLink to="/gallery/moonlight">Moonlight</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;