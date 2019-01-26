import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Gallery from './Gallery';

const Nav = () => {
    return (
        <nav class="main-nav">
            <ul>
                <li><NavLink to="/gallery/link1">Link1</NavLink></li>
                <li><NavLink to="/gallery/link2">Link2</NavLink></li>
                <li><NavLink to="/gallery/link3">Link3</NavLink></li>
            </ul>

            <Route path="/gallery/link1" render={ () => <Gallery /> } />
            <Route path="/gallery/link2" render={ () => <Gallery /> } />
            <Route path="/gallery/link3" render={ () => <Gallery /> } />
        </nav>
    );
};

export default Nav;