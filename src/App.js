import React from 'react'
import logo from './logo.svg';
import './App.scss';
import { useDarkMode } from "./useDarkMode";
import  Home  from "./screens/Home";
import  About  from "./screens/About";
import  Users  from "./screens/Users";

import {
  BrowserRouter as Router,
  Switch,
 } from "react-router-dom";
import { 
  Navbar,
  Form,
  Badge,
  Nav
 } from "react-bootstrap";

function App() { 

  const[theme, toggleTheme] = useDarkMode();

  //const themeMode = theme === 'light' ? 

  return (
    <div className="App">
      <>
      <Navbar bg={theme} variant={theme} > 
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
              label={(<Badge variant={theme} >{theme ==='dark' ? 'Dark':'Light'} Mode</Badge>)}
              onChange={toggleTheme} 
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>      
      </>
      <Router>
        <Nav className="justify-content-end" defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav.Item>
        </Nav>
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

      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
