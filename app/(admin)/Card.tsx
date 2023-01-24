import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({ heading, children }) => {
  return (
    <div className="bg-light-gray p-5">
      <div className="relative mb-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl">{heading}</h3>
          <label htmlFor="toggleMenu">
            <BsThreeDotsVertical className="text-xl cursor-pointer " />
          </label>
        </div>
        <input
          id="toggleMenu"
          type="checkbox"
          className=" absolute hidden -right-1 w-8 h-8 cursor-pointer bg-transparent peer"
        />
        <div className="hidden absolute right-0 top-7 bg-dark-gray p-2 w-48 border border-light-gray rounded z-30 peer-checked:block">
          <ul>
            <CardItem>Settings</CardItem>
            <CardItem>Move</CardItem>
            <div className="bg-off-white h-[0.5px] my-2"></div>
            <CardItem>Remove</CardItem>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

function CardItem({ children }) {
  return (
    <li className="text-xl hover:bg-light-gray p-2 rounded cursor-pointer">
      {children}
    </li>
  );
}

export default Card;
