import React, { Component } from 'react';
import './mainpage.css';
import bizpic from './bizimage.jpg';
import McDonalds from './mcdonalds.jpg';
import logo from '../../../volmiamilogo.png';


class MainPage extends Component{
    render(){
        return(
            <div className="parent">
                <div className="logo">
                    <img 
                        src={logo}
                        className="app-logo"
                        alt="volunteering miami logo"
                        height="65%"
                        width="65%"/>
                </div>
                    <div className="body">
                        <div className="container">
                            <div className="panel-group">
                                
                                <div className="panel panel-default">
                                    <img src={McDonalds} className="rounded float-right .img-thumbnail bizpic"alt="pic of business"/>
                                    <h1>McDonalds</h1>
                                    <div className="panel-body">
                                        <h5>6-7 hours</h5>
                                        you make burger for us :)
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business"/> 
                                    <h1>random business 2</h1>
                                    <div className="panel-body">
                                        (brief summary)
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                    <h1>random business 3</h1>
                                    <div className="panel-body">
                                        (brief summary)
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                    <h1>random business 4</h1>
                                    <div className="panel-body">
                                        (brief summary)
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                    <h1>random business 5</h1>
                                    <div className="panel-body">
                                        (brief summary)
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
