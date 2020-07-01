import React, { Component } from 'react';
import './recruitcompany.css';
import whoCanRecruit from './newestinfographic.png';
import background from './background.png';
import businessesJson from '../../../businesses';
import bizPic from '../mainpage/businessphotos/bizimage.jpg';

class RecruitCompany extends Component{
    state={
        Location: '',
        Website: '',
        scrollHeight: ''
    }
    
    render(){
        //const logoOpacity = Math.min(100 / this.state.scrollHeight, 1)
        return(
            <div className="RecruitCompany">
                
                <div className="logo" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={whoCanRecruit} alt="graphic" className="infographic" width="100%" height="auto"/>
                    <img src={background} alt="graphic" className="bannerRecruit" width="100%" height="auto"/>
                    <div className="bot-bar" />
                </div>
                <div className="mainBody">
                    <div className="theForm">
                        <h1>Add a Volunteer Listing</h1>
                        <form>
                            <div className="singleInput">
                                <label for="inputEmail">Location</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Location" onChange={(event)=>{this.setState({SenderEmail: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            This is the location where your volunteer should report to. Please write out your organization’s full address, e.g. <u>123 Main Street, New York, NY 10030</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputAge">Website</label>
                                <input type="text" className="form-control" id="inputName" placeHolder="Website" onChange={(event)=>{this.setState({Name: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Your organization’s website. Preferably, the URL should be concise, e.g. <u>www.volunteeringmiami.org</u>. If not applicable, please input <u>N/A.</u> 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Age Range</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Age range" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            This tells our volunteers what age minimums or maximums your organization accepts. Please input this parameter in the following example’s format: <u>16-18 y/o</u>. If your organization only has an age minimum, please input this parameter like so: <u>16 y/o and older</u>. If not applicable, please input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Sunday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Sundays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Here, indicate the day’s time the volunteer will need to spend volunteering on Sundays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Sunday, input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Monday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Mondays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Here, indicate the day’s time the volunteer will need to spend volunteering on Mondays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Monday, input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Tuesday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Tuesdays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, indicate the day’s time the volunteer will need to spend volunteering on Tuesdays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Monday, input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool" style={{marginTop: -13}}>Wednesday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Wednesdays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, indicate the day’s time the volunteer will need to spend volunteering on Wednesdays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Monday, input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool" style={{marginTop: -13}}>Thursday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Thursdays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, indicate the day’s time the volunteer will need to spend volunteering on Thursdays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Monday, input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Friday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Fridays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, indicate the day’s time the volunteer will need to spend volunteering on Fridays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Monday, input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool" >Saturday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work time on Saturdays" onChange={(event)=>{this.setState({School: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, indicate the day’s time the volunteer will need to spend volunteering on Saturdays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Monday, input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputCert">Dates</label>
                                <input type="text" className="form-control" id="inputCert" placeHolder="Dates" onChange={(event)=>{this.setState({Cert: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, input when you want the volunteer to start and finish volunteering. Please input the dates as <u>start month/start day/start year - end month/end day/end year</u>; for example, <u>10/12/20 - 6/4/21</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputTalent">Job Title</label>
                                <input type="text" className="form-control" id="inputTalent" placeHolder="Job title" onChange={(event)=>{this.setState({Talents: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        If applicable, this is where you state what the official title of your volunteer will be at your organization, e.g. <u>Caretaker</u>. If job title doesn’t apply, simply write <u>Volunteer</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputTalent">Job Description</label>
                                <input type="text" className="form-control" id="inputTalent" placeHolder="Job description" onChange={(event)=>{this.setState({Talents: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, input the kind of tasks your volunteer will need to perform. Please mention specific activities or projects. For example: <u>At (organization name), we aid in the protection of our local wildlife. We regularly take excursions onto polluted sites such as bays and marinas to collect waste and to preserve nature. However, our work is not limited to the physical; we also do a lot of fundraising, so please be ready to put your best side forward.</u> 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputLang">GPA</label>
                                <input type="text" className="form-control" id="inputLang" placeHolder="GPA" onChange={(event)=>{this.setState({Languages: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Here, input what grade point average minimum your organization is looking for in volunteers. For example: <u>2.5 and higher</u>. If this category does not apply, please input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Certification</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Certification"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Here, input any certifications your organization requires your volunteer to have, e.g. <u>volunteering number</u> or <u>CPR training</u>. If this category does not apply, please input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Skills</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Skills"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        This category is for skills or miscellaneous talents that your organization looks for in a volunteer. These are by no means mandatory and can include a variety of specifications. Skills can be those that are learned or those which volunteers are savvy to, e.g. <u>chess, programming</u> or <u>time management, leadership</u>. If this category does not apply, please input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Languages</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Languages"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, if your volunteer is required to have a proficiency in a foreign language(s), please input what language(s) a volunteer is expected to know, e.g. <u>English, Spanish, and American Sign Language</u>. If not applicable, please input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Dress Code</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Dress code"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            If your organization requires a certain dress code input it here, e.g. <u>business casual</u>. If not applicable, please input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage" style={{marginTop: -13}}>Any Further Specifications</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Any additional notes"onChange={(event)=>{this.setState({Body: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Here, list any requirements missing in the categories above. If not applicable, please input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
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
    componentDidMount(){
        window.onscroll = () =>{
            this.setState({scrollHeight: window.scrollY});
        }
    }
}

export default RecruitCompany;