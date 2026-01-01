"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PlusCircle } from "lucide-react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

const AddQuestion = () => {
  const params = useParams();
  const testId = params.testId; 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // --- MOCK SUBMIT HANDLER ---
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate a short network delay for the demo
    setTimeout(() => {
      const payload = {
        questionText: data.questionText,
        options: [data.option1, data.option2, data.option3, data.option4],
        correctAnswer: data.correctAnswer,
      };

      console.log("Mock Payload Created:", payload);
      
      toast.success("Question added successfully (Demo Mode)");
      reset();
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-blue-100 mt-10">
        
        <div className="border-b-2 border-blue-700 pb-4 mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-700 uppercase tracking-tight">
            Add Single Question
          </h1>
          <p className="text-blue-600 text-sm mt-1">
            Manual entry for test bank enrichment.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            id="questionText"
            label="Question Text"
            placeholder="Type your question here..."
            register={register}
            errors={errors}
            required={{ value: true, message: "Question text is required" }}
            className="border-blue-200 focus:border-blue-700"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <Input
              id="option1"
              label="Option 1"
              placeholder="Choice A"
              register={register}
              errors={errors}
              required={{ value: true, message: "Option 1 is required" }}
            />
            <Input
              id="option2"
              label="Option 2"
              placeholder="Choice B"
              register={register}
              errors={errors}
              required={{ value: true, message: "Option 2 is required" }}
            />
            <Input
              id="option3"
              label="Option 3"
              placeholder="Choice C"
              register={register}
              errors={errors}
              required={{ value: true, message: "Option 3 is required" }}
            />
            <Input
              id="option4"
              label="Option 4"
              placeholder="Choice D"
              register={register}
              errors={errors}
              required={{ value: true, message: "Option 4 is required" }}
            />
          </div>

          <div className="pt-2">
            <Input
              id="correctAnswer"
              label="Correct Answer"
              placeholder="Must match one of the options above"
              register={register}
              errors={errors}
              required={{ value: true, message: "Correct answer is required" }}
            />
          </div>

          <div className="flex justify-center md:justify-end pt-6">
            <Button
              type="submit"
              loading={isSubmitting}
              variant="primary"
              size="lg"
              className="w-full md:w-auto px-10 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg shadow-lg"
              leftIcon={<PlusCircle size={20} />}
            >
              Add Question to Bank
            </Button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Frontend Demo Only • Form Data logged to console
            </p>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;