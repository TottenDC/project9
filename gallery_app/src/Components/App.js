import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import '../css/App.css';
import apiKey from '../config';

// Components
import Gallery from './Gallery';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import Footer from './Footer';

class App extends Component {

  state = {
    photos: [],
    loading: true
  };

  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => {
        this.setState({ 
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(function (error) {
        console.log('Parsing error', error);
    });
  }

  turnLoadingOn = () => {
    this.setState({
      loading: true
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header 
            onSearch={this.performSearch} 
            switchLoading={this.turnLoadingOn}
            data={this.state.photos}
            loading={this.state.loading}
          />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/gallery" render={() => <Redirect to="/" />} />
              <Route exact path="/gallery/:search" 
                render={(props) => 
                  <Gallery 
                    {...props} 
                    data={this.state.photos}
                    loading={this.state.loading} 
                    onSearch={this.performSearch} 
                    switchLoading={this.turnLoadingOn} 
                  /> 
                } 
              />
              <Route component={NotFound} />
            </Switch>
          <Footer loading={this.state.loading} />
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
