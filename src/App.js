import React from 'react'
import logo from './logo.svg';
import './App.scss';
import  Home  from "./screens/Home";
import  About  from "./screens/About";
import  Users  from "./screens/Users";
import {
  BrowserRouter as Router,
  Switch,
  Link
 } from "react-router-dom";
import { 
  Navbar,
  Form,
 } from "react-bootstrap";

function App() { 

  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
 

  return (
    <div className="App">
      <>
      <Navbar bg={theme}> 
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{' '} React Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Dark Mode" 
              onChange={toggleTheme}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>      
      </>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <nav>
            <ul className="menu">
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
