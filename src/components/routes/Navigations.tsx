import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SuspenseProgressBar from "../utilities/SuspenseProgressBar";

const Navigations = () => {
  const Dashboard = lazy(() => import("../../pages/Dashboard"));
  const SMSEnrollment = lazy(() => import("../../pages/SMS/Index"));

  return (
    <Suspense fallback={<SuspenseProgressBar />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sms-enrollment" element={<SMSEnrollment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default Navigations;
