"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

const CreateTest = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Test Data (Dummy):", {
      title: data.title,
      subject: data.subject,
      totalMarks: Number(data.totalMarks) || 0,
      duration: Number(data.duration),
    });

    alert("Test created successfully (Dummy)");

    // Redirect to dashboard (dummy navigation)
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-2xl shadow-2xl border border-gray-300">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Create New Test
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            id="title"
            label="Test Title"
            placeholder="Enter test title"
            register={register}
            errors={errors}
            required={{ value: true, message: "Title is required" }}
          />

          <Input
            id="subject"
            label="Subject"
            placeholder="Enter subject (English, Biology, Chemistry, Physics)"
            register={register}
            errors={errors}
            required={{ value: true, message: "Subject is required" }}
          />

          <Input
            id="totalMarks"
            label="Total Marks"
            type="number"
            placeholder="Enter total marks (default 0)"
            register={register}
            errors={errors}
          />

          <Input
            id="duration"
            label="Duration (minutes)"
            type="number"
            placeholder="Enter test duration in minutes"
            register={register}
            errors={errors}
            required={{ value: true, message: "Duration is required" }}
          />

          <div className="flex justify-end">
            <Button type="submit" variant="primary" size="lg">
              Create Test
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTest;
