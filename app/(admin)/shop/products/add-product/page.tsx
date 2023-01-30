"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import Card from "../../../Card";
import InputField from "../../../../InputField";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const selectedImages = (e: ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.target.files;
    let pickedImages: File[] = [];
    if (files !== null) {
      pickedImages = Array.from(files);
    }
    setImages([...images, ...pickedImages]);
  };

  function deleteHandler(index: number) {
    console.log(index);
    const imageCopy = [...images];
    imageCopy.splice(index, 1);
    setImages([...imageCopy]);
  }

  useEffect(() => {
    const imagesArray = images?.map((file) => {
      return URL.createObjectURL(file);
    });
    setPreviewImages(imagesArray);
  }, [images]);

  console.log(images);

  return (
    <div className="max-w-4xl mx-auto">
      <Card heading={"Add Product"}>
        <div className="space-y-4">
          <InputField
            label="Name"
            name="name"
            register={register}
            errors={errors}
          />
          <div>
            <label htmlFor="" className="text-xl capitalize mb-2 inline-block">
              Description
            </label>
            <textarea
              className="outline-none w-full p-2 bg-transparent border border-gray-600 rounded"
              rows={5}
              onChange={(e) => {}}
            />
          </div>
          <div className="flex gap-5">
            <InputField
              label="Price"
              name="price"
              register={register}
              errors={errors}
            />
            <InputField
              label="Quantity"
              name="quantity"
              register={register}
              errors={errors}
            />
          </div>
          <input type="file" name="" id="" onChange={selectedImages} multiple />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-7 ">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="w-32 h-32 bg-slate-500 rounded-md relative"
            >
              <AiOutlineCloseCircle
                onClick={() => deleteHandler(index)}
                className="absolute -right-2 text-orange-500 -top-2 text-2xl z-10 cursor-pointer bg-white rounded-full"
              />
              <div className="overflow-hidden">
                <Image
                  src={image}
                  fill
                  style={{ objectFit: "cover" }}
                  alt=""
                  className="rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AddProduct;
