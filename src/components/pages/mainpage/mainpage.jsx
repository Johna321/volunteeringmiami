import React, { Component } from "react";
import "./mainpage.css";
import logo from "../../../volmiamisvg2.svg";
import navbarLogo from '../../../vmlogonav2.png';
import arrow from "../../../arrow.png";
import banner from "./banner.jpg";
import { Link } from "react-router-dom";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
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
    limit: 5,
    orderBy: "id",
    ascOrDesc: "ASC",
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
  };

  loadMore = async () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
      let jsonData = await fetch(
        `https://288jofwgy1.execute-api.us-east-2.amazonaws.com/prod/businesses?offset=${this.state.offset}&limit=${this.state.limit}&orderBy=${this.state.orderBy}&ascOrDesc=${this.state.ascOrDesc}`,
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
  }

  render() {
    const logoOpacity = Math.min(100 / this.state.scrollHeight, 1);
    var show = this.state.toggleDropdown === "true" ? "show" : "noshow";
    
    return (
      <div className="parent">
        <div className="logo">
          <div className="bot-bar" />
          <img src={banner} alt="background" className="banner" />
          <img
            src={isMobile ? navbarLogo : logo}
            alt="logo"
            style={isMobile ? { top: 225, opacity: logoOpacity } : { opacity: logoOpacity }}
            className="app-logo"
          />
        </div>
        <div style={{ marginBottom: 50 }} id="bot-bar" />
        <div className="body">
          <div className="sortBy">
            <ButtonDropdown
              isOpen={this.state.dropdownToggled}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle caret color="light">
                Sort By:
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    this.setState({
                      orderBy: "id",
                      ascOrDesc: "DESC",
                    });
                    this.refreshBusinesses();
                  }}
                >
                  New
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    this.setState({
                      orderBy: "id",
                      ascOrDesc: "ASC",
                    });
                    this.refreshBusinesses();
                  }}
                >
                  Old
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    this.setState({
                      orderBy: "name",
                      ascOrDesc: "ASC",
                    });
                    this.refreshBusinesses();
                  }}
                >
                  A to Z
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    this.setState({
                      orderBy: "name",
                      ascOrDesc: "DESC",
                    });
                    this.refreshBusinesses();
                  }}
                >
                  Z to A
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="container">
            <InfiniteScroll
              dataLength={this.state.businesses.length}
              next={this.loadMore}
              hasMore={!this.state.endReached}
            >
              <div className="panel-group">
                {this.state.businesses.map((obj) => {
                  return (
                    <div>
                      <div className="panel panel-default" style={{maxHeight: 206}}>
                        <img
                          //src={obj.location ? `https://maps.googleapis.com/maps/api/streetview?key=AIzaSyBBk4SuCFLjvk_OgUh28LYnBGNx2Y7i-ho&size=300x178&location=${obj.location}` : 'https://volunteeringmiami.com/images/bizimage.jpg'}
                          src={obj.photo}
                          className="rounded float-right .img-thumbnail bizpic"
                          alt="pic of business"
                        />

                        <div className="businessNames"><h1>{obj.name}</h1></div>
                        <div className="panel-body">
                          <h5>{obj.location}</h5>
                          {obj.jobDescription == '' ? 'N/A' : obj.jobDescription}
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
                          className="panel panel-default"
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
                              <h5>Company Description: </h5>
                              <div className="answer">{obj.companyDescription == '' ? 'N/A' : obj.companyDescription}</div>
                            </div>
                            <div className="category">
                              <h5>Website: </h5>
                              <div className="answer">{obj.website == '' ? 'N/A' : obj.website}</div>
                            </div>
                            <div className="category">
                              <h5>Age Range: </h5>
                              <div className="answer">{obj.ageWindow == '' ? 'N/A' : obj.ageWindow}</div>
                            </div>
                            <div className="category">
                              <h5>Dates: </h5>
                              <div className="answer">{obj.dates == '' ? 'N/A' : obj.dates}</div>
                            </div>
                            <div className="category">
                              <h5>Daily Service Hours: </h5>
                            </div>
                            <div className="category">
                              <div className="credentials">
                                <div className="subCategory">
                                  <h6>Sunday: </h6>
                                  <div className="subAnswer">{obj.Sunday == '' ? 'N/A' : obj.Sunday}</div>
                                </div>
                                <div className="subCategory">
                                  <h6>Monday: </h6>
                                  <div className="subAnswer">{obj.Monday == '' ? 'N/A' : obj.Monday}</div>
                                </div>
                                <div className="subCategory">
                                  <h6>Tuesday: </h6>
                                  <div className="subAnswer">{obj.Tuesday == '' ? 'N/A' : obj.Tuesday}</div>
                                </div>
                                <div className="subCategory">
                                  <h6>Wednesday: </h6>
                                  <div className="subAnswer">
                                    {obj.Wednesday == '' ? 'N/A' : obj.Wednesday}
                                  </div>
                                </div>
                                <div className="subCategory">
                                  <h6>Thursday: </h6>
                                  <div className="subAnswer">
                                    {obj.Thursday == '' ? 'N/A' : obj.Thursday}
                                  </div>
                                </div>
                                <div className="subCategory">
                                  <h6>Friday: </h6>
                                  <div className="subAnswer">{obj.Friday == '' ? 'N/A' : obj.Friday}</div>
                                </div>
                                <div className="subCategory">
                                  <h6>Saturday: </h6>
                                  <div className="subAnswer">
                                    {obj.Saturday == '' ? 'N/A' : obj.Saturday}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="category">
                              <h5>Job Title: </h5>
                              <div className="answer">{obj.jobTitle == '' ? 'N/A' : obj.jobTitle}</div>
                            </div>
                            <div className="category">
                              <h5>Volunteering Space: </h5>
                              <div className="answer">{obj.volunteeringSpace == '' ? 'N/A' : obj.volunteeringSpace}</div>
                            </div>
                            <div className="category">
                              <h5>Job Description: </h5>
                              <div className="answer">{obj.jobDescription == '' ? 'N/A' : obj.jobDescription}</div>
                            </div>
                            <div className="category">
                              <h5>Credentials: </h5>

                              <div className="credentials">
                                <div className="subCategory">
                                  <h6>GPA: </h6>
                                  <div className="subAnswer">{obj.gpa == '' ? 'N/A' : obj.gpa}</div>
                                </div>
                                <div className="subCategory">
                                  <h6>Certification: </h6>
                                  <div className="subAnswer">
                                    {obj.certification == '' ? 'N/A' : obj.certification}
                                  </div>
                                </div>
                                <div className="subCategory">
                                  <h6>Skills: </h6>
                                  <div className="subAnswer">{obj.skills == '' ? 'N/A' : obj.skills}</div>
                                </div>
                                <div className="subCategory">
                                  <h6>Language: </h6>
                                  <div className="subAnswer">
                                    {obj.languages == '' ? 'N/A' : obj.languages}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="category">
                              <h5>Dress Code:</h5>{" "}
                              <div className="answer">{obj.dressCode == '' ? 'N/A' : obj.dressCode}</div>
                            </div>
                            <h5>Any Further Specifications:</h5>{" "}
                            <div className="answer">
                              {obj.anyFurtherSpecifications == '' ? 'N/A' : obj.anyFurtherSpecifications}
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
    );
  }
}

export default MainPage;
