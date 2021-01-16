import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RouterConfig from './config/router'

function App() {
  return (
    <Router>
    <div >
      

      <Link to='/game'>Go to Game</Link>
      <Link to='/Setting'>setting game</Link>

      <RouterConfig/>

      
    </div>
    </Router>
  );
}

export default App;
