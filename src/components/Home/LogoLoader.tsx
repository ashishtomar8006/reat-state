"use client"

import type React from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((event.clientX - centerX) * 0.1)
    mouseY.set((event.clientY - centerY) * 0.1)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 60, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] as const},
    },
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden relative"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
      {/* Background Layers with Motion */}
      <motion.div
        className="absolute inset-0"
        style={{
            background: "radial-gradient(circle at 50% 50%, #0f172a, #020617)",
            x: mouseX,
            y: mouseY,
          }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Floating Orbit Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              rotate: `${i * 45}deg`,
              transformOrigin: '0 60px',
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10 + i, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Container */}
      <motion.div
        className="relative z-10 text-center"
        variants={containerVariants}
      >
        {/* Logo with animated glow */}
        <motion.div className="relative mx-auto" style={{ x, y }}>
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            style={{ width: 300, height: 300 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative"
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/logo/pinnacleLogo.png"
              alt="The Pinnacle - Epitome of Prestige"
              width={300}
              height={100}
              className="max-w-full h-auto"
              priority
            />
            {/* Shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, -5% 100%)" }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Animated Gradient Heading */}
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 mt-12"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          EPITOME OF PRESTIGE
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-white/60 text-sm font-light mt-4 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          EXCELLENCE • INNOVATION • DISTINCTION
        </motion.p>

        {/* Animated Loader Bars */}
        <motion.div
          className="flex justify-center items-center gap-1 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-8 bg-white/30 rounded"
              animate={{ scaleY: [1, 1.8, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Fallback loader while animating */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-slate-950 flex items-center justify-center z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-1 h-20 bg-white/50"
              animate={{ scaleY: [0, 1, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
