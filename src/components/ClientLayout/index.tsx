"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Corrected import
import type React from "react";
import LoadingScreen from "@/components/Home/LoadingScreenProps";
import { motion, AnimatePresence } from "framer-motion";


const ClientLayout: React.FC = () => {
  const router = useRouter();

  const handleLoadingComplete = () => {
    router.push("/home");
  };

  return (
    <>
      <LoadingScreen onComplete={handleLoadingComplete} />
    </>
  );
};

export default ClientLayout;
