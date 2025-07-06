"use client"
import { useState, useEffect } from "react"
import type React from "react"

import LoadingScreen from "@/components/Home/LoadingScreenProps"
import { motion, AnimatePresence } from "framer-motion"

interface ClientLayoutProps {
  children: React.ReactNode
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [showLoading, setShowLoading] = useState(true)
  const [isFirstVisit, setIsFirstVisit] = useState(true)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedRealEstate")
    if (hasVisited) {
      setIsFirstVisit(false)
      setShowLoading(false)
    }
  }, [])

  const handleLoadingComplete = () => {
    // Mark as visited
    localStorage.setItem("hasVisitedRealEstate", "true")
    setShowLoading(false)
  }

  const pageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoading && isFirstVisit && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!showLoading && (
          <motion.div variants={pageVariants} initial="hidden" animate="visible" className="min-h-screen">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ClientLayout
