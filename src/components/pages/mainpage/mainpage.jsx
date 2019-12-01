import React, { Component } from 'react';
import './mainpage.css';
import bizpic from './bizimage.jpg';
import McDonalds from './mcdonalds.jpg';
import logo from '../../../volmiamilogo.png';
import arrow from '../../../arrow.png'


class MainPage extends Component{
    state = {
        expanded: false,
        rotation: 0
    }
    
    applyButton = () =>{
        if (this.state.expanded === false){
            this.setState({expanded: true});
            this.setState({rotation: 180})
        }
        else{
            this.setState({expanded: false});
            this.setState({rotation: 0});
        }
    }
    expandedInfo(){
        if (this.state.expanded === false){
            return <p></p>;
        }
        else{
            return(<div className="moreInfo">
            <h5>Location:</h5>
            <h5>Volunteers Needed:</h5>
            <h5>Daily Service Hours:</h5>
            <h5>Total Project Service Hours:</h5>
            <h5>Day-to-Day Hours:</h5>
            <h5>Credentials:</h5>
            <h6>GPA:</h6>
            <h6>Certification</h6>
            <h6>Talents:</h6>
            <h6>Languages:</h6>
            <h5>Dress Code:</h5>
            <h5>Any Further Specifications:</h5>

        </div>);
        }
    }
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
                                    <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business"/>
                                    <h1>random business 1</h1>
                                    
                                    <div className="panel-body">
                                        <h5>however many hours</h5>
                                        (brief summary)
                                        <div className="arrowdropdown">
                                            <input type="image" src={arrow} width="24" height="24" onClick={ this.applyButton } />
                                        </div>
                                        <span>{ this.expandedInfo() }</span>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business"/> 
                                    <h1>random business 2</h1>

                                    <div className="panel-body">
                                        (brief summary)
                                        <div className="arrowdropdown">
                                            <input type="image" src={arrow} width="24" height="24" onClick={ this.applyButton } />
                                        </div>
                                        <span>{ this.expandedInfo() }</span>
                                    </div>
                                    
                                </div>
                                <div className="panel panel-default">
                                    <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                    <h1>random business 3</h1>
                                    <div className="panel-body">
                                        (brief summary)
                                        <div className="arrowdropdown">
                                            <input type="image" src={arrow} width="24" height="24" onClick={ this.applyButton } />
                                        </div>
                                        <span>{ this.expandedInfo() }</span>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                    <h1>random business 4</h1>
                                    <div className="panel-body">
                                        (brief summary)
                                        <div className="arrowdropdown">
                                            <input type="image" src={arrow} width="24" height="24" onClick={ this.applyButton } />
                                        </div>
                                        <span>{ this.expandedInfo() }</span>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <img src={bizpic} className="rounded float-right .img-thumbnail bizpic"alt="pic of business" />
                                    <h1>random business 5</h1>
                                    <div className="panel-body">
                                        (brief summary)
                                        <div className="arrowdropdown">
                                            <input type="image" src={arrow} width="24" height="24" onClick={ this.applyButton } />
                                        </div>
                                        <span>{ this.expandedInfo() }</span>
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
