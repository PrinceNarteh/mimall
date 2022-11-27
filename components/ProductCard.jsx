import Image from 'next/image';
import React from 'react';
import { MdOutlineStarPurple500, MdOutlineStarHalf } from 'react-icons/md';

const ProductCard = () => {
  return (
    <div className="h-[450px] w-72 shadow-lg rounded-lg overflow-hidden">
      <div className="h-[250px] bg-slate-500 relative">
        <Image src={'/images/product-1.jpg'} fill={true} objectFit="cover" />
      </div>
      <div className="p-2 space-y-1">
        <div className="flex text-2xl text-pink-700">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarHalf />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          distinctio dolorum aperiam.
        </p>
        <div className="space-x-2">
          <span className="text-orange-500 text-xl font-bold">$105.00</span>
          <span className="line-through text-gray-600 text-lg">$210</span>
        </div>
        <button className="border border-pink-500 text-pink-500 px-3 py-1 rounded-md hover:bg-pink-500 hover:text-white duration-200">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
