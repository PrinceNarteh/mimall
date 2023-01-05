import React from "react";
import { BiSearch } from "react-icons/bi";
import AdminLayout from "../AdminLayout";
import Card from "../../../components/Card";
import Image from "next/image";
import apple from "../../../assets/images/red-apple.png";

const page = () => {
  return (
    <AdminLayout>
      <Card heading="Product List">
        <div className="bg-light-gray flex items-center border border-gray-600 px-2 rounded">
          <BiSearch className="text-3xl text-gray-500" />
          <input
            type="search"
            placeholder="Search for product"
            className="w-full bg-transparent outline-none  p-2 "
          />
        </div>

        <table className="w-full mt-5">
          <thead>
            <tr className="text-left text-xl">
              <th className="w-14">
                <input type="checkbox" />
              </th>
              <th>Product</th>
              <th className="w-40">Category</th>
              <th className="w-40">Stock</th>
              <th className="w-40">Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <tr>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16">
                    <Image src={apple} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Red Apple</h3>
                    <p className="text-md">ID: 1022 | SKU: AC6660KW</p>
                  </div>
                </div>
              </tr>
            </tr>
          </tbody>
        </table>
      </Card>
    </AdminLayout>
  );
};

export default page;
