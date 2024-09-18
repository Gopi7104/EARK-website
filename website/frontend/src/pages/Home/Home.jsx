import { useState,React } from 'react';
import './Home.css'
 const Home = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const mailtoLink = `mailto:earkinternationalschool@zambia.co.zm?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMobile: ${mobile}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };


  return (
    <div className='home'>
        <div className='home_hero_container'>
            <div className='home_scl_name'>
                <p className='scl_name'>EARK<br/>International<br/>School</p>
            </div>
            <div className='home_description'>
              <p>We prepare today's learners to confidently embrace challenges as adaptable, empathetic global citizens. </p>
            </div>
            <div className='home_img_btns'>
              <button type='' className='home_apply_btn'>Apply Now</button>
              <button type='' className='home_broucher_btn'>Get Broucher</button>
            </div>
        </div>
        <div className='home_content'>
          <div className='home_content_heaing'>Learning Begins With Us​</div>
          <div className='home_para'>
            <div className='home_para1'>Welcome to EARK International School, a leading educational institution renowned for our commitment to academic excellence and personal growth, Located in Lusaka, Zambia. We provide a stimulating environment that fosters a love for learning, nurtures well-rounded individuals, and inspires curiosity, critical thinking,
            and creativity.</div>
            <div className='home_para2'>At EARK International School, we believe 
            in empowering students to excel both academically and in life. Our innovative curriculum, experienced faculty and state-of-the-art facilities combine to create a unique learning experience that prepares students for success in the 21st century.</div>
          </div>
        </div>
        <div className='home_form_outer'>
          <div className='home_form_heading'>
            Contact Us
          </div>
        <div className='home_form'>
        <div className='home_form_details home_form_name'>
          <input 
            type="text" 
            placeholder='Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className='home_form_details home_form_mail'>
          <input 
            type="email" 
            placeholder='Email address' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className='home_form_details home_form_mobile'>
          <input 
            type="tel" 
            placeholder='Mobile number' 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
          />
        </div>
        <div className='home_form_message home_form_msg'>
          <textarea 
            id='msg_text' 
            placeholder='Message' 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
          />
        </div>
        <div className='home_form_btn'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
        </div>
    </div>
  )
}
export default Home