import React from 'react';
import { ThemeContext } from '../App';
import { useContext } from "react";
// Import the desired FlatIcon icons here
import { FaInstagram, FaGithub, FaYoutube, FaDiscord, FaTwitter } from 'react-icons/fa';
import logoDark from "../imgs/logo-icssf-btn.png";
import logoLight from "../imgs/logo-icssf-btn.png";
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    id: 1,
    icon: <FaInstagram className='text-2xl' color="#C13584"/>,
    url: "#",
    // Instagram color
  },
  {
    id: 2,
    icon: <FaGithub className='text-2xl' />,
    url: "#",
    // Github color
  },
  {
    id: 3,
    icon: <FaYoutube className='text-2xl' color="#FF0000" />,
    url: "#",
     // Youtube color
  }
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
        
        <div className="container mt-0">
          <div className='pt-5 border-t-2 border-white'>
            <div className="flex items-center justify-start md:ml-20 flex-col sm:flex-row mb-5">
              <img src={logoDark} alt="Footer Logo" className="h-40 w-auto mb-5 mr-5 sm:mb-0" />
              <ul className="flex gap-2 sm:gap-2">
                {socialLinks.map((link) => (
                  <a
                    href={link.url}
                    target="__blank"
                    key={link.id}
                    className="circle-button text-dark-400 cursor-pointer rounded-lg bg-dark-50 dark:bg-ternary-dark hover:bg-green-orange shadow-md p-4 duration-300"
                  >
                    <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                  </a>
                ))}
              </ul>
            </div>
            <div className="font-general-regular flex flex-col justify-right mb-5 items-center sm:mb-1">
              <p className="mt-5 mb-10">
                {`Copyright © ICSSF ${year}`}
              </p>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
