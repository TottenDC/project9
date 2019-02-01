import React from 'react';
import warning from '../Icons/warning.svg';

const NotFound = () => {
    return (
        <div className="photo-container not-found">
            <img src={warning} alt="Warning Icon" />
            <h2>Page Not Found</h2>
            <br />
            <h3>Please visit the home page or search again.</h3>
        </div>
    );
};

export default NotFound;