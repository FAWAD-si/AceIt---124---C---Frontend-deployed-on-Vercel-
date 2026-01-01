"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import Link from "next/link"; 
import { useRouter } from "next/navigation";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    // Simulated network delay for the final assignment demo
    setTimeout(() => {
      // 1. Show Toast Notification as requested
      toast.success("Registration successful! Please verify your email.");

      // 2. Redirect to OTP verification page after notification
      setTimeout(() => {
        router.push("/auth/verify-otp"); 
      }, 1500);
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-200 via-blue-400 to-blue-600 px-4 font-sans">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-blue-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Register
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Full Name"
            id="name"
            type="text"
            placeholder="Enter your full name"
            register={register}
            required="Name is required"
            errors={errors}
          />

          <Input
            label="Email Address"
            id="email"
            type="email"
            placeholder="Enter your email"
            register={register}
            required="Email is required"
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
            size="lg"
            loading={isLoading}
            className="w-full font-semibold bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition uppercase tracking-widest text-xs"
          >
            Register
          </Button>
        </form>

        <p className="mt-4 text-gray-700 text-center">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 font-bold hover:underline">
            Login here
          </Link>
        </p>


      </div>
    </div>
  );
};

export default Register;