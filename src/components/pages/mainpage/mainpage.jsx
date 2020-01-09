import React, { Component } from 'react';
import './mainpage.css';
import logo from '../../../volmiamilogo.png';
import arrow from '../../../arrow.png'
import banner from './banner.jpg';
import {Link} from 'react-router-dom';

class MainPage extends Component{

    state = {
        render: true,
        scrollHeight: 0,
        filterBy: 'new',
        1: {
            expanded: false,
            name:'Generic Corpo Inc.',
            email: '',
            photo: require('./businessphotos/bizimage.jpg'),
            hours:'100 hours',
            summary:'We are dedicated to helping.',
            location: '7865 SW 76 AVE',
            volunteersNeeded: '12',
            dailyServiceHours: '10',
            totalProjectServiceHours: '100',
            credentials: '',
            gpa: '3.5 or above',
            certficiation: 'Registered with MDCPS Volunteering',
            talents: 'Problem-solver, trombone player',
            languages: 'English, Esperanto, French',
            dressCode: 'Khaki cargo shorts, red shirt',
            anyFurtherSpecifications: 'Be on time.'
        },
        2: {
            expanded: false,
            name:'Business Name 2',
            email: '',
            photo: require('./businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        3: {
            expanded: false,
            name:'Business Name 3',
            email: '',
            photo: require('./businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        4: {
            expanded: false,
            name:'Business Name 4',
            email: '',
            photo: require('./businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        5: {
            expanded: false,
            name:'Business Name 5',
            email: '',
            photo: require('./businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        6: {
            expanded: false,
            name:'Business Name 6',
            email: '',
            photo: require('./businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        7: {
            expanded: false,
            name:'Business Name 7',
            email: '',
            photo: require('./businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        8: {
            expanded: false,
            name:'Business Name 8',
            email: '',
            photo: require('./businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
    }
    
    applyButton = (id) =>{
        if (this.state[id].expanded === false){
            this.state[id].expanded = true;
            this.setState({render: true});
        }
        else{
            this.state[id].expanded = false;
            this.setState({render: true});
        }
    }

    expandedInfo(id){
        return (
            <div>
            <div className="panel panel-default">
            <img src={this.state[id].photo} className="rounded float-right .img-thumbnail bizpic"alt="pic of business"/>
        <h1>{this.state[id].name}</h1>
            <div className="panel-body">
        <h5>{this.state[id].hours}</h5>
                {this.state[id].summary}
                <div className="arrowdropdown">
                    <input type="image" src={arrow} alt="arrow" width="24" height="24" onClick={() => { this.applyButton(id) }} />
                </div>
            </div>
            </div>
            {this.state[id].expanded !== false ? (
            <div className="panel panel-default" style={{marginLeft:100, marginTop: -80, paddingTop:0, zIndex: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, width:'86.5%'}}>
            <div className="moreInfo" >
            <h5>Location: {this.state[id].location}</h5>
            <h5>Volunteers Needed: {this.state[id].volunteersNeeded}</h5>
            <h5>Daily Service Hours: {this.state[id].dailyServiceHours}</h5>
            <h5>Total Project Service Hours: {this.state[id].totalProjectServiceHours}</h5>
            <h5>Credentials: {this.state[id].credentials}</h5>
            <div className="credentials">
            <h6>GPA: {this.state[id].gpa}</h6>
            <h6>Certification: {this.state[id].certficiation}</h6>
            <h6>Talents: {this.state[id].talents}</h6>
            <h6>Languages: {this.state[id].languages}</h6>
            </div>
            <h5>Dress Code: {this.state[id].dressCode}</h5>
            <h5>Any Further Specifications: {this.state[id].anyFurtherSpecifications}</h5>
            <Link to={`business?ItemId=${id}`}>
                <button type="button" className="btn btn-secondary apply-button">Apply</button>
            </Link>
            </div>
            </div>) : (<p></p>)}
            </div>
        );
    }

    render(){
    
        const bizPanels = [
            this.expandedInfo('1'), this.expandedInfo('2'), this.expandedInfo('3'), this.expandedInfo('4'), this.expandedInfo('5'),
            this.expandedInfo('6'), this.expandedInfo('7'), this.expandedInfo('8')
        ];
        const logoOpacity = Math.min(100 / this.state.scrollHeight, 1)
        if (this.state.filterBy === 'new'){
            return(
                <div className="parent">
                    <div className="logo">
                        <img src={banner} alt="banner" width="100%" height="900vh" className="banner"/>
                        <img src={logo} alt="logo" style = {{opacity: logoOpacity}} className="app-logo"/>
                        <div className="bot-bar" />
                    </div>
                    
                        <div className="body">
                            
                            <div className="container">
                                <div className="sortBy">
                                    <button className="btn btn-light" style={{float: "left", fontWeight: 500}} onClick={()=>{
                                        this.setState({filterBy: 'old'})
                                    }}>Sort by Oldest</button>
                                </div>
                                <div className="panel-group">
                                    {bizPanels}
                                </div>
                            </div>
                        </div>
                    
                </div>
            );
        }
        else if (this.state.filterBy === 'old'){
            return(
                <div className="parent">
                    <div className="logo">
                        <img src={banner} alt="banner" width="100%" height="900vh" className="banner"/>
                        <img src={logo} alt="logo" style = {{opacity: logoOpacity}} className="app-logo"/>
                        <div className="bot-bar" />
                    </div>
                        <div className="body">
                            
                            <div className="container">
                            <div className="sortBy">
                                <button className="btn btn-light" style={{float: "left", fontWeight: 500}} onClick={()=>{
                                    this.setState({filterBy: 'new'})
                                }}>Sort by Newest</button>
                            </div>
                                <div className="panel-group">
                                    {bizPanels.reverse()}
                                </div>
                            </div>
                        </div>
                    
                </div>
            );
        }
    }
    componentDidMount(){
        window.onscroll = () =>{
            this.setState({scrollHeight: window.scrollY});
        }
    }
}


export default MainPage;
