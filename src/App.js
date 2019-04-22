import React, { Component, useState } from 'react';
import './css/App.css';
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Pics from './components/Pics'
import pics from "./pics.json";


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pics
    }
    this.onPickClicked = this.onPickClicked.bind(this)
  }
 
  

  onPickClicked(id) {
    console.log('fuckin a ' + id);
    this.setState(state => ({
      pics: this.state.pics
    }))
  }

  render() {
    return (
        <Wrapper>
        <Header />
      <div className="container">
      
        <Pics picClicked={this.onPickClicked} data={pics} />
        
      </div>
      </Wrapper>
    
    );
  }
}

export default App;
