import './App.css';
import About from './Components/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Photos from './Components/Photos'
import Portfolio from './Components/Portfolio'
import React from 'react';
import Button from 'react-bootstrap/Button';
//import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import {HashRouter, Route, NavLink} from 'react-router-dom';
import Particles from 'react-particles-js'

const particlesOptions={
  particles: {
    number: {
      value: 25,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color:{
      value: '#000000'
    },
    line_linked:{
      color: '#000000',
      opacity: 1,
      width: 1
    }
  },
  interactivity:{
      onhover:{
        enable: true,
        mode: 'repulse'
      }
  }
}

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar className = 'main-bar'bg ="dark" expand="md"><div id ="siteName">Bropholio</div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink to="/" style={{textDecoration: "none"}}> <Button variant="light">About</Button> </NavLink>
            <NavLink exact to="/portfolio" style={{textDecoration: "none"}}> <Button  variant="light">Portfolio</Button> </NavLink>
            <NavLink exact to="/photos" style={{textDecoration: "none"}}> <Button variant ="light">Photo Album</Button> </NavLink>
          </Navbar.Collapse>
        </Navbar> 
        <Route path = "/" component = {About}/>
        <Route path = "/portfolio" component = {Portfolio}/>
        <Route path = "/photos" component = {Photos}/>
      </HashRouter>
      <Particles params={particlesOptions}/>
      {/*<footer>
        <div className = "footNm"> Anthony Brophy</div>
        <div className = "footNm"> Cell Phone: 555-555-5555</div>
        <div className = "footNm"> Email: asdf@mail.com</div>
      </footer>*/}
    </div>
  );
}

export default App;
