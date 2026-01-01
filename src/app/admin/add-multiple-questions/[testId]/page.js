"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { PlusCircle, Trash2 } from "lucide-react";
import { useParams } from "next/navigation";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

const AddMultipleQuestion = () => {
  const params = useParams();
  const testId = params.testId; // dummy usage (for routing only)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      questions: [
        {
          questionText: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          correctAnswer: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data) => {
    console.log("Test ID (Dummy):", testId);
    console.log("Questions Submitted (Dummy):", data.questions);

    alert("Questions added successfully (Dummy)");

    reset();
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-2xl shadow-2xl border border-gray-300">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Add Multiple Questions
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="p-4 border rounded-xl border-gray-300 bg-white relative"
            >
              <h2 className="font-semibold text-lg text-blue-600 mb-4">
                Question {index + 1}
              </h2>

              <Input
                id={`questions[${index}].questionText`}
                label="Question Text"
                placeholder="Enter the question"
                register={register}
                errors={errors}
                required={{ value: true, message: "Question text is required" }}
              />

              <div className="grid grid-cols-2 gap-4">
                {["option1", "option2", "option3", "option4"].map((opt, i) => (
                  <Input
                    key={i}
                    id={`questions[${index}].${opt}`}
                    label={`Option ${i + 1}`}
                    placeholder={`Enter option ${i + 1}`}
                    register={register}
                    errors={errors}
                    required={{
                      value: true,
                      message: `Option ${i + 1} is required`,
                    }}
                  />
                ))}
              </div>

              <Input
                id={`questions[${index}].correctAnswer`}
                label="Correct Answer"
                placeholder="Enter the correct answer"
                register={register}
                errors={errors}
                required={{
                  value: true,
                  message: "Correct answer is required",
                }}
              />

              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="absolute top-4 right-4 text-red-600 hover:text-red-800 flex items-center gap-1"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              )}
            </div>
          ))}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Button
              type="button"
              variant="secondary"
              size="md"
              leftIcon={<PlusCircle size={16} />}
              onClick={() =>
                append({
                  questionText: "",
                  option1: "",
                  option2: "",
                  option3: "",
                  option4: "",
                  correctAnswer: "",
                })
              }
            >
              Add Another Question
            </Button>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              leftIcon={<PlusCircle size={18} />}
            >
              Add All Questions
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMultipleQuestion;
