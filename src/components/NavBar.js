import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/facebook";

const NavBar = () => {
  return (
    <div className="NavLink flex justify-between items-center pr-8">
      <div className="w-28">
        <img src="/Images/logo.png" alt="Mychef logo" />
      </div>

      <div className="flex gap-6 p-1 text-white text-lg">
        <a href="/" className="hover:text-red-500">
          Home
        </a>
        <a href="/about" className="hover:text-red-500">
          About
        </a>
        <a href="/menu" className="hover:text-red-500">
          Menu
          <FontAwesomeIcon icon={faChevronDown} className="pl-3" />
        </a>
        <a href="/contact" className="hover:text-red-500">
          Contact
        </a>
      </div>

      <div className="flex gap-3 w-36">
        <SocialIcon url="www.facebook.com" fgColor="white" bgColor="none" />
        <SocialIcon url="www.instagram.com" fgColor="white" bgColor="none" />
        <SocialIcon url="www.whatsapp.com" fgColor="white" bgColor="none" />
      </div>
    </div>
  );
};

export default NavBar;
