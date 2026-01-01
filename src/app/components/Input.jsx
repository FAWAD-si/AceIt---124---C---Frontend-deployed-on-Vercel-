"use client";

import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      id,
      type = "text",
      register,
      required,
      errors,
      pattern,
      placeholder,
      maxLength,
      onChange,
      onKeyDown,
    },
    ref
  ) => {
    return (
      <div className="mb-4 w-full">
        {/* Render label only if provided */}
        {label && (
          <label htmlFor={id} className="block mb-1 text-gray-700 font-medium">
            {label}
          </label>
        )}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          pattern={pattern}
          {...register(id, { required })}
          ref={(el) => {
            if (ref) ref(el); // parent ref for focusing
            register(id, { required }).ref(el); // react-hook-form ref
          }}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={`w-full px-4 py-2 border rounded shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${errors[id] ? "border-red-500" : "border-gray-500"}`}
        />

        {errors[id] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[id]?.message || "This field is required"}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
