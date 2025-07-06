"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Camera, ArrowUp, ArrowDown } from 'lucide-react';

interface ImageData {
  src: string;
  alt: string;
  title: string;
  description: string;
  location: string;
}

const images: ImageData[] = [
  {
    src: "images/hero/banner2.jpg",
    alt: "Mountain landscape",
    title: "Majestic Peaks",
    description: "Snow-capped mountains reaching toward the endless sky, where earth meets heaven in perfect harmony.",
    location: "Swiss Alps"
  },
  {
    src: "images/hero/banner3.jpg",
    alt: "Ocean waves",
    title: "Ocean's Power",
    description: "Powerful waves crashing against ancient rocks, showcasing nature's raw and untamed beauty.",
    location: "Pacific Coast"
  },
  {
    src: "images/hero/banner4.jpg",
    alt: "Forest path",
    title: "Enchanted Forest",
    description: "Sunlight filtering through ancient trees, creating a magical pathway through nature's cathedral.",
    location: "Redwood National Park"
  },
  {
    src: "images/hero/banner5.jpg",
    alt: "Desert dunes",
    title: "Desert Dreams",
    description: "Golden sand dunes sculpted by wind and time, creating an otherworldly landscape of curves and shadows.",
    location: "Sahara Desert"
  },
  {
    src: "images/hero/banner6.jpg",
    alt: "City lights",
    title: "Urban Symphony",
    description: "City lights painting the night sky, where millions of stories unfold beneath the glowing skyline.",
    location: "New York City"
  },
  {
    src: "images/hero/banner7.jpg",
    alt: "Waterfall",
    title: "Cascading Beauty",
    description: "Water cascading through lush vegetation, creating a symphony of sound and motion in nature's theater.",
    location: "Iceland"
  }
];

const ImageSlide: React.FC<{ image: ImageData; isActive: boolean }> = ({ image, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 1.1
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full rounded-4xl"
    >
      <div className="relative w-full h-full overflow-hidden rounded-4xl">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        
        {/* Content Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 50
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ 
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -30
              }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <Camera className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                {image.location}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 30
              }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
            >
              {image.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 30
              }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
            >
              {image.description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ScrollIndicator: React.FC<{ currentIndex: number; totalImages: number }> = ({ 
  currentIndex, 
  totalImages 
}) => {
  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black/30 backdrop-blur-md rounded-full p-4 border border-white/20"
        >
          <div className="flex flex-col gap-2">
            {Array.from({ length: totalImages }).map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60"
        >
          {currentIndex < totalImages - 1 ? (
            <ArrowDown className="w-5 h-5" />
          ) : (
            <ArrowUp className="w-5 h-5" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

const SingleImageScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which image should be shown based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const imageIndex = Math.floor(progress * images.length);
      const clampedIndex = Math.min(Math.max(imageIndex, 0), images.length - 1);
      setCurrentImageIndex(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[400vh] bg-gray-100 px-16"
    >
      {/* Sticky Container for Images */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Images Container */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <ImageSlide
              key={index}
              image={image}
              isActive={index === currentImageIndex}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator 
          currentIndex={currentImageIndex} 
          totalImages={images.length} 
        />

        {/* Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-40 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Image Counter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-8 left-8 z-40 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
        >
          <span className="text-white font-medium">
            {String(currentImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Scroll Hint - Only show on first image */}
        <AnimatePresence>
          {currentImageIndex === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-white/80"
              >
                <span className="text-sm font-medium uppercase tracking-wider">
                  Scroll to explore
                </span>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SingleImageScroll;