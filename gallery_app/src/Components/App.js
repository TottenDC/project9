import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import '../css/App.css';

// Components
import Header from './Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
