import React, { Component } from 'react';
import './mainpage.css';
import logo from '../../../volmiamilogo.png';
import arrow from '../../../arrow.png'
import banner from './banner.jpg';
import {Link} from 'react-router-dom';
import businessesJson from '../../../businesses.js';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
                        <img src={banner} alt="banner" width="100%" height="900vh" className="banner"/>
                            <div className="scrollButton">
                                <button className="btn btn-secondary btn-lg">See Listings</button>
                            </div>
                        <img src={logo} alt="logo" style = {{opacity: logoOpacity}} className="app-logo"/>
                        <div className="bot-bar" />
                    </div>
                    
                        <div className="body">
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
                                                    <div className="panel panel-default" onClick={() => { this.applyButton(obj.id) }} >
                                                        <img src={obj.photo} className="rounded float-right .img-thumbnail bizpic"alt="pic of business"/>
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
                                                            <h5>Location: {obj.location}</h5>
                                                            <h5>Website: {obj.website}</h5>
                                                            <h5>Volunteers Needed: {obj.volunteersNeeded}</h5>
                                                            <h5>Age Range: {obj.ageWindow}</h5>
                                                            <h5>Daily Service Hours: {obj.dailyServiceHours}</h5>
                                                            <div className="credentials">
                                                                <p>Sunday: {obj.Sunday}</p>
                                                                <p>Monday: {obj.Monday}</p>
                                                                <p>Tuesday: {obj.Tuesday}</p>
                                                                <p>Wednesday: {obj.Wednesday}</p>
                                                                <p>Thursday: {obj.Thursday}</p>
                                                                <p>Friday: {obj.Friday}</p>
                                                                <p>Saturday: {obj.Saturday}</p>
                                                            </div>
                                                            <h5>Total Project Service Hours: {obj.totalProjectServiceHours}</h5>
                                                            <h5>Dates: {obj.dates}</h5>
                                                            <h5>Job Title: {obj.jobTitle}</h5>
                                                            <div className="credentials">
                                                                <p>Job Description: {obj.jobDescription}</p>
                                                            </div>
                                                            <h5>Credentials: {obj.credentials}</h5>
                                                            <div className="credentials">
                                                                <p>GPA: {obj.gpa}</p>
                                                                <p>Certification: {obj.certficiation}</p>
                                                                <p>Talents: {obj.talents}</p>
                                                                <p>Languages: {obj.languages}</p>
                                                            </div>
                                                            <h5>Dress Code: {obj.dressCode}</h5>
                                                            <h5>Any Further Specifications: {obj.anyFurtherSpecifications}</h5>
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
