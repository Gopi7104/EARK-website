import React from 'react';
import callIcon from '../../assets/call_icon.svg'
import locationIcon from '../../assets/location_icon.svg'
import mailIcon from '../../assets/mail_icon.svg'
import logo from '../../assets/footer_logo.svg'
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className='footer_logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div className="footer_contact">
            <p className="footer_heading">CONTACT DETAILS</p>
            <div className='footer_heading_underline'></div>
            <ul className="footer_info">
              <li className="footer_social">
                <span> <a href="https://maps.app.goo.gl/AyZqA9ExfQtpfPyE8">9700 Chudleigh, Lusaka.</a> </span>
                <img className='footer_icon location' src={locationIcon} alt='location'/>
              </li>
              <li className="footer_social">
                <span>
                  <a href="tel:+260 955000222">+260 955000222</a> / 
                  <a href="tel:+260 211 240055">+260 211 240055</a>
                </span>
                <img className='footer_icon call' src={callIcon} alt='call'/>
              </li>
              <li className="footer_social">
                <span><a href="mailto:earkinternationalschool@zambia.co.zm">earkinternationalschool@zambia.co.zm</a></span>
                <img className='footer_icon mail' src={mailIcon} alt="mail"/>
              </li>
            </ul>

        </div>

    
      </div>
    </div>
  );
};

export default Footer;