import React, {Component} from 'react';
import Game from './Components/Game'
import Instructions from './Components/Instructions'
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      highLevel: 0,
      currentLevel: 0,
    }
  }

  render(){
    return (
      <div>
        <Header />
        <Game level = {this.state.currentLevel}/>
        <Instructions />
        <Footer />
      </div>
    )
  }
}

export default App;
