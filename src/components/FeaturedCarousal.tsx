"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react";
import { getFeaturedProjects } from "@/data/project-data";
import { useRouter } from "next/navigation";

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const router = useRouter();
  
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    if (!isAutoPlaying || featuredProjects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setIsAutoPlaying(false);
  };

  const handlePrimaryAction = () => {
    const currentProject = featuredProjects[currentIndex];
    if (currentProject.primaryButton.url.startsWith('http')) {
      window.open(currentProject.primaryButton.url, '_blank');
    } else {
      router.push(currentProject.primaryButton.url);
    }
  };

  const handleSecondaryAction = () => {
    const currentProject = featuredProjects[currentIndex];
    router.push(currentProject.secondaryButton.url);
  };

  if (featuredProjects.length === 0) {
    return null;
  }

  const currentProject = featuredProjects[currentIndex];

  return (
    <section className="pt-20 px-4 sm:px-6 bg-background hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-bold font-dancing text-3xl sm:text-4xl md:text-5xl gradient-text mb-4">
            Featured Projects
          </h2>
    
        </motion.div>
        
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative aspect-[4/3] sm:aspect-[14/6] md:aspect-[18/7] rounded-xl sm:rounded-2xl overflow-hidden bg-card shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay - Responsive */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent sm:bg-gradient-to-r sm:from-background sm:via-background/80 sm:to-transparent" />

                {/* Content - Mobile First Approach */}
                <div className="absolute inset-0 flex items-end sm:items-center pb-6 sm:pb-0">
                  <div className="w-full px-4 sm:px-8 md:px-16">
                    <motion.div
                      className="flex items-center gap-3 mb-3 sm:mb-4 flex-wrap"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-primary text-md sm:text-sm font-medium bg-primary/10 px-2 py-1 rounded">
                        {currentProject.year}
                      </span>
                      <span className="gradient-text text-md font-medium sm:text-sm">
                        {currentProject.role}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentProject.title}
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 max-w-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {currentProject.description}
                    </motion.p>

                    {/* Dynamic Buttons - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.button
                        onClick={handlePrimaryAction}
                        className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm sm:text-base w-full sm:w-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 4px 12px rgba(45, 212, 191, 0.3)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {currentProject.primaryButton.label === "Live Demo" && <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />}
                        {currentProject.primaryButton.label}
                      </motion.button>
                      
                      <motion.button
                        onClick={handleSecondaryAction}
                        className="flex items-center justify-center bg-card hover:bg-muted gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-ring/50 hover:border-ring text-foreground  hover:text-primary transition-colors font-medium text-sm sm:text-base w-full sm:w-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {currentProject.secondaryButton.label === "Case Study" && <FileText className="w-3 h-3 sm:w-4 sm:h-4" />}
                        {currentProject.secondaryButton.label}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Smaller on mobile */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {featuredProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-primary rounded-full"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-border rounded-full hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}