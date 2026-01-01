"use client";
import React from "react";
import Link from "next/link"; // Next.js Link component

const Forbidden403 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-200 via-blue-400 to-blue-600 px-4 font-sans">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md text-center">
        
        {/* Error Code */}
        <h1 className="text-6xl font-black text-blue-700 mb-4 tracking-tighter">
          403
        </h1>
        
        {/* Status Text */}
        <p className="text-xl font-bold text-gray-700 mb-4 uppercase tracking-widest">
          Access Forbidden
        </p>
        
        {/* Description */}
        <p className="text-gray-600 mb-8 font-medium">
          You do not have administrative permission to view this section.
        </p>
        
        {/* Back to Home Button using Next.js Link */}
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-blue-700 text-white rounded-xl shadow-lg hover:bg-blue-800 font-bold uppercase text-xs tracking-[0.2em] transition-all"
        >
          Back to Home
        </Link>

       

      </div>
    </div>
  );
};

export default Forbidden403;