import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="h-[calc(100vh_-_144px)] bg-pink-500 relative">
      <Image src={'/images/bg-1.jpg'} fill={true} objectFit="cover" />
    </div>
  );
};

export default Header;
