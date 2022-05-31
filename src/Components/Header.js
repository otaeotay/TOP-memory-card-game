import React from 'react';
import one from '../Images/Numbers/one.svg';
import two from '../Images/Numbers/two.svg';
import three from '../Images/Numbers/three.svg';
import four from '../Images/Numbers/four.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={one} alt="one" className="number-icons"></img>
      <img src={two} alt="two" className="number-icons"></img>
      <div>
        <b>MEMORY CARD GAME</b>
      </div>
      <img src={three} alt="three" className="number-icons"></img>
      <img src={four} alt="four" className="number-icons"></img>
    </header>
  );
};

export default Header;
