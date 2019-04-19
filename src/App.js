import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Pics from './components/Pics'

class App extends Component {
  render() {
    return (
      <body>
        <Header />
      <div class="container">
        <Pics />
      </div>
    </body>
    );
  }
}

export default App;
