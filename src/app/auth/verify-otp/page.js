"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle Form Submission (Simulated)
  const onSubmit = async (data) => {
    setIsLoading(true);
    const finalOtp = Object.values(data).join("");

    // Simulated network delay
    setTimeout(() => {
      console.log("OTP Submitted:", finalOtp);
      toast.success("OTP verified successfully! (Demo Mode)");
      
      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
      
      setIsLoading(false);
    }, 1000);
  };

  // Logic to move focus to next input
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d$/.test(value)) return;
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Logic to move focus back on backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-200 via-blue-400 to-blue-600 px-4 font-sans">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-black text-center text-blue-700 mb-2 uppercase tracking-tighter">
          Verify OTP
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8 font-medium">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-6 gap-2">
            {["otp1", "otp2", "otp3", "otp4", "otp5", "otp6"].map((field, i) => (
              <Input
                key={field}
                id={field}
                type="text"
                maxLength={1}
                placeholder="-"
                className="text-center text-xl font-bold border-blue-200 focus:border-blue-700"
                register={register}
                onChange={(e) => handleInputChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                required=" "
                errors={errors}
                ref={(el) => (inputRefs.current[i] = el)}
              />
            ))}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            loading={isLoading}
            className="w-full font-bold bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl shadow-lg transition uppercase tracking-widest text-xs"
          >
            Confirm Verification
          </Button>
        </form>

        <div className="mt-8 text-center">
          <button 
            type="button"
            onClick={() => toast.info("New OTP sent! (Simulated)")}
            className="text-blue-700 font-bold text-xs uppercase tracking-widest hover:underline"
          >
            Resend Code
          </button>
        </div>


      </div>
    </div>
  );
};

export default VerifyOtp;