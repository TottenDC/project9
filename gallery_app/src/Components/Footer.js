import React from 'react';
import {Link} from 'react-router-dom';

const Footer = ({loading}) => {
    let topLink;
    if (!loading) {
        topLink = <li><a href="#top">Back To Top</a></li>;
    }

    return (
        <footer className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                { topLink }
                <li><a href="https://github.com/tottendc" target="_blank" rel="noopener noreferrer">DT Design</a></li>
            </ul>
        </footer>
    );
}

export default Footer;