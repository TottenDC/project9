import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import '../css/App.css';
import apiKey from '../config';

// Components
import Gallery from './Gallery';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';

class App extends Component {

  state = {
    photos: []
  };

  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        this.setState({ 
          photos: response.data.photos.photo
        })
      })
      .catch(function (error) {
        console.log('Parsing error', error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header onSearch={this.performSearch} data={this.state.photos} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/gallery" render={() => <Gallery data={this.state.photos} />} />
              <Route path="/gallery/:search" />
              <Route component={NotFound} />
            </Switch>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
