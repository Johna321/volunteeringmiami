import React, { Component } from 'react';
import logo from './volmiamlogo.svg';
import './mainpage.css';

class MainPage extends Component{
    render(){
        return(
            <div className="parent">
                <div className="main">
                    <img 
                        src={logo}
                        className="app-logo"
                        alt="volunteering miami logo"
                        height="150px"
                        width="500px" />
                </div>
            </div>
        );
    }
}

export default MainPage;