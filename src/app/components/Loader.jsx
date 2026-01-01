"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/60 backdrop-blur-md">
      <div
        className="animate-spin rounded-full border-4 border-white border-t-blue-600"
        style={{
          width: "60px",
          height: "60px",
        }}
      />
    </div>
  );
};

export default Loader;