import React, { Component } from 'react';
import './recruitcompany.css';
import whoCanRecruit from './whocanrecruit.jpg';
import businessesJson from '../../../businesses';
import bizPic from '../mainpage/businessphotos/bizimage.jpg';

class RecruitCompany extends Component{
    state={
        Location: '',
        Website: '',

    }
    render(){
        return(
            <div className="RecruitCompany">

                <div className="logo">
                    <img src={whoCanRecruit} alt="graphic" className="infographic" width="100%" height="auto"/>
                    <div className="bot-bar" />
                </div>
                <div className="mainBody">
                    <div className="theForm">
                        <h1>Add a Volunteer Listing</h1>
                        <form>
                            <div className="singleInput">
                                <label for="inputEmail">Location</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Location" onChange={(event)=>{this.setState({SenderEmail: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputAge">Website</label>
                                <input type="text" className="form-control" id="inputName" placeHolder="Website" onChange={(event)=>{this.setState({Name: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputAge" style={{marginTop: -13}}>Volunteers Needed</label>
                                <input type="text" className="form-control" id="inputAge" placeHolder="Volunteers Needed" onChange={(event)=>{this.setState({Age: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Age Range</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Age Range" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Sunday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Sundays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Monday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Mondays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Tuesday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Tuesdays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool" style={{marginTop: -13}}>Wednesday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Wednesdays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool" style={{marginTop: -13}}>Thursday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Thursdays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Friday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Fridays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Saturday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work time on Saturdays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputGPA" style={{marginTop: -13}}>Total Project Service Hours</label>
                                <input type="text" className="form-control" id="inputGPA" placeHolder="Total Project Service Hours" onChange={(event)=>{this.setState({GPA: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputCert">Dates</label>
                                <input type="text" className="form-control" id="inputCert" placeHolder="Dates" onChange={(event)=>{this.setState({Cert: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputTalent">Job Title</label>
                                <input type="text" className="form-control" id="inputTalent" placeHolder="Job Title" onChange={(event)=>{this.setState({Talents: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputTalent">Job Description</label>
                                <input type="text" className="form-control" id="inputTalent" placeHolder="Job Description" onChange={(event)=>{this.setState({Talents: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputLang">GPA</label>
                                <input type="text" className="form-control" id="inputLang" placeHolder="GPA" onChange={(event)=>{this.setState({Languages: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Certification</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Certification"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Talents</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Talents"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Languages</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Languages"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Dress Code</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Dress Code"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage" style={{marginTop: -13}}>Any Further Specifications</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Any additional notes"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                            </div>
                        </form>
                        <button className="btn btn-dark" style={{marginTop: 25}} onClick={()=>{
                            fetch(`http://209.97.154.166/sendgrid?Body=${this.state.Body}&Email=${this.props.email}&Subject=${this.state.Subject}&Name=${this.state.Name}&SenderEmail=${this.state.SenderEmail}}&Age=${this.state.Age}&School=${this.state.School}&GPA=${this.state.GPA}&Cert=${this.state.Cert}&Talents=${this.state.Talents}&Languages=${this.state.Languages}&ContactUs=${this.state.entryPoint}`)
                            .then(res => res.json())
                            .then((result) => {
                                console.log(result);
                                alert('Message sent successfully');
                                window.location.href='/';
                            },(error) => {
                                console.log(error);
                                alert('Error: '+error);
                                window.location.reload();
                            })
                        }}>Submit</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default RecruitCompany;