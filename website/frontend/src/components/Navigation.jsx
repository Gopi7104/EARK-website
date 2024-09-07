import React ,{useState}from 'react'
import './Navigation.css'
import'../index.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import schlogo from '../asset/Picture/schlogo.webp';

const Navigation = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className='nav_bar_main'>
        <div className="nav_logo_container">
            <img className='nav_logo' src={schlogo} 
            alt="logo image" />
        </div>
              <div className="nav_link_container">
                 <p><a href='#' >About Us</a></p>
                 <p><a href='#' >Curriculum</a></p>
                 <p><a href='#' >Our faculties</a></p>
              </div>

                  <div className="nav_bar-menu">


                  </div>

    </div>
  )
}

export default Navigation


