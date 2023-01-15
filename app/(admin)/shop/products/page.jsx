import React from "react";
import { BiSearch } from "react-icons/bi";
import AdminLayout from "../../(admin)/admin/AdminLayout";
import Card from "../../../components/Card";
import Image from "next/image";
import apple from "../../../assets/images/red-apple.png";
import { products } from "../../../data/data";
import Status from "../../../components/Status";

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

        <table className="w-full mt-5 border-separate">
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

          <tbody className="space-y-20 border-separate border-spacing-10">
            {products.map((product, idx) => (
              <tr key={idx}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={product.image}
                        style={{ objectFit: "contain" }}
                        alt={product.name}
                        height="48"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-md">
                        ID: {product.id} | SKU: {product.SKU}
                      </p>
                    </div>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>
                  <Status
                    variant={product.stock === 0 ? "danger" : "success"}
                  >{`${
                    product.stock === 0 ? "Out of" : `${product.stock} in`
                  } stock`}</Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AdminLayout>
  );
};

export default page;
