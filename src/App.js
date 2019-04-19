import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Pics from './components/Pics'
import pics from "./pics.json";


class App extends Component {
  runGame() {
    console.log("you did it");
  }
  state = {
    pics
  }
        render() {
    return (
        <Wrapper>
        <Header />
      <div className="container">
      {this.state.pics.map(pic =>(
        <Pics key={pic.id} image={pic.image} name={pic.name}/>
        ))}
      </div>
      </Wrapper>
    
    );
  }
}

export default App;
