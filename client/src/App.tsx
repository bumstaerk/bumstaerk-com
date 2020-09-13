import React from 'react';

import { Logo } from 'components/logo';

import Home from 'pages/Home';
import About from 'pages/About';
import Projects from 'pages/Projects';
import Secret from 'pages/Secret';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


function App() {

  return (
    <div className="App">

      <Router>
        <Logo />
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/projects">projects</NavLink>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/.secret" component={Secret} />
      </Router>
           
    </div>
  );
}

export default App;
