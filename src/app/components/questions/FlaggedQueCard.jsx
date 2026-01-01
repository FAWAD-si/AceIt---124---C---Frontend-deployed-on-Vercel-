import React from "react";
import Button from "../../../../../vercelFrontend/aceit/src/app/components/Button";

const FlaggedQueCard = ({ question, handleResolveFlag }) => {
  return (
    <div
      key={question._id}
      className="bg-gray-50 rounded-xl p-6 shadow-2xl border border-gray-300
                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl"
    >
      <h3 className="text-xl font-semibold text-blue-600">
        {question.questionText}
      </h3>
      
      <p className="text-gray-700 mt-1">
        <span className="font-semibold">Options:</span>{" "}
        {question.options.join(", ")}
      </p>
      <p className="text-gray-700 mt-1">
        <span className="font-semibold">Correct Answer:</span>{" "}
        {question.correctAnswer}
      </p>
      <p className="text-gray-700 mt-1">
        <span className="font-semibold">Flags Count:</span>{" "}
        {question.flagsCount}
      </p>

      <div className="flex gap-2 mt-4">
        <Button
          variant="secondary"
          size="md"
          className="flex-1"
          onClick={() => handleResolveFlag(question)}
        >
          Resolve Flag
        </Button>
      </div>
    </div>
  );
};

export default FlaggedQueCard;
