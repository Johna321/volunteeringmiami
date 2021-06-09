import React, {useState} from 'react';
import './App.css';
import MainPage from './components/pages/mainpage/mainpage.jsx';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import About from './components/pages/about/about.jsx';
import ContactUs from './components/pages/contact-us/contact-us.jsx';
import bizContactUs from './components/pages/business-contact/bizContactHub';
import navbarLogo from './navbarlogo.ico';
import navpopup from './newnavpopup.png';
import closeButton from './newclose.png';
import RecruitCompany from './components/pages/recruit/recruitcompany';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, NavbarText} from 'reactstrap';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Amplify, { Auth } from "aws-amplify";
import {Environment} from './environment.js';
import Donate from './components/pages/donate/donate.jsx';



Amplify.configure(Environment);



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [popUpClosed, setPopUpOpen] = useState(false);
  const togglePopUp = () => setPopUpOpen(!popUpClosed);
  
  
  return (
        <Router>
          <div className="App">
            {isMobile ? 
            <div className="popupcontainer">
              {/*{popUpClosed ? <div></div> : 
              <div className="popup">
                <div className="popupdivider" />
                <div className="popupbody">
                  <b>Volunteering Miami</b> is primarily a desktop application. <br /><br />
                  While you can see which organizations are looking for volunteers, to actually apply or create a volunteer recruitment listing, you have to visit our site from a computer. <br /> <br />
                  Please feel free to browse our site regardless. <br /><br />
                  Thank you for choosing us, and happy volunteering!
                </div>
                <div className="okbutton">
                  <button className="btn btn-secondary" onClick={togglePopUp}>
                    Ok
                  </button>
                </div>
              </div>
              }*/}
            </div> : 
            <div>
              
            </div>}
            
            <div className={isMobile && window.location.pathname == '/' ? "navigationbarwhite" : "navigationbar"} style={{zIndex: 3}}>
              <Navbar color='dark' dark expand='md'>
               <NavbarBrand><Link to={{
                  pathname: '/'
                }}><a className="navbar-brand" ><img src={navbarLogo} height="30" className="navbarLogo"/></a></Link></NavbarBrand>
                <NavbarToggler className="navbarDropdown" onClick={toggle}></NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <Link to='/' style={{textDecorationLine: 'none'}}><NavLink style={{color: 'white'}}>Home</NavLink></Link>
                    </NavItem>
                    {!isMobile ? <NavItem>
                      <NavLink style={{color: 'white'}} href="/#bot-bar">Volunteer Now</NavLink>
                    </NavItem> : ''}
                    <NavItem>
                      <Link to='/recruit' style={{textDecorationLine: 'none'}}><NavLink style={{color: 'white'}} href="/recruit">Recruit Volunteers</NavLink></Link>
                    </NavItem>
                    <NavItem>
                      <Link to='/about' style={{textDecorationLine: 'none'}}><NavLink style={{color: 'white'}} href="/about">About</NavLink></Link>
                    </NavItem>
                    <NavItem>
                      <Link to='/donate' style={{textDecorationLine: 'none'}}><NavLink style={{color: 'white'}} href="/donate">Donate</NavLink></Link>
                    </NavItem>
                    <NavItem>
                      <Link to='/contact-us' style={{textDecorationLine: 'none'}}><NavLink style={{color: 'white'}} href="/contact-us">Contact</NavLink></Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
            
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/about" exact component={About} />
              <Route path="/contact-us" exact component={ContactUs}/>
              <Route path="/business" component={bizContactUs} />
              <Route path="/recruit" exact component={RecruitCompany} />
              <Route path="/donate" exact component={Donate} />
              
            </Switch>

            <div className="footerBottom">
                <div className="footerContact">
                  Copyright © 2020 Alexandr Kim, John Aitken
                </div>
          </div>
          </div>
          
      </Router>
  );
}

export default App;
