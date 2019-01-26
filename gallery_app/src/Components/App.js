import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import '../css/App.css';

// Components
import Gallery from './Gallery';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/gallery" component={Gallery} />
              <Route path="/gallery/:search" />
              <Route component={NotFound} />
            </Switch>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
