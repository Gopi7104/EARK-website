import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from "react-icons/hi";
import logo from '../../assets/schlogo.webp';
import './Navigation.css';
import '../../index.css';

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const links = [
    { href: '/', text: 'Home' },
    { href: "/about", text: 'About Us' },
    { href: '/curriculum', text: 'Our Curriculum' },
    { href: '/teacher', text: 'Our Teachers' },
  ];

  return (
    <div className="eark__navbar">
      <div className="eark__navbar-links">
        <div className="eark__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="eark__navbar-links_container">
          {links.map(({ href, text }) => (
            <p key={href}>
              <a
                href={href}
                className={activeLink === href ? 'active' : ''}
                onClick={() => {
                  setActiveLink(href);
                  setToggleMenu(false); 
                }}
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
            {links.map(({ href, text }) => (
              <p key={href}>
                <a
                  href={href}
                  className={activeLink === href ? 'active' : ''}
                  onClick={() => {
                    setActiveLink(href);
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
