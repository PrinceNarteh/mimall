"use client";

import Link from "next/link";
import React from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

const SideBar = ({ menus, open, setOpen }) => {
  return (
    <div
      className={`bg-[#0e0e0e] fixed top-0 left-0 min-h-screen ${
        open ? "w-60" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <div>
            {menu?.subLinks ? (
              <div
                key={i}
                className={`relative ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <input
                  type="checkbox"
                  className="absolute h-8 inset-x-0 bg-red-500 z-10 opacity-0 cursor-pointer peer"
                />
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <IoIosArrowBack className="absolute right-2 peer-checked:-rotate-90 duration-200" />

                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
                <div className="max-h-0 overflow-hidden peer-checked:max-h-max absolute top-9">
                  {menu.subLinks.map((subLink, index) => (
                    <Link
                      href={subLink.link}
                      key={i}
                      className={`${
                        menu?.margin && "mt-5"
                      } group flex items-center text-sm py-3  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                    >
                      <div>
                        {React.createElement(subLink?.icon, { size: "20" })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${i + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500 ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        {subLink?.name}
                      </h2>
                      <h2
                        className={`${
                          open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                      >
                        {subLink?.name}
                      </h2>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={menu.link}
                key={i}
                className={`${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
