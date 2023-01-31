"use client";

import Card from "@/app/(admin)/Card";
import SearchFilter from "@/app/(admin)/SearchFilter";
import InputField from "@/app/InputField";
import { httpClient } from "@/utils/httpClient";
import { useForm } from "react-hook-form";

const shopOwners = [
  {
    id: "120",
    fullName: "John Doe",
  },
  {
    id: "121",
    fullName: "Jane Doe",
  },
  {
    id: "122",
    fullName: "Rose Smith",
  },
  {
    id: "123",
    fullName: "Araba Amissah",
  },
];

const AddShop = () => {
  const {
    register,
    formState: { errors },
    setValue,
    setError,
    handleSubmit,
  } = useForm({
    // resolver: zodResolver(createShopOwnerDto),
  });

  const submitHandler = async (data: any) => {
    console.log(data);
    if (data.shop_owner === "") {
      setError("shop_owner", {
        message: "Shop owner is required.",
      });
      return;
    }
    try {
      const res = await httpClient.post("/auth/register", data);
      console.log(res.data.user);
    } catch (error: any) {
      // setError(error.response.data.error);
    }
  };

  console.log(errors);

  return (
    <div className="max-w-4xl mx-auto">
      <Card heading="Add Shop Owner">
        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
          <div className="w-full my-2">
            <label
              htmlFor="shop_owner"
              className="capitalize block mb-1.5 pl-2 tracking-widest"
            >
              Shop Owner
            </label>
            <SearchFilter
              shopOwners={shopOwners}
              errors={errors}
              setValue={setValue}
            />
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
