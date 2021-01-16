import { render } from "@testing-library/react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeLayout from '../layout/Home'
import GameLayout from '../layout/Game'

const RouterConfig =  () =>{
    return (

        <Switch>
            <Route path='/Setting'>
            <HomeLayout />
            </Route>

            {/* /game lay out */}
            <Route path="/game">
            <GameLayout />
            </Route>
        </Switch>
     
    )
}

export default RouterConfig;