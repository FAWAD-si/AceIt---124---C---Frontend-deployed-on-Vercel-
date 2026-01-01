"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { toast } from "react-toastify";

const EditQuestion = () => {
  const params = useParams();
  const questionId = params.questionId;
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  // --- DUMMY DATA (Simulating fetching a question by ID) ---
  const dummyQuestion = {
    questionText: "What is the primary function of the 'useEffect' hook in React?",
    options: [
      "To manage local state",
      "To perform side effects in function components",
      "To create global context",
      "To handle form submissions"
    ],
    correctAnswer: "To perform side effects in function components",
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      questionText: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctAnswer: "",
    },
  });

  // Populate the form with dummy data on component mount
  useEffect(() => {
    if (dummyQuestion) {
      reset({
        questionText: dummyQuestion.questionText,
        option1: dummyQuestion.options[0],
        option2: dummyQuestion.options[1],
        option3: dummyQuestion.options[2],
        option4: dummyQuestion.options[3],
        correctAnswer: dummyQuestion.correctAnswer,
      });
    }
  }, [reset]);

  const onSubmit = async (data) => {
    setIsUpdating(true);
    
    // Simulate a network delay for the demo
    setTimeout(() => {
      console.log("Updated Question Data:", data);
      toast.success("Question updated successfully (Demo Mode)");
      setIsUpdating(false);
      router.back(); // Return to previous management page
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-blue-100 mt-10">
        
        {/* Header Section */}
        <div className="border-b-2 border-blue-700 pb-4 mb-8">
          <h1 className="text-3xl font-bold text-blue-700 uppercase tracking-tight">
            Edit Question Content
          </h1>
          <p className="text-blue-600 text-sm italic">
            Reference ID: {questionId || "DEMO-QUE-99"}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Question Text"
            id="questionText"
            placeholder="Enter question text"
            register={register}
            errors={errors}
            required={{ value: true, message: "Question text is required" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <Input
              label="Option 1"
              id="option1"
              placeholder="Enter option 1"
              register={register}
              errors={errors}
              required={{ value: true, message: "Option 1 is required" }}
            />
            <Input
              label="Option 2"
              id="option2"
              placeholder="Enter option 2"
              register={register}
              errors={errors}
              required={{ value: true, message: "Option 2 is required" }}
            />
            <Input
              label="Option 3"
              id="option3"
              placeholder="Enter option 3"
              register={register}
              errors={errors}
              required={{ value: true, message: "Option 3 is required" }}
            />
            <Input
              label="Option 4"
              id="option4"
              placeholder="Enter option 4"
              register={register}
              errors={errors}
              required={{ value: true, message: "Option 4 is required" }}
            />
          </div>

          <Input
            label="Correct Answer"
            id="correctAnswer"
            placeholder="Enter the correct answer (must match one option)"
            register={register}
            errors={errors}
            required={{ value: true, message: "Correct answer is required" }}
          />

          <div className="flex justify-end gap-3 pt-6 border-t border-gray-100 mt-6">
            <Button 
              type="button" 
              variant="secondary" 
              onClick={() => router.back()}
              className="px-6 border-2 border-gray-200 text-gray-500 font-bold hover:bg-gray-50"
            >
              Cancel
            </Button>
            
            <Button 
              type="submit" 
              loading={isUpdating} 
              variant="primary" 
              className="px-8 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg shadow-lg"
            >
              Update Question
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">
              Frontend Demonstration • Changes persistent for current session
            </p>
        </div>
      </div>
    </div>
  );
};

export default EditQuestion;