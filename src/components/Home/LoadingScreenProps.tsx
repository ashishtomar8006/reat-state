"use client"
import { useState, useEffect } from "react"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Home, Building, MapPin, Star, Sparkles } from "lucide-react"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showEnterButton, setShowEnterButton] = useState(false)
  const [currentText, setCurrentText] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Ensure component only renders on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const loadingTexts = [
    "Discovering luxury properties...",
    "Curating premium locations...",
    "Preparing your dream home experience...",
    "Welcome to Real eState",
  ]

  const backgroundImages = [
    "/images/hero/banner1.jpg",
    "/images/hero/banner2.jpg",
    "/images/hero/banner3.jpg",
    "/images/hero/banner4.jpg",
    "/images/hero/banner5.jpg",
  ]

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: 10, top: 20 },
    { left: 25, top: 15 },
    { left: 40, top: 30 },
    { left: 55, top: 10 },
    { left: 70, top: 25 },
    { left: 85, top: 35 },
    { left: 15, top: 50 },
    { left: 30, top: 60 },
    { left: 45, top: 45 },
    { left: 60, top: 65 },
    { left: 75, top: 55 },
    { left: 90, top: 70 },
    { left: 20, top: 80 },
    { left: 35, top: 85 },
    { left: 50, top: 75 },
    { left: 65, top: 90 },
    { left: 80, top: 85 },
    { left: 95, top: 95 },
    { left: 5, top: 40 },
    { left: 12, top: 75 },
  ]

  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setShowEnterButton(true), 800)
          return 100
        }
        return prev + 1.5
      })
    }, 60)

    return () => clearInterval(interval)
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length)
    }, 2000)

    return () => clearInterval(textInterval)
  }, [isClient, loadingTexts.length])

  useEffect(() => {
    if (!isClient) return

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 3000)

    return () => clearInterval(imageInterval)
  }, [isClient, backgroundImages.length])

  // Don't render anything on server
  if (!isClient) {
    return null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  }

  const logoVariants = {
    hidden: {
      scale: 0,
      rotate: -360,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  const buttonVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 100,
      rotateX: 90,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.08,
      y: -5,
      boxShadow: "0 25px 50px rgba(7, 190, 138, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      y: 0,
    },
  }

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 1, 0.3],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const floatingElements = [
    { Icon: Home, delay: 0.5, x: -120, y: -80, size: 32 },
    { Icon: Building, delay: 0.8, x: 150, y: -100, size: 28 },
    { Icon: MapPin, delay: 1.1, x: -100, y: 80, size: 24 },
    { Icon: Star, delay: 1.4, x: 120, y: 100, size: 20 },
    { Icon: Sparkles, delay: 1.7, x: -150, y: 0, size: 26 },
  ]

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Background Images with Parallax Effect */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.1,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                unoptimized
              />
            </motion.div>
          ))}

          {/* Animated Overlay */}
          <motion.div
            // animate={{
            //   background: [
            //     "linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(7,190,138,0.3) 50%, rgba(0,0,0,0.7) 100%)",
            //     "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(147,51,234,0.4) 50%, rgba(0,0,0,0.8) 100%)",
            //     "linear-gradient(225deg, rgba(0,0,0,0.7) 0%, rgba(59,130,246,0.3) 50%, rgba(0,0,0,0.7) 100%)",
            //     "linear-gradient(315deg, rgba(0,0,0,0.8) 0%, rgba(7,190,138,0.3) 50%, rgba(0,0,0,0.8) 100%)",
            //   ],
            // }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute inset-0"
          />
        </div>

        {/* Animated Particles with Fixed Positions */}
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((position, i) => (
            <motion.div
              key={i}
              variants={particleVariants}
              animate="animate"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                animationDelay: `${(i * 0.15) % 3}s`,
              }}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            />
          ))}
        </div>

        {/* Floating Property Icons */}
        {floatingElements.map(({ Icon, delay, x, y, size }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360],
              x: [0, x * 0.5, x, x * 0.5, 0],
              y: [0, y * 0.5, y, y * 0.5, 0],
            }}
            transition={{
              opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              x: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              y: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              delay,
            }}
            className="absolute text-white/40"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Icon size={size} />
          </motion.div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          {/* Logo with Advanced Animation */}
          <motion.div variants={logoVariants} initial="hidden" animate="visible" className="mb-16">
            <div className="relative">
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-primary/40 border-dashed"
                style={{ width: "160px", height: "160px", margin: "0 auto" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-purple-400/30"
                style={{ width: "180px", height: "180px", margin: "0 auto", top: "-10px" }}
              />

              {/* Pulsing Glow Effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(7, 190, 138, 0.3)",
                    "0 0 40px rgba(7, 190, 138, 0.6)",
                    "0 0 20px rgba(7, 190, 138, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="relative bg-gradient-to-br from-primary via-purple-600 to-blue-600 p-10 rounded-full mx-auto w-32 h-32 flex items-center justify-center shadow-2xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Home size={48} className="text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Brand Name with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-8"
          >
            <motion.h1
              animate={{
                textShadow: [
                  "0 0 10px rgba(7, 190, 138, 0.5)",
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                  "0 0 10px rgba(7, 190, 138, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent"
            >
              Real eState
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-4 rounded-full"
            />
          </motion.div>

          {/* Animated Loading Text with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mb-16 h-12 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentText}
                initial={{ opacity: 0, y: 30, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: -90 }}
                transition={{ duration: 0.6 }}
                className="text-2xl text-white font-light tracking-wide"
              >
                {loadingTexts[currentText]}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="ml-1 text-primary"
                >
                  |
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Progress Bar */}
          {!showEnterButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="mb-12"
            >
              <div className="w-full max-w-lg mx-auto">
                <div className="flex justify-between text-sm text-gray-300 mb-4">
                  <span className="font-medium">Loading Experience</span>
                  <motion.span
                    key={loadingProgress}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="font-bold text-primary"
                  >
                    {Math.round(loadingProgress)}%
                  </motion.span>
                </div>
                <div className="relative h-3 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: [-100, 300] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Enhanced Enter Button */}
          <AnimatePresence>
            {showEnterButton && (
              <motion.div className="space-y-6">
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={onComplete}
                  className="group relative px-16 py-5 border-white  text-white font-bold rounded-full text-xl shadow-2xl border overflow-hidden backdrop-blur-sm"
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-primary opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />

                  {/* Button Content */}
                  <span className="relative flex items-center gap-4">
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      Enter Website
                    </motion.span>
                    <motion.div
                      animate={{
                        x: [0, 8, 0],
                        rotate: [0, 15, 0],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ChevronRight size={24} />
                    </motion.div>
                  </span>

                  {/* Multiple Shine Effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: [-200, 400] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  />
                </motion.button>

                {/* Subtitle with Animation */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-white/80 text-lg font-light tracking-wide"
                >
                  Discover luxury properties and premium locations
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-8 text-white/60 text-sm font-light"
        >
          © 2025 Real eState - Premium Properties
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 3.5 }}
          className="absolute bottom-8 right-8 text-white/40 text-xs"
        >
          Crafted with Excellence
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
