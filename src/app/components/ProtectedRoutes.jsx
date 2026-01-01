"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./Loader"; // Reuse your loader

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // 1. Check if we are in the browser
    if (typeof window === "undefined") return;

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userRole = localStorage.getItem("userRole");

    // 2. Not Authenticated? -> Login
    if (isAuthenticated !== "true") {
      router.push("/auth/login"); // Adjust path if your login is elsewhere
      return;
    }

    // 3. Wrong Role? -> Forbidden
    if (allowedRoles && !allowedRoles.includes(userRole)) {
      router.push("/forbidden");
      return;
    }

    // 4. Success
    setAuthorized(true);
  }, [router, allowedRoles]);

  if (!authorized) {
    return <Loader />; // Show loader while checking logic
  }

  return <>{children}</>;
};

export default ProtectedRoutes;