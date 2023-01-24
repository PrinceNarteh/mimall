import React from "react";

const InputField = ({ type = "text", label, name, ...props }) => {
  return (
    <div className="w-full">
      <label htmlFor="" className="text-xl capitalize mb-2 inline-block">
        {label}
      </label>
      <input
        type={type}
        {...props}
        name={name}
        className="outline-none w-full p-2 bg-transparent border border-gray-600 rounded"
      />
    </div>
  );
};

export default InputField;
