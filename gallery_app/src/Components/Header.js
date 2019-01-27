import React from 'react';
import cameraIcon from '../Icons/camera.svg';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = ({data, onSearch}) => {
    return (
        <header>
            <img src={cameraIcon} alt="Camera Icon" />
            <h1>Photo Gallery</h1>
            
            <SearchForm onSearch={onSearch} />
            <Nav onClick={onSearch} data={data} />
        </header>
    );
};

export default Header;