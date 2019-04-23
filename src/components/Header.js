import React from 'react';
import Score from './Score';
import '../css/Header.css';

const Header = (props) => {
    return(
        <nav>
    <div className="nav-wrapper">
      <a href="myporfolio.com" className="left brand-logo">Clicky-Game</a>
      <ul id="nav-mobile" className="right">
        <li>
          <Score 
          score={props.score} 
          highScore={props.highScore} 
          round={props.round}
          />
        </li>
        
      </ul>
    </div>
  </nav>
    )
}

export default Header;