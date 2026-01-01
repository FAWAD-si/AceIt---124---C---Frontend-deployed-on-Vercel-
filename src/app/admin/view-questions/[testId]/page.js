"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Trash2, Edit, CheckCircle2, Info } from "lucide-react";
import { toast } from "react-toastify";

// Internal Modal Replacement for zero dependencies
const SimpleModal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="bg-blue-700 p-4">
          <h2 className="text-white font-bold uppercase tracking-tight">{title}</h2>
        </div>
        <div className="p-6">{children}</div>
        <div className="p-4 bg-gray-50 flex justify-end gap-3 border-t">
          {footer}
        </div>
      </div>
    </div>
  );
};

const ViewAllQuestions = () => {
  const params = useParams();
  const testId = params.testId;
  const router = useRouter();

  // --- CELL STRUCTURE & FUNCTIONS MCQS ---
  const [questions, setQuestions] = useState([
    {
      _id: "q1",
      questionText: "Which organelle is known as the 'Powerhouse of the Cell'?",
      options: [
        "Nucleus",
        "Mitochondria",
        "Golgi Apparatus",
        "Ribosome"
      ],
      correctAnswer: "Mitochondria"
    },
    {
      _id: "q2",
      questionText: "What is the primary function of the Cell Membrane?",
      options: [
        "Protein synthesis",
        "Genetic storage",
        "Regulating what enters and leaves the cell",
        "Providing rigid structure to plant cells"
      ],
      correctAnswer: "Regulating what enters and leaves the cell"
    },
    {
      _id: "q3",
      questionText: "Which organelle is responsible for photosynthesis in plant cells?",
      options: [
        "Vacuole",
        "Chloroplast",
        "Lysosome",
        "Endoplasmic Reticulum"
      ],
      correctAnswer: "Chloroplast"
    },
    {
      _id: "q4",
      questionText: "Where is the genetic material (DNA) primarily located in a eukaryotic cell?",
      options: [
        "Cytoplasm",
        "Nucleus",
        "Cell Wall",
        "Centriole"
      ],
      correctAnswer: "Nucleus"
    },
    {
      _id: "q5",
      questionText: "Which of the following organelles is responsible for synthesizing proteins?",
      options: [
        "Ribosomes",
        "Smooth ER",
        "Lysosomes",
        "Mitochondria"
      ],
      correctAnswer: "Ribosomes"
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);

  const openDeleteModal = (question) => {
    setQuestionToDelete(question);
    setModalOpen(true);
  };

  const handleDelete = () => {
    if (!questionToDelete) return;
    setQuestions(questions.filter((q) => q._id !== questionToDelete._id));
    toast.success("Question deleted (Demo Mode)");
    setModalOpen(false);
    setQuestionToDelete(null);
  };

  const handleEdit = (id) => {
    router.push(`/admin/questions/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-white p-6 font-sans text-blue-700">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="border-b-4 border-blue-700 pb-4 mb-10 flex flex-wrap justify-between items-end gap-4">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Question Bank</h1>
            <p className="text-blue-600 font-medium mt-1 uppercase text-xs tracking-[0.2em]">
              Topic: Cell Structure and Functions
            </p>
          </div>
          <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 flex items-center gap-2">
            <Info size={16} />
            <span className="text-sm font-bold uppercase">Total: {questions.length} Questions</span>
          </div>
        </div>

        {questions.length === 0 ? (
          <div className="bg-gray-50 p-20 rounded-3xl border-2 border-dashed border-gray-200 text-center">
            <p className="text-gray-400 text-xl font-bold uppercase tracking-widest">
              No questions found for this test
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {questions.map((q, idx) => (
              <div 
                key={q._id} 
                className="bg-white border-2 border-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold shrink-0 shadow-lg">
                        {idx + 1}
                      </span>
                      <h3 className="text-lg font-bold leading-tight mt-1">{q.questionText}</h3>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(q._id)} className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit size={18} />
                      </button>
                      <button onClick={() => openDeleteModal(q)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-12 mt-4">
                    {q.options.map((opt, i) => (
                      <div 
                        key={i} 
                        className={`p-3 rounded-xl border text-sm font-medium flex items-center gap-2 ${
                          opt === q.correctAnswer 
                            ? "bg-green-50 border-green-200 text-green-700 shadow-sm" 
                            : "bg-gray-50 border-gray-100 text-gray-500"
                        }`}
                      >
                        {opt === q.correctAnswer && <CheckCircle2 size={14} className="shrink-0" />}
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-20 py-10 border-t border-gray-100 text-center">
          <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.5em]">
            AceIT Biology • Cell Biology Module
          </p>
        </div>
      </div>

      <SimpleModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm Removal"
        footer={
          <>
            <button className="px-6 py-2 rounded-xl font-bold text-gray-400 hover:text-gray-600 uppercase text-xs" onClick={() => setModalOpen(false)}>
              Go Back
            </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition shadow-lg uppercase text-xs" onClick={handleDelete}>
              Delete Question
            </button>
          </>
        }
      >
        <p className="text-gray-600 mb-4">Are you sure you want to delete this question?</p>
        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
           <p className="text-red-700 font-bold text-sm italic">"{questionToDelete?.questionText}"</p>
        </div>
      </SimpleModal>
    </div>
  );
};

export default ViewAllQuestions;