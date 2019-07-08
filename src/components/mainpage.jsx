import React, { Component } from 'react';
import logo from './volmiamilogo.png';
import './mainpage.css';

class MainPage extends Component{
    render(){
        return(
            <div className="parent">
                <div className="logo">
                    <img 
                        src={logo}
                        className="app-logo"
                        alt="volunteering miami logo"
                        height="150px"
                        width="500px" />
                </div>
                <div className="textbox">
                    <button className="btn btn-dark">hey</button>
                </div>
            </div>
        );
    }
}

export default MainPage;
