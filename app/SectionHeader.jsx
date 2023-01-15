import React from 'react';

const SectionHeader = ({ label }) => {
  return (
    <div className="border-b-2 flex justify-between">
      <h4 className="text-3xl sh-underline relative">{label}</h4>
      <h5 className="text-orange-500 font-bold cursor-pointer">See more...</h5>
    </div>
  );
};

export default SectionHeader;
