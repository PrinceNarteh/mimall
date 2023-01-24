import React from "react";
import Card from "../../../Card";
import InputField from "../../../InputField";

const AddProduct = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card heading={"Add Product"}>
        <div className="space-y-4">
          <InputField label="Name" />
          <div>
            <label htmlFor="" className="text-xl capitalize mb-2 inline-block">
              Description
            </label>
            <textarea
              className="outline-none w-full p-2 bg-transparent border border-gray-600 rounded"
              rows={5}
            />
          </div>
          <div className="flex gap-5">
            <InputField label="Price" />
            <InputField label="Quantity" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddProduct;
