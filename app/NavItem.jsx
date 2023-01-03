import React from 'react';

const NavItem = ({ label }) => {
  return (
    <li className="px-4 cursor-pointer hover:text-pink-500 hover:scale-105 duration-200">
      {label}
    </li>
  );
};

export default NavItem;
