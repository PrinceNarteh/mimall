import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
  return (
    <div className="bg-light-gray p-5">
      <div className="relative flex items-center justify-between">
        <h3 className="font-semibold text-2xl mb-3">Header</h3>
        <input
          id="toggleMenu"
          type="checkbox"
          className=" absolute hidden -right-1 w-8 h-8 cursor-pointer bg-transparent peer"
        />
        <label htmlFor="toggleMenu">
          <BsThreeDotsVertical className="text-2xl cursor-pointer " />
        </label>
        <div className="hidden absolute right-0 top-11 bg-dark-gray p-2 w-48 border border-light-gray rounded peer-checked:block">
          <ul>
            <CardItem>Settings</CardItem>
            <CardItem>Move</CardItem>
            <div className="bg-off-white h-[0.5px] my-2"></div>
            <CardItem>Remove</CardItem>
          </ul>
        </div>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        ratione sint nemo quod voluptates voluptatibus odio, modi ab commodi,
        officia, atque ad dicta repellat cumque alias cupiditate? Alias, magnam
        impedit.
      </div>
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
