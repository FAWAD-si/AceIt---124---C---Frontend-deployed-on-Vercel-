# 🚀 AceIT – Entry test  Preparation Platform

**AceIT** is a cutting-edge, frontend-integrated examination and preparation platform. It provides a robust environment for students to master core subjects and for administrators to build comprehensive test banks. Designed for the 2026 academic standards, it features a high-end "White & Blue" aesthetic, bento-style layouts, and a zero-latency user experience.

---

## ✨ Key Features

- **Subject Mastery**: Specialized modules for Physics, Chemistry, Biology, and English.
- **Bento-Style UI**: Modern, clean, and intuitive dashboard design.
- **Exam Simulation**: Real-world test-taking interface with timer and status tracking.
- **Admin Command Center**: Advanced tools for bulk question management and test analytics.
- **Security-First**: Dedicated 401/403 error handling and OTP verification flows.
- **Vercel Optimized**: Purpose-built for high-speed deployment with mock data persistence.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (Utility-first CSS)
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Notifications**: React Toastify

---

## 📍 Platform Routes

### 🌐 Public & Global
- `/` – High-Impact Landing Page
- `/unauthorized` – 401 Session Expired Page
- `/forbidden` – 403 Permission Denied Page

### 🔑 Authentication
- `/auth/login` – Secure Portal Access
- `/auth/register` – Student/Admin Signup
- `/auth/verify-otp` – Email Verification Interface

### 👨‍🎓 Student Experience
- `/student` – Main Prep Dashboard (Test Selection)
- `/student/attempt/[testId]` – Live Exam/Practice Interface

### 🛠️ Admin Management
- `/admin/dashboard` – Global Stats & Control Panel
- `/admin/all-tests` – Exam Bank Overview
- `/admin/create-test` – Test Initialization Tool
- `/admin/manage-questions` – Central Management Hub
- `/admin/view-questions/[testId]` – Detailed Question Review
- `/admin/add-question/[testId]` – Single Entry Tool
- `/admin/add-multiple-questions/[testId]` – Bulk CSV/JSON Simulation
- `/admin/questions/edit/[questionId]` – Content Refinement Editor
- `/admin/flagged-questions` – Quality Control & Flag Review

---

## 📚 Preparation Modules

The platform is optimized for the following academic domains:
* **Physics**: From Quantum Mechanics to Thermodynamics.
* **Chemistry**: Organic, Inorganic, and Physical Chemistry banks.
* **Biology**: Cell Structure, Genetics, and Physiology MCQs.
* **English**: Grammar, Vocabulary, and Comprehensive Literature.

---

## 🚀 Getting Started

1. **Clone the Repo**: `git clone <your-repo-link>`
2. **Install Dependencies**: `npm install`
3. **Run Locally**: `npm run dev`
4. **Deploy**: Push to GitHub and connect to Vercel for instant live hosting.
