import React from 'react';

const GalleryItem = ({farm, id, secret, server}) => {
    return (
        <li>
            <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" />
        </li>
    );
};

export default GalleryItem;