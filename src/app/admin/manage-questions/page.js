"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, FileText, Eye, BookOpen } from "lucide-react";

const ManageQuestions = () => {
  const router = useRouter();

  // --- DUMMY DATA: Chemistry, Physics, Biology, English only ---
  const [tests] = useState([
    { _id: "t1", title: "Organic Chemistry Midterm", subject: "Chemistry" },
    { _id: "t2", title: "Quantum Physics Advanced Quiz", subject: "Physics" },
    { _id: "t3", title: "Cell Biology Fundamentals", subject: "Biology" },
    { _id: "t4", title: "English Vocabulary & Grammar", subject: "English" },
  ]);

  // Navigate to single question page with testId param
  const handleAddSingle = (id) => {
    router.push(`/admin/add-question/${id}`);
  };

  // Navigate to multiple questions page with testId param
  const handleAddMultiple = (id) => {
    router.push(`/admin/add-multiple-questions/${id}`);
  };

  const handleViewQuestions = (id) => {
    router.push(`/admin/view-questions/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-blue-700 uppercase tracking-tighter">
            Manage Questions
          </h1>
          <p className="text-gray-600 mt-2 text-lg font-medium">
            Select a test bank to add or review questions.
          </p>
        </div>

        {tests.length === 0 ? (
          <div className="bg-gray-50 rounded-2xl p-10 shadow-2xl text-center">
             <p className="text-gray-700 text-lg">No tests available to manage.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tests.map((test) => (
              /* --- INLINE CARD UI (Replacing AddQueCard) --- */
              <div 
                key={test._id} 
                className="bg-gray-50 rounded-2xl p-6 shadow-2xl transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-700 p-3 rounded-xl shadow-lg">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-blue-700 leading-tight">
                      {test.title}
                    </h2>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                      {test.subject}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Action Buttons */}
                  <button 
                    onClick={() => handleAddSingle(test._id)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold text-sm hover:bg-blue-700 hover:text-white transition-all group"
                  >
                    Add Single Question 
                    <PlusCircle size={18} className="group-hover:rotate-90 transition-transform" />
                  </button>

                  <button 
                    onClick={() => handleAddMultiple(test._id)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold text-sm hover:bg-blue-700 hover:text-white transition-all"
                  >
                    Add Bulk Questions 
                    <FileText size={18} />
                  </button>

                  <button 
                    onClick={() => handleViewQuestions(test._id)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-blue-700 text-white rounded-xl font-bold text-sm hover:bg-blue-800 transition-all shadow-lg mt-4"
                  >
                    View Question Bank 
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer info for demo */}
        <div className="mt-20 py-8 text-center border-t border-gray-300">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.5em]">
            AceIT Question Management Module • Static Demo Mode
          </p>
        </div>

      </div>
    </div>
  );
};

export default ManageQuestions;