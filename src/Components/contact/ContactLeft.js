import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import pic from"../Manoj.png"

const ContactLeft = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-shadowOne flex flex-col gap-6 justify-center">
      <img
        className="w-72 h-64 object-cover rounded-lg mb-3 mt-2"
        src={pic}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Manoj Ahirwar</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a MERN stack developer, skilled in MongoDB, Express, React, <br/>and Node.js, building dynamic and responsive web applications.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 XXXXXXXXXX</span>
        </p>
        <p className="text-base text-gray-400 flex flex-col items-center sm:flex-row  sm:gap-2">
          Email: <span className="text-lightText">xyzabc@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;