import React ,{useState}from 'react'
import './Navigation.css'
import'../index.css'

// import {links} from 'react-router-dom'
import schlogo from '../asset/Picture/schlogo.webp';
// import schlogo from '../asset/Picture/EARK_Logo.png';

// const NarBar =()=>{
//     const [toggleMenu,setToggleMenu]
// }


const Navigation = () => {
  return (
    <div className='nav_bar_main'>
        <div className="nav_logo_container">
            <img className='nav_logo' src={schlogo} alt="logo image" />
           <div className="nav_link_container">

        <p><a href='#' >About Us</a></p>
        <p><a href='#' >Curriculum</a></p>
        <p><a href='#' >Our faculties</a></p>
            </div>
            </div>
    </div>
  )
}

export default Navigation


