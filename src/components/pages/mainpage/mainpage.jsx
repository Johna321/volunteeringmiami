import React, { Component } from 'react';
import './mainpage.css';
import bizpic from './business photos/bizimage.jpg';
import mcdonalds from './business photos/mcdonalds.jpg';
import cofm from './business photos/cofm.png';
import logo from '../../../volmiamilogo.png';
import arrow from '../../../arrow.png'
import banner from './banner.jpg';



class MainPage extends Component{
    
    state = {
        render: true,
        1: {
            expanded: false,
            name:'Business Name 1',
            photo: {bizpic},
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: 'We need volunteers!',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            dayToDayHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        2: {
            expanded: false,
            name:'Business Name 2',
            photo: {mcdonalds},
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: 'Please volunteer for us.',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            dayToDayHours: '',
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
            photo: './business photos/bizimage.jpg',
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            dayToDayHours: '',
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
            photo: './business photos/bizimage.jpg',
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            dayToDayHours: '',
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
            photo: './business photos/bizimage.jpg',
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            dayToDayHours: '',
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
            <img src={cofm} className="rounded float-right .img-thumbnail bizpic"alt="pic of business"/>
        <h1>{this.state[id].name}</h1>
            <div className="panel-body">
        <h5>{this.state[id].hours}</h5>
                {this.state[id].summary}
                <div className="arrowdropdown">
                    <input type="image" src={arrow} width="24" height="24" onClick={() => { this.applyButton(id) }} />
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
            <h5>Day-to-Day Hours: {this.state[id].dayToDayHours}</h5>
            <h5>Credentials: {this.state[id].credentials}</h5>
            <h6>GPA: {this.state[id].gpa}</h6>
            <h6>Certification: {this.state[id].certficiation}</h6>
            <h6>Talents: {this.state[id].talents}</h6>
            <h6>Languages: {this.state[id].languages}</h6>
            <h5>Dress Code: {this.state[id].dressCode}</h5>
            <h5>Any Further Specifications: {this.state[id].anyFurtherSpecifications}</h5>
            </div>
            </div>) : (<p></p>)}
            </div>
        );
    }
    render(){
        return(
            <div className="parent">
                <div className="logo">
                    <img src={banner} alt="banner" width="100%" height="900vh" className="banner"/>
                    <img src={logo} alt="logo" className="app-logo"/>
                </div>
                    <div className="body">
                        <div className="container">
                            <div className="panel-group">
                                { this.expandedInfo('1') }
                                { this.expandedInfo('2') }
                                { this.expandedInfo('3') }
                                { this.expandedInfo('4') }
                                { this.expandedInfo('5') }
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
