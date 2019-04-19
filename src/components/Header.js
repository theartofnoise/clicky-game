import React from 'react';
import Score from './Score';
import '../css/Header.css';

const Header = (props) => {
    return(
        <nav>
    <div className="nav-wrapper">
      <a href="myporfolio.com" className="brand-logo">Clicky-Game</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html"><Score /></a></li>
        
      </ul>
    </div>
  </nav>
    )
}

export default Header;