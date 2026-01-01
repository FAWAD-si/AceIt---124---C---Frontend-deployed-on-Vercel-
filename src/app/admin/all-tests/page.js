"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Edit3, Trash2, Power, ClipboardCheck, X } from "lucide-react";

// Inline Button Component to match your UI
const Button = ({ children, onClick, variant, className }) => {
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const ViewAllTests = () => {
  const router = useRouter();

  // --- DUMMY DATA (Chemistry, Physics, Biology, English only) ---
  const [tests, setTests] = useState([
    {
      _id: "t1",
      title: "Organic Chemistry Midterm",
      subject: "Chemistry",
      duration: 60,
      totalMarks: 100,
      isActive: true,
    },
    {
      _id: "t2",
      title: "Quantum Physics Advanced Quiz",
      subject: "Physics",
      duration: 45,
      totalMarks: 50,
      isActive: false,
    },
    {
      _id: "t3",
      title: "Cell Biology Fundamentals",
      subject: "Biology",
      duration: 90,
      totalMarks: 120,
      isActive: true,
    },
    {
      _id: "t4",
      title: "English Vocabulary & Grammar",
      subject: "English",
      duration: 30,
      totalMarks: 40,
      isActive: true,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  // --- MOCK HANDLERS ---
  const handleDeleteClick = (test) => {
    setSelectedTest(test);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setTests(tests.filter((t) => t._id !== selectedTest._id));
    toast.success("Test deleted successfully (Demo Mode)");
    setIsModalOpen(false);
    setSelectedTest(null);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setSelectedTest(null);
  };

  const handleActivateToggle = (testId) => {
    setTests(tests.map(t => 
      t._id === testId ? { ...t, isActive: !t.isActive } : t
    ));
    toast.info("Test status updated successfully");
  };

  const handleEditTest = () => {
    router.push(`/admin/edit-tests`);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-blue-700 mb-6">All Tests</h1>

        {tests.length === 0 ? (
          <p className="text-gray-700 text-lg">No tests available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test) => (
              /* --- INLINE TEST CARD UI --- */
              <div 
                key={test._id} 
                className="bg-white border border-gray-300 rounded-lg p-6 shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Active Status Indicator */}
                <div className={`absolute top-0 right-0 w-2 h-full ${test.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-700 p-2 rounded-lg shadow-md">
                    <ClipboardCheck className="text-white" size={20} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${test.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {test.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-blue-700 mb-1">{test.title}</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{test.subject}</p>

                <div className="flex justify-between text-sm font-semibold text-gray-500 border-t pt-4 mb-6">
                  <span>{test.duration} Mins</span>
                  <span>{test.totalMarks} Marks</span>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={handleEditTest}
                    className="flex flex-col items-center justify-center p-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition-all border border-blue-100"
                  >
                    <Edit3 size={16} />
                    <span className="text-[10px] mt-1 font-bold">Edit</span>
                  </button>
                  <button 
                    onClick={() => handleActivateToggle(test._id)}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all border ${test.isActive ? 'bg-orange-50 text-orange-600 border-orange-100 hover:bg-orange-600 hover:text-white' : 'bg-green-50 text-green-600 border-green-100 hover:bg-green-600 hover:text-white'}`}
                  >
                    <Power size={16} />
                    <span className="text-[10px] mt-1 font-bold">{test.isActive ? 'Disable' : 'Enable'}</span>
                  </button>
                  <button 
                    onClick={() => handleDeleteClick(test)}
                    className="flex flex-col items-center justify-center p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all border border-red-100"
                  >
                    <Trash2 size={16} />
                    <span className="text-[10px] mt-1 font-bold">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- CUSTOM MODAL SECTION --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="bg-blue-700 p-4 flex justify-between items-center">
                <h2 className="text-white font-bold uppercase tracking-widest text-sm">Confirm Deletion</h2>
                <button onClick={handleCancelDelete}><X className="text-white" size={18} /></button>
              </div>
              <div className="p-8">
                <p className="text-gray-700">
                   Are you sure you want to delete the test <span className="font-bold text-blue-700 italic">"{selectedTest?.title}"</span>?
                </p>
              </div>
              <div className="p-4 bg-gray-50 flex gap-3 justify-end border-t">
                <Button variant="secondary" onClick={handleCancelDelete}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={handleConfirmDelete}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllTests;