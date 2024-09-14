import React, { useState } from 'react';
import {  RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from "react-icons/hi";
import logo from '../../assets/schlogo.webp';
import './Navigation.css';
import '../../index.css';

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const links = [
    { hrefVal: '/', text: 'Home' },
    { hrefVal: '/about', text: 'About Us' },
    { hrefVal: '/curriculum', text: 'Our Curriculum' },
    { hrefVal: '/teacher', text: 'Our Teachers' },
  ];

  return (  
    <div className="eark__navbar">
      <div className="eark__navbar-links">
        <a href="/">
        <div className="eark__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        </a>
        <div className="eark__navbar-links_container">
          {links.map(({ hrefVal, text }) => (
            <p key={hrefVal}>
              <a
                href={hrefVal}
                onClick={() => {
                  setActiveLink(hrefVal);
                  setToggleMenu(false); 
                }}
                className={activeLink === hrefVal ? 'active' : ''}
              >
                {text}
              </a>
            </p>
          ))}
        </div>
      </div>
      <div className="eark__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#FCFCFC" size={27} onClick={() => setToggleMenu(false)} />
          : <HiOutlineMenu color="#FCFCFC" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="eark__navbar-menu_container scale-up-center">
          <div className="eark__navbar-menu_container-links">
            {links.map(({ hrefVal, text }) => (
              <p key={hrefVal}>
                <a
                  href={hrefVal}
                  className={activeLink === hrefVal ? 'active' : ''}
                  onClick={() => {
                    setActiveLink(hrefVal);
                    setToggleMenu(false); 
                  }}
                >
                  {text}
                </a>
              </p>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
