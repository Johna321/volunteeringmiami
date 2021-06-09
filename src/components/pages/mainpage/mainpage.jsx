import React, { Component } from "react";
import "./mainpage.css";
import logo from "../../../volmiamisvg2.svg";
import navbarLogo from "../../../vmlogonav2.png";
import arrow from "../../../arrow.png";
import banner from "./banner.jpg";
import mobileLogo from "./mobilebanner.png";
import mobileBanner from "./banner.jpg";
import { Link } from "react-router-dom";
import business from './icons/business.png';
import culture from './icons/culture.png';
import education from './icons/education.png';
import environment from './icons/environment.png';
import government from './icons/government.png';
import health from './icons/health.png';
import information from './icons/information.png';
import law from './icons/law.png';
import vocation from './icons/vocation.png';
import newIcon from './icons/new.png';
import old from './icons/old.png';
import search from './icons/search.png';
import nonprofit from './icons/nonprofit.png';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import bizPic from "./businessphotos/bizimage.jpg";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import InfiniteScroll from "react-infinite-scroll-component";

class MainPage extends Component {
  state = {
    render: true,
    scrollHeight: 0,
    dropdownToggled: false,
    filterBy: "New",
    businesses: [],
    offset: 0,
    limit: isMobile ? 30 : 5,
    orderBy: "id",
    ascOrDesc: "ASC",
    whatIndustry: "",
    search: "",
    endReached: false,
    loading: false,
  };

  applyButton = (givenIndex) => {
    let index = this.state.businesses.findIndex((obj) => obj.id === givenIndex);
    console.log(this.state.businesses[index]);
    if (this.state.businesses[index].expanded === false) {
      this.state.businesses[index].expanded = true;
      this.state.businesses[index].spun = true;
      this.setState({ render: true });
    } else {
      this.state.businesses[index].expanded = false;
      this.state.businesses[index].spun = false;
      this.setState({ render: true });
    }
  };

  toggleDropdown = () => {
    if (this.state.dropdownToggled === false) {
      this.setState({ dropdownToggled: true });
    } else {
      this.setState({ dropdownToggled: false });
    }
  };

  componentDidMount = () => {
    this.loadMore();
    window.onscroll = () => {
      this.setState({ scrollHeight: window.scrollY });
    };
    /*if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has('ItemId')){
        let ItemId = searchParams.get('ItemId');
        setTimeout(() => {
          if (this.state.businesses.filter(obj => obj.id === ItemId).length > 0){
            window.document.querySelector('#' + ItemId).scrollIntoView({ 
              behavior: 'smooth' 
            });
          }
        }, 1000);
      }
    }*/

  };

