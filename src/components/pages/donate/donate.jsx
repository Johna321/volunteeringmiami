import React, {Component} from 'react';
import './donate.css';
import donateheader from './donateheader.png';
import cashapp from './cash-app-small.png';
import venmo from './venmo-small.png';
import zelle from './zelle-small.png';
import paypal from './paypal-small.png';

import {
    isMobile,
  } from "react-device-detect";


class Donate extends Component{
    render(){
        return(
            <div className="mainBody">
            {!isMobile ? 
            
                <div className="donate">
                
                    <div className="title">
                        <img src={donateheader}
                         className="donateLogo"
                         alt="volunteering miami logo"
                         height="25%"
                         width="25%"/>
                    </div>
                    <div className="donationInfoBox">
                        
                        <div className="descriptionParagraph">
                            Please help keep Volunteering Miami open-access for students and volunteer recruiters. Any donation amount directly translates into better and more consistent services. By contributing to Volunteering Miami, you can expect to see more opportunities and more powerful features on our site. 
    
                        </div><br />
                        <div className="descriptionSignature">
                            —From our team, thank you for allowing us to serve you and our community.<br />
                            <b style={{marginLeft:17.5}}>Volunteering Miami</b>
                        </div>
                        <a id="body"/>
                    </div>
                    
                    <div className="donationBox">
                        <div className="donationLink">
                            <form action="https://www.paypal.com/donate" method="post" target="_blank">
                                <input type="hidden" name="business" value="info@volunteeringmiami.org" />
                                <input type="hidden" name="item_name" value="Donations" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src={paypal} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            </form>
                        </div>
                        <div className="donationLink">
                            <form action="https://cash.app/$VolunteeringMiami"  target="_blank">
                                <input type="image" src={cashapp}/>
                            </form>
                        </div>
                    </div>
                   
                    <div style={{marginBottom: 40}} className="tos">
                        <a className="tosLinkAbout" href="https://volunteeringmiami.com/termsofservice/Terms_of_Service.pdf">Terms of Service</a>
                    </div>
               
             </div> 
                :
                <div className="mobileDonate">
                    
                        <img style={{marginTop: 100}} src={donateheader}
                         className="donateLogo"
                         alt="volunteering miami logo"
                         height="75%"
                         width="75%"/>
                    
                    <div className="mobileDonationBox">
                        <div className="donationLink">
                            <form action="https://www.paypal.com/donate" method="post" target="_blank">
                                <input type="hidden" name="business" value="info@volunteeringmiami.org" />
                                <input type="hidden" name="item_name" value="Donations" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src={paypal} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            </form>
                        </div>
                        
                        <div className="donationLink">
                            <form action="https://cash.app/$VolunteeringMiami"  target="_blank">
                                <input type="image" src={cashapp}/>
                            </form>
                        </div>
                    </div>
                    <div className="mobileDonationInfoBox">
                        
                        <div style={{textAlign: 'left'}} className="descriptionParagraph">
                            Please help keep Volunteering Miami open-access for students and volunteer recruiters. Any donation amount directly translates into better and more consistent services. By contributing to Volunteering Miami, you can expect to see more opportunities and more powerful features on our site. 
    
                        </div><br />
                        <div className="descriptionSignature">
                            From our team, thank you for allowing us to serve you and our community.<br />
                            <b style={{marginLeft:17.5}}>—Volunteering Miami</b>
                        </div>
                        <a id="body"/>
                    </div>
                    <div className="mobileTos">
                       <a className="tosLinkAbout" href="https://volunteeringmiami.com/termsofservice/Terms_of_ServiceNew.pdf">Terms of Service</a>
                    </div>


                </div>
             }
            </div>
        );
    }
}

export default Donate;