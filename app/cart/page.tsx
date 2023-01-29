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
      <div className="col-span-2 h-fit w-full space-y-2 border border-gray-400 p-3 rounded shadow-md">
        <div className="flex justify-between items-center ">
          <h4>Subtotal</h4>
          <span>¢200</span>
        </div>
        <div className="flex justify-between items-center ">
          <h4>Delivery</h4>
          <span>¢200</span>
        </div>
        <div className="flex justify-between items-center border-y border-y-gray-400 py-1.5">
          <h4 className="font-bold">Total</h4>
          <span>¢200</span>
        </div>
        <button className="text-center w-full bg-pink-500 text-white py-3 rounded-md font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
