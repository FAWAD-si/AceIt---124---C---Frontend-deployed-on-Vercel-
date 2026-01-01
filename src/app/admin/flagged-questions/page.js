"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AlertTriangle, User, MessageSquare, ArrowRight } from "lucide-react";

const FlaggedQuestions = () => {
  const router = useRouter();

  // --- DUMMY DATA ---
  const [flaggedQuestions] = useState([
    {
      _id: "fq_101",
      questionText: "What is the primary purpose of a 'Virtual DOM' in React?",
      reason: "Incorrect answer options reported by students.",
      flaggedBy: "Student_User_99",
      severity: "High",
    },
    {
      _id: "fq_102",
      questionText: "Explain the difference between 'let' and 'var' in JavaScript.",
      reason: "Typo in the question description.",
      flaggedBy: "Admin_Reviewer",
      severity: "Low",
    },
    {
      _id: "fq_103",
      questionText: "Which of the following is not a Hook in React?",
      reason: "Question is outdated; refers to class components.",
      flaggedBy: "User_Test_04",
      severity: "Medium",
    }
  ]);

  const handleResolveFlag = (id) => {
    toast.info(`Opening resolution for ID: ${id}`);
    router.push(`/admin/questions/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-white p-6 font-sans text-blue-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="border-b-4 border-blue-700 pb-4 mb-10">
          <h1 className="text-4xl font-black uppercase tracking-tighter">
            Flagged Content Review
          </h1>
          <p className="text-blue-600 font-medium mt-2 italic">
            Manage and resolve reported issues within the test bank.
          </p>
        </div>

        {flaggedQuestions.length === 0 ? (
          <div className="bg-blue-50 p-12 rounded-xl border-2 border-dashed border-blue-200 text-center">
            <p className="text-blue-700 text-xl font-bold uppercase tracking-widest">
              Zero Reports Found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flaggedQuestions.map((q) => (
              /* --- INLINE CARD COMPONENT --- */
              <div 
                key={q._id} 
                className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-700 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    q.severity === 'High' ? 'bg-red-100 text-red-600' : 
                    q.severity === 'Medium' ? 'bg-orange-100 text-orange-600' : 
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {q.severity} Priority
                  </div>
                  <AlertTriangle size={18} className="text-blue-700 opacity-50" />
                </div>

                <h3 className="text-lg font-bold leading-tight mb-4 group-hover:text-blue-800">
                  {q.questionText}
                </h3>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MessageSquare size={14} className="text-blue-700" />
                    <span className="italic">"{q.reason}"</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <User size={14} className="text-blue-700" />
                    <span>Reported by: <strong>{q.flaggedBy}</strong></span>
                  </div>
                </div>

                <button 
                  onClick={() => handleResolveFlag(q._id)}
                  className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-blue-800 transition-colors shadow-lg"
                >
                  Resolve Issue <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer info for demo */}
        <div className="mt-20 py-8 border-t border-gray-100 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">
            AceIT Administrative Control Panel • v1.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlaggedQuestions;