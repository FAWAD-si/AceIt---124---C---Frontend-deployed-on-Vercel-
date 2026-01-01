import React from "react";
import Button from "../../../../../vercelFrontend/aceit/src/app/components/Button"; // Adjust path if needed

const QuestionViewCard = ({ question, index, onDelete, onEdit }) => {
  return (
    <div className="p-4 bg-white rounded-xl border border-gray-300 shadow relative">
      <h2 className="font-semibold text-lg text-blue-600 mb-2">
        Question {index + 1}
      </h2>
      <p className="text-gray-800 mb-2">{question.questionText}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
        {question.options.map((opt, i) => (
          <div
            key={i}
            className={`p-2 rounded border bg-gray-100 ${
              opt === question.correctAnswer
                ? "border-green-500 bg-green-100 font-semibold"
                : "border-gray-300"
            }`}
          >
            {opt}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-2">
        <Button onClick={() => onDelete(question)} variant="danger" size="md">
          Delete
        </Button>
        <Button onClick={() => onEdit(question)} variant="primary" size="md">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default QuestionViewCard;
