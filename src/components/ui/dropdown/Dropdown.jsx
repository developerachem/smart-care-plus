import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import style from "../active-link/activeLink.module.css";
const DropdownMenu = ({ title, height, children , className , icon }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <li className=" list-none block">
      <div className={`${className} flex items-center justify-between mb-2 cursor-pointer`} onClick={toggleShow}>
        <div className='flex justify-center items-center  '>
          {icon && <span className={`${style.icon} me-2`}>{icon}</span>}
          {title}
        </div>
        <MdKeyboardArrowRight
          className={`dropdown-menu ${showMenu ? 'rotate-90' : ''}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
        />
      </div>
      <ul className={`ml-2 overflow-hidden dropdown-menu font-normal ${showMenu ? height : 'h-0'}`}>
        {children}
      </ul>
    </li>
  );
};

export default DropdownMenu;
