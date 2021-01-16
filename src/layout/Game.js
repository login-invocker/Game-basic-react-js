import * as React from 'react'

const CaculateGame = require('../Game/caculate')

const newGame  = new CaculateGame.Caculate();
newGame.init()
function GameLayout() {
    return (
      <>
          <div>
       
                <h2>game</h2>
          </div>
      </>
  
    );
  }
  
  export default GameLayout;
  