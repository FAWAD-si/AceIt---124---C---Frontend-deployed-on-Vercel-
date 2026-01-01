"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import Input from "../../../components/Input"; 
import Button from "../../../components/Button";
import { toast } from "react-toastify";
import ModalComponent from "../../../components/Modal";

const EditTest = () => {
  const params = useParams();
  const testId = params.id; 
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- DUMMY DATA (Simulating the data that would come from an API) ---
  const dummyTestData = {
    data: {
      title: "Full Stack Development Midterm",
      subject: "Computer Science",
      totalMarks: 100,
      duration: 60,
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  // Load dummy data into the form on mount
  useEffect(() => {
    if (dummyTestData.data) {
      reset({
        title: dummyTestData.data.title,
        subject: dummyTestData.data.subject,
        totalMarks: dummyTestData.data.totalMarks,
        duration: dummyTestData.data.duration,
      });
    }
  }, [reset]);

  const handleCancelEdit = () => {
    setIsModalOpen(false);
  };

  const handleConfirmEdit = async () => {
    // Mocking the save process
    toast.success("Changes saved successfully (Demo Mode)");
    setIsModalOpen(false);
    router.push("/admin/all-tests"); // Navigate back
  };

  const onSubmit = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-blue-100 mt-10">
        
        <div className="border-b-2 border-blue-700 pb-4 mb-8">
          <h1 className="text-3xl font-bold text-blue-700 uppercase tracking-tight">
            Edit Test Details
          </h1>
          <p className="text-blue-600 text-sm italic">
            Updating ID: {testId || "TEST-DEMO-001"}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            placeholder="English, Biology, Chemistry, Physics"
            register={register}
            errors={errors}
            required={{ value: true, message: "Subject is required" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="totalMarks"
              label="Total Marks"
              type="number"
              placeholder="Enter total marks"
              register={register}
              errors={errors}
            />

            <Input
              id="duration"
              label="Duration (minutes)"
              type="number"
              placeholder="Enter test duration"
              register={register}
              errors={errors}
              required={{ value: true, message: "Duration is required" }}
            />
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-gray-100 mt-6">
            <Button
              type="button"
              variant="secondary"
              className="px-6 border-2 border-gray-200 text-gray-500 font-bold hover:bg-gray-50"
              onClick={() => router.back()}
            >
              Cancel
            </Button>

            <Button 
              type="submit" 
              variant="primary" 
              className="px-8 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg shadow-lg"
            >
              Save Changes
            </Button>
          </div>
        </form>

        <ModalComponent
          isOpen={isModalOpen}
          onClose={handleCancelEdit}
          title="Confirm Edit"
          footer={
            <div className="flex gap-3">
              <Button variant="secondary" onClick={handleCancelEdit}>
                Go Back
              </Button>
              <Button 
                variant="danger" 
                className="bg-red-600 text-white font-bold" 
                onClick={handleConfirmEdit}
              >
                Confirm Update
              </Button>
            </div>
          }
        >
          <div className="py-2">
             <p className="text-gray-700">
               Are you sure you want to update the settings for <span className="font-bold text-blue-700">"{watch("title")}"</span>?
             </p>
             <p className="text-xs text-gray-400 mt-2 font-medium uppercase">
               *Changes will be applied immediately to the demo state.
             </p>
          </div>
        </ModalComponent>
      </div>
    </div>
  );
};

export default EditTest;