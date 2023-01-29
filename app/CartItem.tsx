import React from "react";
import productOne from "@/assets/images/product-1.jpg";
import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CartItem = () => {
  return (
    <div className="h-28 flex bg-gray-300 w-full rounded">
      <div className="relative w-24 shrink-0">
        <Image src={productOne} fill style={{ objectFit: "contain" }} alt="" />
      </div>
      <div className="border-l border-l-gray-400 py-2 px-5 flex-1">
        <h3 className="font-semibold tracking-wide text-xl line-clamp-1">
          Lorem ipsum dolor dolor dolor sit amet.
        </h3>
        <p className="flex items-start my-3 tracking-wide -mt-0 -pl-0">
          ¢123.50
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center -mt-1 space-x-2">
            <IoMdArrowDropleft className="text-4xl cursor-pointer" />
            <span className="inline-block">5</span>
            <IoMdArrowDropright className="text-4xl cursor-pointer" />
          </div>
          <MdDelete className="text-[red] text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
