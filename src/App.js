import React from 'react';
import './App.css';
import MainPage from './components/pages/mainpage/mainpage.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/about/about.jsx';
import logo from './volmiamilogo.png';
import ContactUs from './components/pages/contact-us/contact-us.jsx';
import Test from './components/functionalities/test.jsx';



function App() {
  return (
        <Router>
          <div className="App">
            <div className="navigationbar">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><b>VM</b></a>
                <ul className="navbar-nav bd-navbar flex-row">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/contact-us">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            
            
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/about" exact component={About} />
              <Route path="/contact-us" exact component={ContactUs}/>
              <Route path="/test" exact component={Test} />
            </Switch>
          </div>
      </Router>
  );
}

export default App;
