"use client";
import React from "react";
import { Loader2 } from "lucide-react";

const variantClasses = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-3 text-lg",
};

const Button = ({
  children,
  type = "button",
  onClick,
  disabled,
  loading = false,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  className = "",
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2 rounded-lg shadow transition
        disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
        ${variantClasses[variant] || variantClasses.primary}
        ${sizeClasses[size] || sizeClasses.md}
        ${className}
      `}
    >
      {/* Loading Spinner */}
      {loading && <Loader2 className="animate-spin h-5 w-5" />}

      {/* Icon (Left) */}
      {!loading && leftIcon && <span>{leftIcon}</span>}

      {/* Text */}
      {children}

      {/* Icon (Right) */}
      {!loading && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;