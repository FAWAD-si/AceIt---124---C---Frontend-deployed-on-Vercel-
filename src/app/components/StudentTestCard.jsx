"use client";
import React from "react";
import Button from "../../../../vercelFrontend/aceit/src/app/components/Button";
import { PlayCircle } from "lucide-react"; // Import an icon for the button

const StudentTestCard = ({ test, onAttempt }) => {
  return (
    <div
      className="bg-gray-50 rounded-xl p-6 shadow-2xl border border-gray-300
                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-blue-600">{test.title}</h3>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1 font-semibold">
            {test.subject?.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="space-y-2 text-gray-700 mb-6">
        <p className="flex justify-between">
          <span className="font-semibold">Total Marks:</span> 
          <span>{test.totalMarks}</span>
        </p>
        <p className="flex justify-between">
          <span className="font-semibold">Duration:</span> 
          <span>{test.duration} mins</span>
        </p>
        <p className="flex justify-between">
          <span className="font-semibold">Questions:</span> 
          <span>{test.questions?.length || 0}</span>
        </p>
      </div>

      <Button
        variant="primary"
        size="md"
        className="w-full font-bold shadow-md"
        onClick={() => onAttempt(test)}
        leftIcon={<PlayCircle size={20} />}
      >
        Attempt Quiz
      </Button>
    </div>
  );
};

export default StudentTestCard;