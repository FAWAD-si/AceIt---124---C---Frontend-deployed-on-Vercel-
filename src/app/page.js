"use client";
import React from "react";
import Link from "next/link";

export default function GlobalLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      
      {/* --- NAVBAR SECTION --- */}
      {/* Blue background, white links, all links visible (no dropdowns) */}
      <nav className="bg-blue-500 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-[98%] mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-black tracking-tighter mr-4">
            ACEIT
          </Link>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-blue-200 transition">Home</Link>
            <Link href="/student" className="text-yellow-300 hover:underline">Student Portal</Link>
            <Link href="/admin/dashboard" className="hover:text-blue-200">Admin Dash</Link>
            <Link href="/admin/all-tests" className="hover:text-blue-200">All Tests</Link>
            <Link href="/admin/create-test" className="hover:text-blue-200">Create Test</Link>
            <Link href="/admin/view-questions" className="hover:text-blue-200">View Questions</Link>
            <Link href="/admin/manage-questions" className="hover:text-blue-200">Manage Questions</Link>
            <Link href="/admin/flagged-questions" className="hover:text-blue-200">Flagged</Link>
            <Link href="/admin/add-question" className="hover:text-blue-200">+Question</Link>
            
            {/* Auth Links Styled as Buttons */}
            <div className="flex gap-2 ml-2">
              <Link href="/auth/login" className="bg-white text-blue-700 px-4 py-1 rounded-sm hover:bg-gray-100 transition">
                Login
              </Link>
              <Link href="/auth/register" className="border border-white text-white px-4 py-1 rounded-sm hover:bg-blue-800 transition">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HOME PAGE BODY SECTION --- */}
      {/* White background with centered blue text */}
      <main className="grow flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl space-y-6">
          <p className="bg-red-600 text-white p-3 font-bold rounded-lg">Homepage is yet to be designed .. This is a simple one for demonstration purposes.All links are  in navbar and can be accesed.</p>
          <h2 className="text-3xl md:text-7xl font-extrabold text-blue-500 leading-tight">
            Welcome to the <br /> 
            <span className="italic">AceIT - Your Ultimate preparation platform</span>
          </h2>
          
          <div className="w-24 h-1 bg-blue-700 mx-auto my-8 rounded-full"></div>

          <p className="text-sm md:text-2xl text-blue-500 font-semibold max-w-3xl mx-auto leading-relaxed">
            This is a complete Frontend demonstration of an Online Testing System. 
            Navigate through the Student Portal or the various Admin Tools 
            using the links provided in the blue navigation bar above.
          </p>

          <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-medium pt-4">
            Final Assignment • Vercel Deployment • 2026
          </p>
        </div>
      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center">
        <div className="space-y-2">
          <p className="text-blue-700 font-bold text-lg">AceIt System Architecture</p>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
            Frontend Only Version - No Backend Required for Review
          </p>
          <div className="flex justify-center gap-4 pt-4 text-[11px] text-blue-400 font-bold uppercase">
             <Link href="/forbidden">Forbidden Area</Link>
             <span>|</span>
             <Link href="/unauthorized">Unauthorized Access</Link>
             <span>|</span>
             <Link href="/auth/verify-otp">Verify OTP</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}