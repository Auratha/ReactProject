import React from "react";
import shopperLogo from "../Assets/logo.png";
import instagram from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="mt-8 flex flex-col items-center space-y-8">
      <div className="flex items-center">
        <img src={shopperLogo} />
        <h6 className="text-4xl ml-4 font-medium">SHOPPER</h6>
      </div>
      <ul className="flex space-x-10 cursor-pointer">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="social-box flex space-x-10 cursor-pointer">
        <img src={instagram} />
        <img src={pinterest} />
        <img src={whatsapp} />
      </div>
      <div className="w-4/5 border-b-2 border-gray-300"></div>
      <p className="pb-4">Copyright © 2023. All rights reserved.</p>
    </div>
  );
};

export default Footer;
