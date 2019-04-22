import React, { Component, useState } from 'react';
import './css/App.css';
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Pics from './components/Pics'
import pics from "./pics.json";



class App extends Component {
  
  state = {
      pics,
      score: 0
    }

 
  

  onPickClicked=(id)=> {
    console.log('Pic ID ' + id);
    this.setState({score:this.state.score +1})
  }

  render() {
    return (
        <Wrapper>
        <Header data={this.state.score} />
      <div className="container">
      
        <Pics picClicked={this.onPickClicked} data={pics} />
        
      </div>
      </Wrapper>
    
    );
  }
}

export default App;
