import Image from "next/image";
import Link from "next/link";
import React from "react";
import apple from "../../../../../assets/images/red-apple.png";

const OrderDetails = () => {
  return (
    <div>
      <div className="p-5">
        <div className="flex items-center justify-between bg-gray-500 bg-opacity-20 py-4 px-4">
          <h3 className="text-xl font-bold tracking-widest">Items</h3>
          <Link href="/">Edit</Link>
        </div>
        <div>
          <table className="w-full">
            <tbody>
              <tr className="border-b border-b-gray-600">
                <td className="py-2 pl-4">
                  <div className="flex items-center">
                    <Image
                      className="mr-5"
                      src={apple}
                      width={40}
                      height={40}
                    />
                    <span>Red Apple</span>
                  </div>
                </td>
                <td className="w-40 text-center">$840.00</td>
                <td className="w-40 text-center">1</td>
                <td className="w-40 text-right pr-4">$840.00</td>
              </tr>
              <tr className="border-b border-b-gray-600">
                <td className="py-2 pl-4">
                  <div className="flex items-center">
                    <Image
                      className="mr-5"
                      src={apple}
                      width={40}
                      height={40}
                    />
                    <span>Red Apple</span>
                  </div>
                </td>
                <td className="w-40 text-center">$840.00</td>
                <td className="w-40 text-center">1</td>
                <td className="w-40 text-right pr-4">$840.00</td>
              </tr>
              <tr className="border-b border-b-gray-600">
                <td className="py-2 pl-4">
                  <div className="flex items-center">
                    <Image
                      className="mr-5"
                      src={apple}
                      width={40}
                      height={40}
                    />
                    <span>Red Apple</span>
                  </div>
                </td>
                <td className="w-40 text-center">$840.00</td>
                <td className="w-40 text-center">1</td>
                <td className="w-40 text-right pr-4">$840.00</td>
              </tr>
              <tr className="border-b border-b-gray-600">
                <td className="py-2 pl-4">
                  <div className="flex items-center">
                    <Image
                      className="mr-5"
                      src={apple}
                      width={40}
                      height={40}
                    />
                    <span>Red Apple</span>
                  </div>
                </td>
                <td className="w-40 text-center">$840.00</td>
                <td className="w-40 text-center">1</td>
                <td className="w-40 text-right pr-4">$840.00</td>
              </tr>
              <tr>
                <td className="pl-4 py-2" colSpan={3}>
                  Subtotal
                </td>
                <td className="w-40 text-right pr-4">$1234.00</td>
              </tr>
              <tr>
                <td className="pl-4 py-2" colSpan={3}>
                  Tax
                </td>
                <td className="w-40 text-right pr-4">$12.34</td>
              </tr>
              <tr className=" border-b border-b-gray-600">
                <td className="pl-4 py-2" colSpan={3}>
                  Delivery
                </td>
                <td className="w-40 text-right pr-4">$10.00</td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between bg-gray-500 bg-opacity-20 py-4 px-4">
            <h3 className="text-xl font-bold tracking-widest">Total</h3>
            <Link href="/">$5,882.00</Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default OrderDetails;
