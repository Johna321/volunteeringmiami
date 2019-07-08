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
                <div className="farg">
                    <div className="container">
                     <div className="row">
                            <div className="gay col-sm-6">
                              this is a column hahahsdahsdagshdgahsd mingrel
                            </div>
                            <div className="gay col-sm-6">
                                this is another column askjdhaksjdhaksjhd
                            </div>
                        </div>
                    </div>
                </div>
                <div className="thing">
                    <div className="container">
                        <ul className="thumbnails">
                            <li className="span4">
                                <div className="thumbnail">
                                    <h3>label</h3>
                                    <p>so i was walking down the street the other day and this guy, this guy says to me hey what the fuck and i said hey man u gaybro and he said no bro so i walked away</p>
                                    <button className="btn btn-dark">test</button>
                                </div>
                            </li>
                
                            <li className="span4">
                                <div className="thumbnail">
                                    <h3>label2</h3>
                                    <p>so i was walking down the street the other day and this guy, this guy says to me hey what the fuc</p>
                                    <button className="btn btn-dark">test</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
