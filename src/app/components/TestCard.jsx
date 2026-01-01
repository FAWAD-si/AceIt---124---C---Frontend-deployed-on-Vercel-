"use client";
import React from 'react';
// Adjust import path if needed (e.g., "@/components/Button")
import Button from "./Button"; 

const TestCard = ({ test, handleEditTest, handleDeleteClick, handleActivateTest }) => {
  return (
    <div
      className="bg-gray-50 rounded-xl p-6 shadow-2xl border border-gray-300
                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl"
    >
      <h3 className="text-xl font-semibold text-blue-600">{test.title}</h3>
      <p className="text-gray-700 mt-1">
        <span className="font-semibold">Subject:</span>{" "}
        {test.subject.charAt(0).toUpperCase() + test.subject.slice(1)}
      </p>
      <p className="text-gray-700 mt-1">
        <span className="font-semibold">Total Marks:</span> {test.totalMarks}
      </p>
      <p className="text-gray-700 mt-1">
        <span className="font-semibold">Duration:</span> {test.duration} mins
      </p>
      <p
        className={`mt-1 font-semibold ${
          test.isActive ? "text-green-600" : "text-red-600"
        }`}
      >
        {test.isActive ? "Active" : "Inactive"}
      </p>

      <div className="flex gap-2 mt-4">
        <Button
          variant="primary"
          size="md"
          className="flex-1"
          onClick={() => handleEditTest(test)}
        >
          Edit
        </Button>

        <Button
          variant="danger"
          size="md"
          className="flex-1"
          onClick={() => handleDeleteClick(test)}
        >
          Delete
        </Button>

        {!test.isActive && (
          <Button
            variant="secondary"
            size="md"
            className="flex-1"
            onClick={() => handleActivateTest(test)}
          >
            Activate
          </Button>
        )}
      </div>
    </div>
  );
};

export default TestCard;