  loadMore = async () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
      let jsonData = await fetch(
        `https://288jofwgy1.execute-api.us-east-2.amazonaws.com/prod/businesses?offset=${this.state.offset}&limit=${this.state.limit}&orderBy=${this.state.orderBy}&ascOrDesc=${this.state.ascOrDesc}&whatIndustry=${this.state.whatIndustry}&search=${this.state.search}`,
        { method: "GET" }
      );
      jsonData = await jsonData.json();
      if (jsonData.length > 0) {
        this.setState({
          businesses: this.state.businesses.concat(jsonData),
          offset: this.state.offset + this.state.limit,
        });
      } else {
        this.setState({ endReached: true });
      }
      this.setState({ loading: false });
    }
  };

  refreshBusinesses() {
    this.setState({
      businesses: [],
      offset: 0,
      endReached: false,
    });
    setTimeout(() => {
      this.loadMore();
    }, 0);
  }

  render() {
    const logoOpacity = this.state.scrollHeight < 0 ? 1 : Math.min(100 / this.state.scrollHeight, 1);
    var show = this.state.toggleDropdown === "true" ? "show" : "noshow";

    return (
      <div>
        {!isMobile ? (
          <div className="parent">
            <div className="logo">
              <div className="bot-bar" />
              <img src={banner} alt="background" className="banner" />
              <img
                src={isMobile ? navbarLogo : logo}
                alt="logo"
                style={
                  isMobile
                    ? { top: 225, opacity: logoOpacity }
                    : { opacity: logoOpacity }
                }
                className="app-logo"
              />
            </div>
            <div style={{ marginBottom: 50 }} id="bot-bar" />
            <div className="body">
              <div className="sortBy">
                <ButtonDropdown
                  isOpen={this.state.dropdownToggled}
                  toggle={this.toggleDropdown}
                  style={{zIndex: 2, width: 187.5}}
                >
                  <DropdownToggle caret color="light">
                    Discover
                  </DropdownToggle>
                  <DropdownMenu className="mainDropDown">
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Health",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={health} width="25" height="25"/>
                      Health
                      
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Information",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={information} width="25" height="25"/>
                      Information and Media
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Environment",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={environment} width="25" height="25"/>
                      Environment
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Law",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={law} width="25" height="25"/>
                      Law 
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Culture",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={culture} width="27.5" height="25"/>
                      Culture
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Business",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={business} width="27.5" height="25"/>
                      Business
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Government",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={government} width="27.5" height="25"/>
                      Government
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Vocation",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={vocation} width="27.5" height="25"/>
                      Vocation
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Education",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={education} width="27.5" height="25"/>
                      Education
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "industry",
                          ascOrDesc: "DESC",
                          whatIndustry: "Nonprofit",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={nonprofit} width="27.5" height="25"/>
                      Nonprofit
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "id",
                          ascOrDesc: "DESC",
                          whatIndustry: "",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={newIcon} width="27.5" height="25"/>
                      New
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.setState({
                          orderBy: "id",
                          ascOrDesc: "ASC",
                          whatIndustry: "",
                        });
                        this.refreshBusinesses();
                      }}
                    >
                      <img className="dropdownIcon" src={old} width="27.5" height="25"/>
                      Old
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className="search">
                <input
                  onChange={(event) => {
                    this.setState({ search: event.target.value });
                    this.refreshBusinesses();
                  }}
                  className="form-control searchBar"
                ></input>
                <div className="searchIcon">
                  <img src={search} width="27.5" height="25"  />
                </div>
              </div>
              <div className='container'>
                <InfiniteScroll
                  dataLength={this.state.businesses.length}
                  next={this.loadMore}
                  hasMore={!this.state.endReached}
                >
                  <div className="panel-group">
                    {this.state.businesses.map((obj) => {
                      return (
                        <div id={obj.id}>
                          
                          <div
                            //className={this.state.whatIndustry ? obj.industry.includes('Health') ? "panel panel-default health" : obj.industry.includes('Business') ? "panel panel-default business" : "panel panel-default" }
                            className={`panel panel-default ${this.state.whatIndustry ? obj.industry.map(obj => `${obj === this.state.whatIndustry ? obj : ``}`).join(" ") : ''} ${obj.expired ? `expired` : ``}`}
                            style={{maxHeight: 206, zIndex: 1}}
                            
                          >
                            <img
                              //src={obj.location ? `https://maps.googleapis.com/maps/api/streetview?key=AIzaSyBBk4SuCFLjvk_OgUh28LYnBGNx2Y7i-ho&size=300x178&location=${obj.location}` : 'https://volunteeringmiami.com/images/bizimage.jpg'}
                              src={obj.photo ? obj.photo : bizPic}
                              className="rounded float-right .img-thumbnail bizpic"
                              alt="pic of business"
                            />

                            <div className="businessNames">
                              <h1>{obj.name}</h1>
                            </div>
                            <div className="panel-body">
                              <h5>{obj.location ? obj.location : "N/A"}</h5>
                              {!obj.jobDescription 
                                ? "N/A"
                                : obj.jobDescription}
                              <div className="arrowdropdown">
                                <input
                                  className={
                                    obj.spun ? "arrowhead" : "arrowheadspun"
                                  }
                                  type="image"
                                  src={arrow}
                                  alt="arrow"
                                  width="35"
                                  height="35"
                                  onClick={() => {
                                    this.applyButton(obj.id);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          {obj.expanded !== false ? (
                            <div
                              className="panel panel-default expandedDiv"
                              style={{
                                marginLeft: 100,
                                marginTop: -80,
                                paddingTop: 0,
                                zIndex: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                width: "86.5%",
                              }}
                            >
                              <div className="moreInfo">
                                <div className="category">
                                  <h5>Location: </h5>
                                  <div className="answer">{obj.location}</div>
                                </div>
                                <div className="category">
                                  <h5>Organization Description: </h5>
                                  <div className="answer">
                                    {!obj.companyDescription 
                                      ? "N/A"
                                      : obj.companyDescription}
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Website: </h5>
                                  <div className="answer">
                                    {!obj.website  ? "N/A" : obj.website}
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Nonprofit Status: </h5>
                                  <div className="answer">
                                    {obj.nonprofit ? "Nonprofit" : "Other"}
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Age Range: </h5>
                                  <div className="answer">
                                    {!obj.ageWindow 
                                      ? "N/A"
                                      : obj.ageWindow}
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Dates: </h5>
                                  <div className="answer">
                                    {!obj.dates  ? "N/A" : obj.dates}
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Daily Service Hours: </h5>
                                </div>
                                <div className="category">
                                  <div className="credentials">
                                    <div className="subCategory">
                                      <h6>Sunday: </h6>
                                      <div className="subAnswer">
                                        {!obj.Sunday  ? "N/A" : obj.Sunday}
                                      </div>
                                    </div>
                                    <div className="subCategory">
                                      <h6>Monday: </h6>
                                      <div className="subAnswer">
                                        {!obj.Monday  ? "N/A" : obj.Monday}
                                      </div>
                                    </div>
                                    <div className="subCategory">
                                      <h6>Tuesday: </h6>
                                      <div className="subAnswer">
                                        {!obj.Tuesday 
                                          ? "N/A"
                                          : obj.Tuesday}
                                      </div>
                                    </div>
                                    <div className="subCategory">
                                      <h6>Wednesday: </h6>
                                      <div className="subAnswer">
                                        {!obj.Wednesday 
                                          ? "N/A"
                                          : obj.Wednesday}
                                      </div>
                                    </div>
                                    <div className="subCategory">
                                      <h6>Thursday: </h6>
                                      <div className="subAnswer">
                                        {!obj.Thursday 
                                          ? "N/A"
                                          : obj.Thursday}
                                      </div>
                                    </div>
                                    <div className="subCategory">
                                      <h6>Friday: </h6>
                                      <div className="subAnswer">
                                        {!obj.Friday  ? "N/A" : obj.Friday}
                                      </div>
                                    </div>
                                    <div className="subCategory">
                                      <h6>Saturday: </h6>
                                      <div className="subAnswer">
                                        {!obj.Saturday 
                                          ? "N/A"
                                          : obj.Saturday}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Job Title: </h5>
                                  <div className="answer">
                                    {!obj.jobTitle  ? "N/A" : obj.jobTitle}
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Volunteering Space: </h5>
                                  <div className="answer">
                                    {!obj.volunteeringSpace 
                                      ? "N/A"
                                      : obj.volunteeringSpace}
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Job Description: </h5>
                                  <div className="answer">
                                    {!obj.jobDescription 
                                      ? "N/A"
                                      : obj.jobDescription}
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Credentials: </h5>

                                  <div className="credentials">
                                    <div className="subCategory">
                                      <h6>GPA: </h6>
                                      <div className="subAnswer">
                                        {!obj.gpa  ? "N/A" : obj.gpa}
                                      </div>
                                    </div>
                                    <div className="subCategory">
                                      <h6>Certification: </h6>
                                      <div className="subAnswer">
                                        {!obj.certification 
                                          ? "N/A"
                                          : obj.certification}
                                      </div>
                                    </div>
                                    <div className="subCategory">
                                      <h6>Skills: </h6>
                                      <div className="subAnswer">
                                        {!obj.skills  ? "N/A" : obj.skills}
                                      </div>
                                    </div>
                                    <div className="subCategory">
                                      <h6>Language: </h6>
                                      <div className="subAnswer">
                                        {!obj.languages 
                                          ? "N/A"
                                          : obj.languages}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Dress Code:</h5>{" "}
                                  <div className="answer">
                                    {!obj.dressCode 
                                      ? "N/A"
                                      : obj.dressCode}
                                  </div>
                                </div>
                                <div className="category">
                                  <h5>Any Further Specifications:</h5>{" "}
                                  <div className="answer">
                                    {!obj.anyFurtherSpecifications 
                                      ? "N/A"
                                      : obj.anyFurtherSpecifications}
                                  </div>
                                </div>
                                <Link to={`business?ItemId=${obj.id}`}>
                                  <button
                                    type="button"
                                    className="btn btn-secondary apply-button"
                                  >
                                    Apply
                                  </button>
                                </Link>
                              </div>
                            </div>
                          ) : (
                            <p></p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </InfiniteScroll>
              </div>
            </div>
          </div>
        ) : (
          <div className="parent">
            <div className="mobileMainpageLogo">
              <div className="mobile-bot-bar" />
              <div className="mobileIntroduction">
                {/*<img
                  src={mobileLogo}
                  alt="background"
                  className="mobileMainpageLogoImage"
                />*/}
                {/*<img
                  src={mobileBanner}
                  alt="background"
                  className="mobileBanner"
                />*/}
                <div className="mobileMainpageLogoImage" />
                <div className="mobile-app-logo">
                  <img
                    src={mobileLogo}
                    alt="logo"
                    style={{ opacity: logoOpacity }}
                    className="mobileLogoImage"
                  />
                </div>
              </div>
            </div>
            <div>
              <InfiniteScroll
                dataLength={this.state.businesses.length}
                next={this.loadMore}
                hasMore={!this.state.endReached}
              >
                <div className="panel-group">
                  {this.state.businesses.map((obj) => {
                    return (
                      <div>
                        <div
                          className="mobilePanel panel-default"
                          style={{ height: 440 }}
                        >
                          <div className="mobileBusinessNames">
                            <h3>{obj.name}</h3>
                          </div>
                          <div className="mobile-panel-body">
                            {obj.location == ""
                              ? "N/A"
                              : obj.location}
                          </div>
                          <div className="mobile-panel-body">
                            {obj.jobDescription == ""
                              ? "N/A"
                              : obj.jobDescription}
                          </div>
                          <img
                            //src={obj.location ? `https://maps.googleapis.com/maps/api/streetview?key=AIzaSyBBk4SuCFLjvk_OgUh28LYnBGNx2Y7i-ho&size=300x178&location=${obj.location}` : 'https://volunteeringmiami.com/images/bizimage.jpg'}
                            src={obj.photo ? obj.photo : bizPic}
                            className="float-right .img-thumbnail mobileBizpic"
                            alt="pic of business"
                          />
                          <Link className="mobileApplyButton" to={`business?ItemId=${obj.id}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MainPage;
