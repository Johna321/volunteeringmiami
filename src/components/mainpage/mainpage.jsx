import React, { Component } from 'react';
import logo from './volmiamilogo.png';
import './mainpage.css';
import bizpic from './bizimage.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class MainPage extends Component{
    render(){
        return(
            <div className="parent">
             <div className="topbord">hahahaha comic sans</div>
                <div className="main">
                    <div className="top">
                        <div className="row">
                            <div className="col">
                                <Router>
                                    <Link to={'/about/'} />
                                    <a href="/help" className="link">Help</a>
                                    <a href="/registercomp" className="link">Register</a>
                                </Router>
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
                    <div className="body">
                        <div className="container">
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <h1>random business</h1>
                                    <div className="panel-body">
                                        <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                        (brief summary)
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <h1>random business 2</h1>
                                    <div className="panel-body">
                                        <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                        (brief summary)
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <h1>random business 3</h1>
                                    <div className="panel-body">
                                        <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                        (brief summary)
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <h1>random business 4</h1>
                                    <div className="panel-body">
                                        <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                        (brief summary)
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <h1>random business 5</h1>
                                    <div className="panel-body">
                                        <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                        (brief summary)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="functionality">
                    <h6>inputs</h6>
                    <form onSubmit={this.handleSubmit}>
                        company name
                        <input type="text" name="compname" onChange={this.compName} />
                        company description
                        <input type="text" name="compdesc" onChange={this.compDesc} />
                        <input type="submit" value="submit" />
                    </form>
                    
                </div>
            </div>
        );
    }

    
}

export default MainPage;
