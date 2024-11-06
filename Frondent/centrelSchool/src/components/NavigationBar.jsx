// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/LOGO-1.jpg';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 text-white flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <a href="mailto:stcs.stcs2013@gmail.com" className="flex items-center space-x-1">
            <FaEnvelope />
            <span> tics2006@yahoo.co.in</span>
          </a>
          <a href="mailto:stcs.stcs@rediffmail.com" className="flex items-center space-x-1">
            <FaEnvelope />
            <span> tics2006@yahoo.co.in</span>
          </a>
          <a href="tel:04712511330" className="flex items-center space-x-1">
            <FaPhone />
            <span> 9895113394</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span>THANBEEHUL ISLAM CENTRAL SCHOOL, Kasaragood - 695043</span>
          <a href="#" className="text-white">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo and School Information */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="School Logo"
              className="h-17 w-12"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">THANBEEHUL ISLAM CENTRAL SCHOOL</h1>
              <p className="text-sm text-gray-600">
                Affiliated to CBSE, New Delhi/(Affiliated to CBSE, No. 931201) <br />
                THANBEEHUL ISLAM CENTRAL SCHOOL, <br />
                Kasaragood-695043
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links with 3D Hover Effect */}
          <nav className={`flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            <a href="#home" className="relative text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg px-4 py-2 rounded-lg">
              HOME
            </a>
            <a href="#about" className="relative text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg px-4 py-2 rounded-lg">
              ABOUT
            </a>
            <a href="#academic" className="relative text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg px-4 py-2 rounded-lg">
              ACADEMIC
            </a>
            <a href="#facilities" className="relative text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg px-4 py-2 rounded-lg">
              FACILITIES
            </a>
            <a href="#updates" className="relative text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg px-4 py-2 rounded-lg">
              UPDATES
            </a>
            <a href="#activities" className="relative text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg px-4 py-2 rounded-lg">
              ACTIVITIES
            </a>
            <a href="#contact" className="relative text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg px-4 py-2 rounded-lg">
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
