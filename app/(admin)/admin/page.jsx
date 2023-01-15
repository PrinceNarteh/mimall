import React from "react";
import Card from "../Card";
import AdminLayout from "./AdminLayout";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";

const Home = ({ children }) => {
  return (
    <div>
      <AdminLayout>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Card heading="Total Sells">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold">$3799.00</h3>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-2xl gap-2">
                  <AiOutlineRise className="text-green-500 font-bold" /> 37.5%
                </div>
                <p className="text-xs">Compared to previous month</p>
              </div>
            </div>
          </Card>
          <Card heading="Average Order Value">
            <div className="flex justify-between gap-5 items-center">
              <h3 className="text-xl font-extrabold">$279.00</h3>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-2xl gap-2">
                  <AiOutlineFall className="text-red-500 font-bold" /> 12.5%
                </div>
                <p className="text-xs">Compared to previous month</p>
              </div>
            </div>
          </Card>
          <Card heading="Total Orders">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold">600</h3>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-2xl gap-2">
                  <AiOutlineRise className="text-green-500 font-bold" /> 21.5%
                </div>
                <p className="text-xs">Compared to previous month</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-5">
          <Card heading="Recent Orders">
            <div className="overflow-auto">
              <table className="max-w-full w-full">
                <thead>
                  <tr className="text-left">
                    <th className="px-2 py-4 w-20">No.</th>
                    <th className="px-2 py-4 w-32">Status</th>
                    <th className="px-2 py-4 max-w-xl">Customer Name</th>
                    <th className="px-2 py-4 w-40">Date</th>
                    <th className="px-2 py-4 w-20">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-500">
                  <tr>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      #00745
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      Pending
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      05-01-2023
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      $2,742.00
                    </td>
                  </tr>
                  <tr>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      #00745
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      Pending
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      05-01-2023
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      $2,742.00
                    </td>
                  </tr>
                  <tr>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      #00745
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      <span className="p-1.5 text-xs font-medium tracking-wider uppercase text-blue-800 bg-blue-300 bg-opacity-30 rounded-sm">
                        Pending
                      </span>
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      05-01-2023
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      $2,742.00
                    </td>
                  </tr>
                  <tr>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      #00745
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      Pending
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      05-01-2023
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      $2,742.00
                    </td>
                  </tr>
                  <tr>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      #00745
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      Pending
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      05-01-2023
                    </td>
                    <td className="text-md whitespace-nowrap px-2 py-4">
                      $2,742.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </AdminLayout>
    </div>
  );
};

export default Home;
