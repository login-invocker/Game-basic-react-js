import * as React from 'react'
import './game.css'
const CaculateGame = require('../Game/caculate')

const newGame  = new CaculateGame.Caculate();
newGame.init()
function GameLayout() {
    return (
      <>
      <div className='App'>
          <div className='App-header'>
              
          </div>
          </div>
      </>
  
    );
  }
  
const styles = {
}


  export default GameLayout;
  