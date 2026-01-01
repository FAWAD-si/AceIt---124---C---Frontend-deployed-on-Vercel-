import React from 'react';
import Button from "../../../../../vercelFrontend/aceit/src/app/components/Button";

const AddQueCard = ({ test, handleAddSingle, handleAddMultiple , handleViewQuestions }) => {
  return (
    <div
      key={test._id}
      className="bg-gray-50 rounded-xl p-6 shadow-2xl border border-gray-300
                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl"
    >
      <h3 className="text-xl font-semibold text-blue-600">{test.title}</h3>
      <p className="text-gray-700 mt-1">
        <span className="font-semibold">Subject:</span> {test.subject.charAt(0).toUpperCase() + test.subject.slice(1)}
      </p>
      <p className="text-gray-700 mt-1">
        <span className="font-semibold">Total Marks:</span> {test.totalMarks}
      </p>
      <p className="text-gray-700 mt-1">
        <span className="font-semibold">Duration:</span> {test.duration} mins
      </p>
      <p className={`mt-1 font-semibold ${test.isActive ? "text-green-600" : "text-red-600"}`}>
        {test.isActive ? "Active" : "Inactive"}
      </p>

      <div className="flex gap-2 mt-4">
        <Button
          variant="primary"
          size="md"
          className="flex-1"
          onClick={() => handleAddSingle(test)}
        >
          Add Single Question
        </Button>

        <Button
          variant="secondary"
          size="md"
          className="flex-1"
          onClick={() => handleAddMultiple(test)}
        >
          Add Multiple Questions
        </Button>

        <Button
          variant="secondary"
          size="md"
          
          className="flex-1  "
          onClick={() => handleViewQuestions(test)}
        >
          View Questions
        </Button>
      </div>
    </div>
  );
};

export default AddQueCard;
