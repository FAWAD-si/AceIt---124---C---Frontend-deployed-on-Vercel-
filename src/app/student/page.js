"use client";

import React, { useState } from "react";
import { BookOpen, Timer, Award, PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// --- DUMMY DATA: Chemistry, Physics, Biology, English only ---
const availableTests = [
  { id: 1, title: "Physics Midterm", subject: "Physics", duration: 60, totalQuestions: 30, difficulty: "Medium" },
  { id: 2, title: "Organic Chemistry Quiz", subject: "Chemistry", duration: 45, totalQuestions: 20, difficulty: "Hard" },
  { id: 3, title: "Biology Final Prep", subject: "Biology", duration: 90, totalQuestions: 50, difficulty: "Medium" },
  { id: 4, title: "English Grammar Mastery", subject: "English", duration: 30, totalQuestions: 25, difficulty: "Easy" },
];

const StudentPortal = () => {
  const router = useRouter();

  const handleAttempt = (testTitle) => {
    toast.info(`Initializing ${testTitle}... Prepare for the exam!`);
    // Redirect to a mock test taking page
    // router.push(`/student/attempt/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-blue-700">
            Welcome, Student!
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Select a subject to start your examination.
          </p>
        </div>

        {/* Overview Stats for Student */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-xl p-6 shadow-2xl">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Available Tests</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">{availableTests.length}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-2xl">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Completed</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">0</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-2xl">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Average Score</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">N/A</p>
          </div>
        </div>

        {/* Test Selection Grid */}
        <h2 className="text-2xl font-bold text-blue-700 mb-6 uppercase tracking-tight">Active Exam Sessions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {availableTests.map((test) => (
            <div 
              key={test.id} 
              className="bg-gray-50 rounded-2xl p-8 shadow-2xl flex flex-col md:flex-row justify-between items-center group transition-all hover:bg-white"
            >
              <div className="flex items-center gap-6">
                <div className="bg-blue-700 p-4 rounded-2xl shadow-lg">
                  <BookOpen className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {test.title}
                  </h3>
                  <div className="flex gap-4 mt-2 text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Timer size={16} className="text-blue-600" /> {test.duration} mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={16} className="text-blue-600" /> {test.totalQuestions} Questions
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-0 w-full md:w-auto">
                <button 
                  onClick={() => handleAttempt(test.title)}
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-800 shadow-xl transition-all"
                >
                  Attempt <PlayCircle size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Student Policy Note */}
        <div className="mt-16 p-6 bg-white/50 rounded-xl text-center">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.3em]">
            Strict Monitoring Enabled • Do not refresh page during active tests
          </p>
        </div>

      </div>
    </div>
  );
};

export default StudentPortal;