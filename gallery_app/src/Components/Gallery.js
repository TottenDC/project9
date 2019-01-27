import React from 'react';
import NoResults from './NoResults';
import GalleryItem from './GalleryItem';

const Gallery = (props) => {

    const results = props.data;
    let gallery;

    if (results.length > 0) {
        gallery = results.map( photo => 
            <GalleryItem 
                id={photo.id}
                secret={photo.secret}
                server={photo.server}
                farm={photo.farm}
                key={photo.id}
            />
        );
    } else {
        return (
            <NoResults />
        );
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
                <ul>
                    {gallery}
                </ul>
        </div>
    );
};

export default Gallery;