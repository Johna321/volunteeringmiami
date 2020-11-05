import React, { Component } from 'react';
import './recruitcompany.css';
import whoCanRecruitMobile from './infographicnewrevised.png';
import whoCanRecruit from './infographicrevised.png';
import background from './background.png';
import businessesJson from '../../../businesses';
import bizpic from '../mainpage/businessphotos/bizimage.jpg'; 
import arrow from "../../../arrow.png";
import {
    isMobile,
  } from "react-device-detect";


class RecruitCompany extends Component{
    state={
        CompanyName: '',
        Location: '',
        CompanyDescription: '',
        Email: '',
        Website: '',
        VolunteersNeeded: '',
        AgeRange: '',
        Dates: '',
        Sunday: '',
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: '',
        JobTitle: '',
        VolunteeringSpace: '',
        JobDescription: '',
        GPA: '',
        Certifications: '',
        Skills: '',
        Languages: '',
        DressCode: '',
        Specifications: '',
        expanded: true,
        tosChecked: false
    }
    
    expandButton(){
        !this.state.expanded ? this.setState({expanded: true}) : this.setState({expanded: false})
    }

    render(){
        //const logoOpacity = Math.min(100 / this.state.scrollHeight, 1)
        return(
            <div className="RecruitCompany">
                
                <div className="logo" style={isMobile ? {display:'flex',alignItems:'center',height:500} : {display:'flex', alignItems:'center'}}>
                    <a className="infographic" href="/recruit/#body"><img src={isMobile ? whoCanRecruitMobile : whoCanRecruit} className={isMobile ? "mobileInfographic" : "desktopInfographic"} alt="graphic" height="auto" href="/recruit/#body"/></a>
                    <img src={background} alt="graphic" className={isMobile ? "bannerRecruitMobile" : "bannerRecruit"} height="auto"/>
                    <div className="bot-bar" />
                </div>
                {!isMobile ? 
                <div className="mainBody">
                    
                    <div className="descriptionBox">
                        <h1 style={{marginBottom:0}}>Volunteering organizations, welcome! </h1> <br />
                        <div className="descriptionParagraph">
                            Our site allows schools, registered 501 (c) nonprofit organizations, and governmental programs to create connections with volunteers across Miami. 

                            You may create a listing to recruit volunteers by completing the form below. Listing all of your organization’s requirements tells volunteers about what kind of work you’ll be doing together. 

                            Filling out our categories, please reference the info buttons labeled ⓘ for instructions and formatting details.

                            Your input will then be processed into a volunteering listing and featured on our home page for budding volunteers. An example listing can be seen below.

                            On our home page, volunteers will input their credentials—such as: age, grade point average, languages, etc.—which are then formatted into a professional email and sent to your organization for approval. 

                            Thank you for choosing us, and happy volunteering.
                        </div><br />
                        <div className="descriptionSignature">
                            —Kind regards, <br />
                            <b style={{marginLeft:17.5}}>Volunteering Miami</b>
                        </div>
                        <a id="body"/>
                    </div>
                    
                    
                    <div className="formBox">

                        <h1>Add a Volunteer Listing</h1>
                        <form>
                            <div className="singleInput">
                                <label for="inputEmail">Company Name</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Company Name" onChange={(event)=>{this.setState({CompanyName: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Please input the name of your organization, e.g. <u>Volunteering Miami</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputEmail">Address</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Address" onChange={(event)=>{this.setState({Location: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            This is the location where your volunteer should report to. Please write out your organization’s full address, e.g. <u>123 Main Street, New York, NY 10030</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputEmail">Company Description</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Company Description" onChange={(event)=>{this.setState({CompanyDescription: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Here, input a small description of your organization's chief function, beliefs, and goals. Only a small paragraph is necessary; this helps our volunteers understand what your organization does. For example, <u>"For Volunteering Miami, our chief mission is to connect local, Miami-based businesses and organizations with capable students and volunteers. As high-schoolers, we understand that the greatest challenge for meeting our volunteering requirements is actually starting. Often, as students, our opportunities are limited and beginning is intimidating. Volunteering Miami wants to ease the load of starting, and in the process, help out our local market and community. We constantly strive to expand our selection of local organizations to better accommodate the needs and interest of our volunteers. We are regularly growing, so rest assured, if you haven’t found your fit today, you might be more lucky tomorrow. Concerning organizations and businesses interested in creating a listing to recruit volunteers, please visit our "Recruit Volunteers" tab. We are always interested in aiding your growth and improving our community through service. Thank you for choosing us, and we are confident in your shared success."</u>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(event)=>{this.setState({Email: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            This is where volunteer requests will be sent to for your consideration, e.g. <u>info@volunteeringmiami.org</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputAge">Website</label>
                                <input type="text" className="form-control" id="inputName" placeHolder="Website" onChange={(event)=>{this.setState({Website: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Your organization’s website. Preferably, the URL should be concise, e.g. <u>www.volunteeringmiami.org</u>. If not applicable, please input <u>N/A.</u> 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Volunteers Needed</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Volunteers needed" onChange={(event)=>{this.setState({VolunteersNeeded: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            In this field, please input the total amount of volunteers your organization is looking for, e.g. <u>7</u> 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Age Range</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Age range" onChange={(event)=>{this.setState({AgeRange: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            This tells our volunteers what age minimums or maximums your organization accepts. Please input this parameter in the following example’s format: <u>16-18 y/o</u>. If your organization only has an age minimum, please input this parameter like so: <u>16 y/o and older</u>. If not applicable, please input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputCert">Dates</label>
                                <input type="text" className="form-control" id="inputCert" placeHolder="Dates" onChange={(event)=>{this.setState({Dates: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, input when you want the volunteer to start and finish volunteering. Please input the dates as: start month/start day/start year - end month/end day/end year; for example, <u>10/12/20 - 6/4/21</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool">Sunday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Sundays" onChange={(event)=>{this.setState({Sunday: event.target.value});}}  />
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
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Mondays" onChange={(event)=>{this.setState({Monday: event.target.value});}}  />
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
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Tuesdays" onChange={(event)=>{this.setState({Tuesday: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, indicate the day’s time the volunteer will need to spend volunteering on Tuesdays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Monday, input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool" >Wednesday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Wednesdays" onChange={(event)=>{this.setState({Wednesday: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, indicate the day’s time the volunteer will need to spend volunteering on Wednesdays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Monday, input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputSchool" >Thursday Hours</label>
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Thursdays" onChange={(event)=>{this.setState({Thursday: event.target.value});}}  />
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
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work times on Fridays" onChange={(event)=>{this.setState({Friday: event.target.value});}}  />
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
                                <input type="text" className="form-control" id="inputSchool" placeHolder="Work time on Saturdays" onChange={(event)=>{this.setState({Saturday: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        Here, indicate the day’s time the volunteer will need to spend volunteering on Saturdays. For example, <u>9:30 AM-3:00 PM</u>. If the volunteer is not meant to volunteer on Monday, input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputTalent">Job Title</label>
                                <input type="text" className="form-control" id="inputTalent" placeHolder="Job title" onChange={(event)=>{this.setState({JobTitle: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        If applicable, this is where you state what the official title of your volunteer will be at your organization, e.g. <u>Caretaker</u>. If job title doesn’t apply, simply write <u>Volunteer</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputTalent">Volunteering Space</label>
                                <input type="text" className="form-control" id="inputTalent" placeHolder="Volunteering space" onChange={(event)=>{this.setState({VolunteeringSpace: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Here, specify if your volunteers' work is in-person or virtual, e.g. <u>On-site</u>. Or <u>Virtually</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputTalent">Job Description</label>
                                <input type="text" className="form-control" id="inputTalent" placeHolder="Job description" onChange={(event)=>{this.setState({JobDescription: event.target.value});}}  />
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
                                <input type="text" className="form-control" id="inputLang" placeHolder="GPA" onChange={(event)=>{this.setState({GPA: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Here, input what grade point average minimum your organization is looking for in volunteers. For example: <u>2.5 and higher</u>. If this category does not apply, please input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Certifications</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Certifications"onChange={(event)=>{this.setState({Certifications: event.target.value});}}  />
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
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Skills"onChange={(event)=>{this.setState({Skills: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                        This category is for skills or miscellaneous talents that your organization looks for in a volunteer. These are by no means mandatory but can include a variety of specifications. Skills can be those that are learned or those which volunteers are savvy to, e.g. <u>chess, programming</u> or <u>time management, leadership</u>. If this category does not apply, please input <u>N/A</u>. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="singleInput">
                                <label for="inputMessage">Languages</label>
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Languages"onChange={(event)=>{this.setState({Languages: event.target.value});}}  />
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
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Dress code"onChange={(event)=>{this.setState({DressCode: event.target.value});}}  />
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
                                <input type="text" className="form-control" id="inputMessage" placeHolder="Any additional notes"onChange={(event)=>{this.setState({Specifications: event.target.value});}}  />
                                <div className="information">ⓘ
                                    <div className="infoText">
                                        <span>
                                            Here, list any requirements missing in the categories above. If not applicable, please input <u>N/A</u>.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="agreementTOS" style={{marginTop: 15}}>
                                <input style={{marginRight: 15}} type="checkbox" onClick={() => this.setState({tosChecked: !this.state.tosChecked})}/>
                                
                                I verify that I am an authorized representative of this organization and have the right to act on its behalf in the creation and management of this listing. The organization and I agree to the additional <a style={{color: "black"}} href="https://volunteeringmiami.com/termsofservice/Terms_of_Service.pdf"><b>Terms of Service</b></a>
                                
                            </div>
                            
                        </form>
                        {this.state.tosChecked ? 
                        <button className="btn btn-dark" style={{marginTop: 20}} onClick={()=>{
                            fetch(`https://288jofwgy1.execute-api.us-east-2.amazonaws.com/prod/recruit?CompanyName=${this.state.CompanyName}&Location=${this.state.Location}&CompanyDescription=${this.state.CompanyDescription}&Email=${this.state.Email}&VolunteersNeeded=${this.state.VolunteersNeeded}&Website=${this.state.Website}&AgeRange=${this.state.AgeRange}&Dates=${this.state.Dates}&Sunday=${this.state.Sunday}&Monday=${this.state.Monday}&Tuesday=${this.state.Tuesday}&Wednesday=${this.state.Wednesday}&Thursday=${this.state.Thursday}&Friday=${this.state.Friday}&Saturday=${this.state.Saturday}&JobTitle=${this.state.JobTitle}&VolunteeringSpace=${this.state.VolunteeringSpace}&JobDescription=${this.state.JobDescription}&GPA=${this.state.GPA}&Certifications=${this.state.Certifications}&Skills=${this.state.Skills}&Languages=${this.state.Languages}&DressCode=${this.state.DressCode}&Specifications=${this.state.Specifications}`)
                            .then(res => res.json())
                            .then((result) => {
                                console.log(result);
                                alert('Application sent successfully');
                                window.location.href='/';
                            },(error) => {
                                console.log(error);
                                alert('Error: '+error);
                                window.location.reload();
                            })
                        }}>Submit</button>
                        :
                        <button className="btn btn-dark" style={{marginTop: 20}}>Submit</button>
                        }
                    </div>
                    
                    
                    <div style={{paddingTop:0}} className="container">
                        <div>
                            <div style={{backgroundColor: 'white'}} className="panel panel-default">
                            <img
                                //src={obj.location ? `https://maps.googleapis.com/maps/api/streetview?key=AIzaSyBBk4SuCFLjvk_OgUh28LYnBGNx2Y7i-ho&size=300x178&location=${obj.location}` : ///'https://volunteeringmiami.com/images/bizimage.jpg'}
                                src={bizpic}
                                className="rounded float-right .img-thumbnail bizpic"
                                alt="pic of business"
                            />

                            <h1>Example Company</h1>
                            <div className="panel-body">
                                <h5>1234 Example St, Springfield, 54321</h5>
                                Brief Summary
                                <div className="arrowdropdown">
                                <input
                                    type="image"
                                    src={arrow}
                                    alt="arrow"
                                    width="35"
                                    height="35"
                                    className={this.state.expanded ? "arrowheadspun" : "arrowhead"}
                                    onClick ={() => {
                                        this.expandButton();
                                    }}
                                />
                                </div>
                            </div>
                            </div>
                            {!this.state.expanded ? (
                            <div
                                className="panel panel-default"
                                style={{
                                marginLeft: 100,
                                marginTop: -80,
                                paddingTop: 0,
                                zIndex: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                width: "86.5%",
                                backgroundColor: 'white'
                                }}
                            >
                                <div className="moreInfo">
                                <div className="category">
                                    <h5>Location: </h5>
                                    <div className="answer">1234 Example St, Springfield, 54321</div>
                                </div>
                                <div className="category">
                                    <h5>Company Description: </h5>
                                    <div className="answer">"For Volunteering Miami, our chief mission is to connect local, Miami-based businesses and organizations with capable students and volunteers. As high-schoolers, we understand that the greatest challenge for meeting our volunteering requirements is actually starting. Often, as students, our opportunities are limited and beginning is intimidating. Volunteering Miami wants to ease the load of starting, and in the process, help out our local market and community. We constantly strive to expand our selection of local organizations to better accommodate the needs and interest of our volunteers. We are regularly growing, so rest assured, if you haven’t found your fit today, you might be more lucky tomorrow. Concerning organizations and businesses interested in creating a listing to recruit volunteers, please visit our "Recruit Volunteers" tab. We are always interested in aiding your growth and improving our community through service. Thank you for choosing us, and we are confident in your shared success."</div>
                                </div>
                                <div className="category">
                                    <h5>Website: </h5>
                                    <div className="answer">www.examplecompany.org</div>
                                </div>
                                <div className="category">
                                    <h5>Age Range: </h5>
                                    <div className="answer">16-24 years old</div>
                                </div>
                                <div className="category">
                                    <h5>Dates: </h5>
                                    <div className="answer">12/20/19 - 1/20/20</div>
                                </div>
                                <div className="category">
                                    <h5>Daily Service Hours: </h5>
                                </div>
                                <div className="category">
                                    <div className="credentials">
                                    <div className="subCategory">
                                        <h6>Sunday: </h6>
                                        <div className="subAnswer">9:00 AM - 6:00 PM</div>
                                    </div>
                                    <div className="subCategory">
                                        <h6>Monday: </h6>
                                        <div className="subAnswer">9:00 AM - 6:00 PM</div>
                                    </div>
                                    <div className="subCategory">
                                        <h6>Tuesday: </h6>
                                        <div className="subAnswer">9:00 AM - 6:00 PM</div>
                                    </div>
                                    <div className="subCategory">
                                        <h6>Wednesday: </h6>
                                        <div className="subAnswer">
                                        9:00 AM - 6:00 PM
                                        </div>
                                    </div>
                                    <div className="subCategory">
                                        <h6>Thursday: </h6>
                                        <div className="subAnswer">
                                        9:00 AM - 6:00 PM
                                        </div>
                                    </div>
                                    <div className="subCategory">
                                        <h6>Friday: </h6>
                                        <div className="subAnswer">9:00 AM - 6:00 PM</div>
                                    </div>
                                    <div className="subCategory">
                                        <h6>Saturday: </h6>
                                        <div className="subAnswer">
                                        9:00 AM - 6:00 PM
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <h5>Job Title: </h5>
                                    <div className="answer">Caretaker</div>
                                </div>
                                <div className="category">
                                    <h5>Volunteering Space: </h5>
                                    <div className="answer">On-site</div>
                                </div>
                                <div className="category">
                                    <h5>Job Description: </h5>
                                    <div className="answer">Attend nursing home and assist employees in the workplace</div>
                                </div>
                                <div className="category">
                                    <h5>Credentials: </h5>

                                    <div className="credentials">
                                    <div className="subCategory">
                                        <h6>GPA: </h6>
                                        <div className="subAnswer">3.5</div>
                                    </div>
                                    <div className="subCategory">
                                        <h6>Certifications: </h6>
                                        <div className="subAnswer">
                                        N/A
                                        </div>
                                    </div>
                                    <div className="subCategory">
                                        <h6>Skills: </h6>
                                        <div className="subAnswer">Chess and swimming</div>
                                    </div>
                                    <div className="subCategory">
                                        <h6>Language: </h6>
                                        <div className="subAnswer">
                                        English, Spanish
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <h5>Dress Code:</h5>
                                    <div className="answer">Business Casual</div>
                                </div>
                                <h5>Any Further Specifications:</h5>
                                <div className="answer">
                                    Must take required orientation course
                                </div>
                                <button
                                type="button"
                                className="btn btn-secondary apply-button"
                                >
                                Apply
                                </button>
                                
                                </div>
                            </div>
                            ) : (<p></p>)}
                        </div>
                        
                    </div>
                     
                </div>
                : 
                <div className="mobileRecruitInfo">
                    <div className="mobileRecruitParagraph">
                        Our site allows schools, registered 501 (c) nonprofit organizations, and governmental programs to create connections with volunteers across. Listing all of your organization's
                        requirements tells volunteers about what kind of work you'll be doing together. Your input will then be processed into a volunteering listing and featured on our home page for
                        budding volunteers. On our home page, volunteers will input their credentials — such as: age, grade point average, languages, etc. — which are then formatted and sent to your
                        organization for approval. To access this function please visit our site from a computer. Thank you for choosing us, and happy volunteering.
                    </div>
                    <br />
                    <br />
                    <div className="mobileInfoSignature">
                        — Kind regards,
                        <br />
                        <b style={{marginLeft: 40}}>Volunteering Miami</b>
                    </div>
                    

                </div>
                }
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