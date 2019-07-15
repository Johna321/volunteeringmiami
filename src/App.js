import React from 'react';
import './App.css';
import MainPage from './components/pages/mainpage/mainpage.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/about/about.jsx';
import logo from './components/pages/volmiamilogo.png';



function App() {
  return (
        <Router>
          <div className="App">
            <div className="top">
              <div className="row">
                <div className="col">
                  <a href="/" className="link">Home</a>
                  <a href="/about" className="link">About</a>
                  <a href="/registercomp" className="link">Register</a>
                  <a href="/help" className="link">Help</a>
                </div>
              </div>
            </div>
            <div className="logo">
              <img 
                src={logo}
                className="app-logo"
                alt="volunteering miami logo"
                height="150px"
                width="500px" />
            </div>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/about" exact component={About} />
            </Switch>
          </div>
        </Router>
  );
}

export default App;
