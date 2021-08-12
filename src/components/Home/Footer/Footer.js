import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faGooglePlus, faTwitter} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="footer container mt-5 pt-5">
            <div className="row">
                <div className="col-md-3">
                   <div>
                      <ul className="listOfFooter">
                          <br></br>
                          <br></br>
                          <br></br>
                          <li>Emergency Dental Care</li>
                          <li>Check Up</li>
                          <li>Treatment of Personal Diseases</li>
                          <li>Tooth Extraction</li>
                          <li>Check up</li>
                      </ul> 
                   </div>
                </div>
                <div className="col-md-3">
                <ul className="listOfFooter">
                          <li><h5>Services</h5></li>
                          <li>Emergency Dental Care</li>
                          <li>Check Up</li>
                          <li>Treatment of Personal Diseases</li>
                          <li>Tooth Extraction</li>
                          <li>Check up</li>
                          <li>Tooth Extraction</li>
                          <li>Check up</li>
                      </ul> 
                </div>
                <div className="col-md-3">
                <ul className="listOfFooter">
                          <li><h5>Oral Health</h5></li>
                          <li>Emergency Dental Care</li>
                          <li>Check Up</li>
                          <li>Treatment of Personal Diseases</li>
                          <li>Tooth Extraction</li>
                          <li>Check up</li>
                          <li>Tooth Extraction</li>
                          <li>Check up</li>
                          <li>Tooth Extraction</li>
                          <li>Check up</li>
                      </ul> 
                </div>
                <div className="col-md-3">
                <ul className="listOfFooter">
                          <li><h5>Our Address</h5></li>
                          <li>Bancharampur - 6</li>
                          <li>Yords</li>
                          <li style={{fontSize:"30px"}} className="mt-5">
                          <FontAwesomeIcon className="me-3" style={{color:"#11c1ce"}} icon={faFacebook} />
                          <FontAwesomeIcon className="me-3" style={{color:"#11c1ce"}} icon={faGooglePlus} />
                          <FontAwesomeIcon className="me-3" style={{color:"#11c1ce"}} icon={faTwitter} />
                          </li>
                          <li className="mt-5 pt-5"><h6>Call Now</h6><button className="btn btn-primary">+8801627575647</button> </li>
                      </ul> 
                </div>
            </div>
            <p className="pt-5 text-center text-secondary">Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default Footer;