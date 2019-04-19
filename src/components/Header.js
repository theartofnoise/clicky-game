import React from 'react';
import Score from './Score';
import './Header.css';

const Header = (props) => {
    return(
        <nav>
    <div class="nav-wrapper">
      <a href="myporfolio.com" class="brand-logo">Clicky-Game</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html"><Score /></a></li>
        
      </ul>
    </div>
  </nav>
    )
}

export default Header;