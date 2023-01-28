"use client";

import React, { useState } from "react";
import Card from "@/app/(admin)/Card";
import InputField from "@/app/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createShopOwnerDto } from "@/utils/validations";
import { httpClient } from "@/utils/httpClient";

const AddShop = () => {
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(createShopOwnerDto),
  });

  const submitHandler = async (data: any) => {
    try {
      const res = await httpClient.post("/auth/register", data);
      console.log(res.data.user);
    } catch (error: any) {
      setError(error.response.data.error);
    }
  };

  console.log(errors);

  return (
    <div className="max-w-4xl mx-auto">
      <Card heading="Add Shop Owner">
        {error && <li className="py-2">Email already in use.</li>}
        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
          <div className="w-full my-2">
            <label
              htmlFor="shop_owner"
              className="capitalize block mb-1.5 pl-2 tracking-widest"
            >
              Shop Owner
            </label>
            <input
              type="text"
              name="owner"
              list="shop_owners"
              className="outline-none bg-transparent border border-gray-500 rounded w-full p-2"
            />

            <datalist id="shop_owners">
              <option value="">---Search or Select Shop Owner</option>
              <option value="1">One</option>
              <option value="1">One</option>
              <option value="1">One</option>
            </datalist>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <InputField
              name="name"
              label="Shop Name"
              register={register}
              errors={errors}
              required
              validationSchema={{ required: "Shop name is required" }}
            />
            <InputField
              name="location"
              label="Location"
              register={register}
              errors={errors}
              required
              validationSchema={{ required: "Location is required" }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Create Account
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddShop;
