import React from 'react';
import cameraIcon from '../Icons/camera.svg';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = ({data, loading, onSearch, switchLoading}) => {
    return (
        <header>
            <img src={cameraIcon} alt="Camera Icon" />
            <h1>Photo Gallery</h1>
            
            <SearchForm onSearch={onSearch} />
            <Nav 
                onClick={onSearch} 
                switchLoading={switchLoading}
                data={data}
                loading={loading} 
            />
        </header>
    );
};

export default Header;