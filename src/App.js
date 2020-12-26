import logo from './logo.svg';
import './App.css';
import  Home  from "./screens/Home";
import  About  from "./screens/About";
import  Users  from "./screens/Users";
import {
  BrowserRouter as Router,
  Switch,
  Link
 } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Router path="/about">
              <About />
            </Router>
            <Router path="/users">
              <Users />
            </Router>
            <Router path="/">
              <Home />
            </Router>
          </Switch>
        </Router>
        </header> 
    </div>
  );
}

export default App;
