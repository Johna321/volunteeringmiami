import React, { Component } from 'react';
import './mainpage.css';
import bizpic from './bizimage.jpg';
import McDonalds from './mcdonalds.jpg';
import logo from '../../../volmiamilogo.png';


class MainPage extends Component{
    state = {
        expanded: false
    }
    applyButton = () =>{
        if (this.state.expanded === false){
            this.setState({expanded: true});
        }
        else{
            this.setState({expanded: false});
        }
    }
    expandedInfo(){
        if (this.state.expanded === false){
            return <p></p>;
        }
        else{
            return <p>something</p>
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
                                        <span>{ this.expandedInfo() }</span>
                                        <button onClick={ this.applyButton }>button</button>
                                    </div>
                                    <div className="moreInfo">
                                        <h5>Location:</h5>
                                        <h5>Volunteers Needed:</h5>
                                        <h5>Daily Service Hours:</h5>
                                        <h5>Total Project Service Hours:</h5>
                                            <h6>Day-to-Day Hours:</h6>
                                            <h6>Total Hours Alloted:</h6>
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
