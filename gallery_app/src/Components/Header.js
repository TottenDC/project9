import React from 'react';
import {Link} from 'react-router-dom';
import cameraIcon from '../Icons/camera.svg';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = ({onSearch}) => {
    return (
        <header>
            <Link to="/">
                <img className="icon" src={cameraIcon} alt="Camera Icon" />
            </Link>
            <h1>Photo Gallery</h1>
            
            <SearchForm onSearch={onSearch} />
            <Nav />
        </header>
    );
};

export default Header;