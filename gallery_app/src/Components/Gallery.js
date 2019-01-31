import React, {Component} from 'react';
import Loading from './Loading';
import NoResults from './NoResults';
import GalleryItem from './GalleryItem';

class Gallery extends Component {

    componentDidMount() {
        let searchQuery = this.props.match.params.search;
 
        if (searchQuery) {
            this.props.onSearch(searchQuery)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.search !== this.props.match.params.search) {
            this.props.switchLoading();
            this.props.onSearch(nextProps.match.params.search)
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
                        <h2>{this.props.match.params.search.toUpperCase()}</h2>
                            <ul>
                                { gallery }
                            </ul>
                    </div>
                );
        }
    };
}
    

export default Gallery;