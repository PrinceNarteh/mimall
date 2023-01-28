import React from "react";
import CartItem from "../CartItem";

const Cart = () => {
  return (
    <div className="py-10 max-w-4xl w-full mx-auto grid grid-cols-1 gap-y-5 md:grid-cols-5 md:gap-x-5 px-7">
      <div className="col-span-3 w-full space-y-5">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="col-span-2 h-20 w-full bg-gray-800"></div>
    </div>
  );
};

export default Cart;
