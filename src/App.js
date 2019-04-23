import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Pics from './components/Pics'
import pics from "./pics.json";



class App extends Component {
  
  state = {
      pics,
      score: 0,
      highScore: 0,
      round: 1,
      clickedIds: [],
      roundScore: 1
    } 
  
  gameOver = () => {
    this.setState({
      score: 0,
      roundScore: 1,
      clickedIds: [],
      round: 1
      
    })
    alert("You suck!!");
  };
    
  youWin = () => {
    this.setState({
      highScore: this.state.score +1,
      round: +1,
      clickedIds: [],
      roundScore: 1

    })
    alert("You win!!");
  }
  addScore=(id)=> {    
    this.setState({
      score: this.state.score +1,
      roundScore: this.state.score +1,
    });
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      })
    }
    if (this.state.roundScore > 2) {
      this.youWin();
    }
    this.state.clickedIds.push(id)
    console.log(this.state.clickedIds);
    console.log(`round score ${this.state.roundScore}`);
  }
  

  onPickClicked=(id)=> {
    
    if (this.state.clickedIds.includes(id)) {
      this.gameOver();
    }else{
      this.addScore(id);
    }
    
  };

  render() {
    return (
        <Wrapper>
        <Header score={this.state.score} round={this.state.round} highScore={this.state.highScore} />
          <div className="container">
            {/* randomizes pics before map */}
            {this.state.pics
            .sort((a, b) => {return 0.5 - Math.random();})
            // displays all pics
            .map((pic, index) => 
                <Pics key={index} 
                picClicked={this.onPickClicked} 
                src={pic.image} 
                alt={pic.name} 
                id={pic.id} />)}
          
          </div>
        </Wrapper>
    
    );
  }
}

export default App;
