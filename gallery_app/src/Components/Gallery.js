import React, {Component} from 'react';
import Loading from './Loading';
import NoResults from './NoResults';
import GalleryItem from './GalleryItem';

class Gallery extends Component {
    componentDidMount() {
        if (this.props.query) {
            this.props.onClick(this.props.query)
        }
    }

    componentWillUnmount() {
        this.props.switchLoading();
    }

    render() {

        if (this.props.loading) {
            return (
                <Loading />
            )
        } else {
            const results = this.props.data;
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
                                { gallery }
                            </ul>
                    </div>
                );
        }
    };
}
    

export default Gallery;