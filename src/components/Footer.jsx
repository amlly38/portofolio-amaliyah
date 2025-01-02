import React from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IoCodeSlash } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-800/40 text-gray-300 py-8">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-20 space-y-6 md:space-y-0">
        {/* Brand Section */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-3xl font-semibold text-gray-200">
            <IoCodeSlash className='inline mr-2 w-8 h-8' />
              Amaliyah
          </h3>
          <div className="flex justify-center md:justify-start gap-6 text-3xl">
            <a href="https://github.com/amlly38" aria-label="GitHub" className="hover:text-gray-400">
              <FaGithubSquare />
            </a>
            <a href="https://github.com/amlly38" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/amlly38_" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://wa.me/625880193743" aria-label="WhatsApp" className="hover:text-gray-400">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="text-center md:text-right text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Amaliyah. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
