import React from "react";
import { BsHeart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";

const MainNavbar = () => {
  return (
    <nav className={"bg-gray-900"}>
      <div
        className={"flex justify-between items-center py-7 max-w-7xl mx-auto"}
      >
        <h3 className="text-pink-500 text-3xl">MiMall</h3>
        <div className="flex items-center space-x-2">
          <div className="bg-white p-2 rounded-md divide-x-2 space-x-2">
            <select name="" id="">
              <option value="all">All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search Products..."
              className="pl-2 outline-none text-gray-700"
            />
          </div>
          <button className="px-6 py-2 bg-pink-500 text-white rounded-md">
            Search
          </button>
        </div>
        <div className="flex items-center space-x-5">
          <CiUser className="text-pink-500 text-3xl cursor-pointer" />
          <BsHeart className="text-pink-500 text-2xl cursor-pointer" />
          <TiShoppingCart className="text-pink-500 text-3xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
