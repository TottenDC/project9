import React from 'react';
import cameraIcon from '../Icons/camera.svg';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <img src={cameraIcon} alt="Camera Icon" />
            <h1>Photo Gallery</h1>
            
            <SearchForm />
            <Nav />
        </header>
    );
};

export default Header;