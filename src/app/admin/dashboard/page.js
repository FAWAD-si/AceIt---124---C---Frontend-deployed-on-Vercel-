"use client";

import React from "react";
import { PlusCircle, ClipboardList, Edit3, Flag } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";

/* -------------------- */
/* Dummy Tests Data     */
/* -------------------- */
const tests = [
  { id: 1, title: "Physics", status: "active" },
  { id: 2, title: "Chemistry", status: "active" },
  { id: 3, title: "Biology", status: "active" },
  { id: 4, title: "English", status: "inactive" },
];

const AdminDashboard = () => {
  const router = useRouter();

  const totalTests = tests.length;
  const totalActiveTests = tests.filter(t => t.status === "active").length;
  const totalInactiveTests = tests.filter(t => t.status === "inactive").length;

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-blue-700">
            AceIT - Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Manage tests, monitor progress, and control availability
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-xl p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-blue-600">Total Tests</h3>
            <p className="text-4xl font-bold text-gray-800 mt-3">
              {totalTests}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-blue-600">Active Tests</h3>
            <p className="text-4xl font-bold text-gray-700 mt-3">
              {totalActiveTests}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-blue-600">Inactive Tests</h3>
            <p className="text-4xl font-bold text-gray-700 mt-3">
              {totalInactiveTests}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-50 rounded-2xl shadow-2xl p-6 mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-5">
            Quick Actions
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<PlusCircle />}
              className="flex-1"
              onClick={() => router.push("/admin/create-test")}
            >
              Create New Test
            </Button>

            <Button
              variant="secondary"
              size="lg"
              leftIcon={<ClipboardList />}
              className="flex-1"
              onClick={() => router.push("/admin/all-tests")}
            >
              View All Tests
            </Button>
          </div>
        </div>

        {/* Questions Section */}
        <div className="bg-gray-50 rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-5">
            Questions
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<Edit3 />}
              className="flex-1"
              onClick={() => router.push("/admin/manage-questions")}
            >
              Manage Questions
            </Button>

            <Button
              variant="danger"
              size="lg"
              leftIcon={<Flag />}
              className="flex-1"
              onClick={() => router.push("/admin/flagged-questions")}
            >
              Flagged Questions
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;