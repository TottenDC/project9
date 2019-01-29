import React from 'react';
import files from '../Icons/images.svg';

const Loading = () => {
    return (
        <div className="photo-container">
            <h2>Loading. Please wait.</h2>
            <img src={files} alt="Icon of Images" />
        </div>
        
    );
};

export default Loading;