import React from 'react';
import photo from '../Icons/image.svg';

const NoResults = () => {
    return (
        <div className="photo-container">
            <h2>No results found</h2>
            <img src={photo} alt="Icon" />
            <p>Sorry. Please try another search. You may also click one of the links above.</p>
        </div>
    );
};

export default NoResults;