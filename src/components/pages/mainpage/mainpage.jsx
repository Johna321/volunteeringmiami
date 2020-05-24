import React, { Component } from 'react';
import './mainpage.css';
import logo from '../../../volmiamisvg2.svg';
import arrow from '../../../arrow.png'
import banner from './banner.jpg';
import {Link} from 'react-router-dom';
import businessesJson from '../../../businesses.js';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';

class MainPage extends Component{

    state = {
        render: true,
        scrollHeight: 0,
        dropdownToggled: false,
        filterBy: 'New',
        businesses: businessesJson()
    };
    
    applyButton = (givenIndex) =>{
        let index = this.state.businesses.findIndex(obj => obj.id === givenIndex);
        console.log(this.state.businesses[index]);
        if (this.state.businesses[index].expanded === false){
            this.state.businesses[index].expanded = true;
            this.state.businesses[index].spun = true
            this.setState({render: true});
        }
        else{
            this.state.businesses[index].expanded = false;
            this.state.businesses[index].spun = false
            this.setState({render: true});
        }
    }

    toggleDropdown = () =>{
        if (this.state.dropdownToggled === false){
            this.setState({dropdownToggled: true});
        }
        else{
            this.setState({dropdownToggled: false});
        }
    }

    render(){
        const logoOpacity = Math.min(100 / this.state.scrollHeight, 1)
        
        var show = (this.state.toggleDropdown==="true") ? 'show' : 'noshow';
            return(
                <div className="parent">
                    <div className="logo">
                        <div className="bot-bar" />
                        <img src={banner} alt="background" className="banner" />
                        <img src={logo} alt="logo" style = {{opacity: logoOpacity}} className="app-logo"/>
                        
                    </div>
                    <div className="scrollTo">
                            <a id="body" />
                    </div>
                        <div className="body">
                            <a id="body" />
                            <div className="sortBy">
                                    <ButtonDropdown isOpen={this.state.dropdownToggled} toggle={this.toggleDropdown}>
                                        <DropdownToggle caret color="light">
                                            Sort By:
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={()=>{this.setState({businesses: this.state.businesses.sort((a, b) => {return a.id - b.id})})}}>New</DropdownItem>
                                            <DropdownItem onClick={()=>{this.setState({businesses: this.state.businesses.sort((a, b) => {return a.id - b.id}).reverse()})}}>Old</DropdownItem>
                                            <DropdownItem onClick={()=>{this.setState({businesses: this.state.businesses.sort((a, b) => a.name.localeCompare(b.name))})}}>A to Z</DropdownItem>
                                            <DropdownItem onClick={()=>{this.setState({businesses: this.state.businesses.sort((a, b) => a.name.localeCompare(b.name)).reverse()})}}>Z to A</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                            </div>
                            <div className="container">
                                <div className="panel-group">
                                    {this.state.businesses.map(obj=>{
                                        return (
                                            <div>
                                                <div className="panel panel-default">
                                                    
                                                    <img src={obj.photo} className="rounded float-right .img-thumbnail bizpic" alt="pic of business"/>
                                                    
                                                    <h1>{obj.name}</h1>
                                                    <div className="panel-body">
                                                        <h5>{obj.hours}</h5>
                                                        {obj.summary}
                                                        <div className="arrowdropdown">
                                                            <input className={obj.spun ? 'arrowhead' : 'arrowheadspun'} type="image" src={arrow} alt="arrow" width="35" height="35" onClick={() => { this.applyButton(obj.id) }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                {obj.expanded !== false ? (
                                                <div className="panel panel-default" style={{marginLeft:100, marginTop: -80, paddingTop:0, zIndex: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, width:'86.5%'}}>
                                                    <div className="moreInfo" >
                                                        <div className="category">
                                                            <h5>Location: </h5><div className="answer">{obj.location}</div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Website: </h5><div className="answer">{obj.website}</div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Age Range: </h5><div className="answer">{obj.ageWindow}</div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Daily Service Hours: </h5><div className="answer">{obj.dailyServiceHours}</div>
                                                        </div>
                                                        <div className="category">
                                                            <div className="credentials">
                                                                <div className="subCategory"><h6>Sunday: </h6><div className="subAnswer">{obj.Sunday}</div></div>
                                                                <div className="subCategory"><h6>Monday: </h6><div className="subAnswer">{obj.Monday}</div></div>
                                                                <div className="subCategory"><h6>Tuesday: </h6><div className="subAnswer">{obj.Tuesday}</div></div>
                                                                <div className="subCategory"><h6>Wednesday: </h6><div className="subAnswer">{obj.Wednesday}</div></div>
                                                                <div className="subCategory"><h6>Thursday: </h6><div className="subAnswer">{obj.Thursday}</div></div>
                                                                <div className="subCategory"><h6>Friday: </h6><div className="subAnswer">{obj.Friday}</div></div>
                                                                <div className="subCategory"><h6>Saturday: </h6><div className="subAnswer">{obj.Saturday}</div></div>
                                                            </div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Total Project Service Hours: </h5><div className="answer">{obj.totalProjectServiceHours}</div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Dates: </h5><div className="answer">{obj.dates}</div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Job Title: </h5><div className="answer">{obj.jobTitle}</div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Job Description: </h5><div className="answer">{obj.jobDescription}</div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Credentials: </h5><div className="answer">{obj.credentials}</div>
                                                        </div>
                                                        <div className="credentials">
                                                            <div className="subCategory"><h6>GPA: </h6><div className="subAnswer">{obj.gpa}</div></div>
                                                            <div className="subCategory"><h6>Certification: </h6><div className="subAnswer">{obj.certficiation}</div></div>
                                                            <div className="subCategory"><h6>Skills: </h6><div className="subAnswer">{obj.skills}</div></div>
                                                            <div className="subCategory"><h6>Language: </h6><div className="subAnswer">{obj.languages}</div></div>
                                                        </div>
                                                        <div className="category">
                                                            <h5>Dress Code:</h5> <div className="answer">{obj.dressCode}</div>
                                                        </div>
                                                        <h5>Any Further Specifications:</h5> <div className="answer">{obj.anyFurtherSpecifications}</div>
                                                        <Link to={`business?ItemId=${obj.id}`}>
                                                            <button type="button" className="btn btn-secondary apply-button">Apply</button>
                                                        </Link>
                                                    </div>
                                                </div>) : (<p></p>)}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    
                </div>
            );
    }
    componentDidMount(){
        window.onscroll = () =>{
            this.setState({scrollHeight: window.scrollY});
        }
    }
}


export default MainPage;
