"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input"; 
import Button from "../../components/Button"; 
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    // Simulated network delay for the final assignment demo
    setTimeout(() => {
      // 1. Show Toast Notification as requested
      toast.success("Login successful! Redirecting to dashboard");

      // 2. Simple Role-Based Routing Logic for demo purposes
      // If email includes 'admin', go to Admin Dash; else go to Student Dash
      if (data.email.toLowerCase().includes("admin")) {
        router.push("/admin/dashboard");
      } else {
        router.push("/student");
      }
      
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-200 via-blue-400 to-blue-600 px-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-blue-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Email Address"
            id="email"
            type="email"
            placeholder="admin@aceit.com or student@aceit.com"
            register={register}
            required="Email is required" 
            pattern={{
              value: /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i,
              message: "Please enter a valid email address"
            }}
            errors={errors}
          />

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            required="Password is required"
            errors={errors}
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            loading={loading}
            className="w-full font-semibold bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition"
          >
            Login
          </Button>
        </form>
        
        <p className="mt-4 text-gray-700 text-center">
          Do not have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 font-bold hover:underline">
            Register here
          </Link>
        </p>

    
      </div>
    </div>
  );
};

export default Login;