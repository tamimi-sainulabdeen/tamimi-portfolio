// app/projects/sreenarayanaguru-open-university/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Users, Layout, Smartphone, CheckCircle, Code, Palette, Component, Zap, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SGOUCaseStudy() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const features = [
    {
      title: "Responsive Design System",
      description: "Built a consistent and scalable design system to ensure the interface looks and functions smoothly across all screen sizes.",
      image: "/images/sgou_1.webp",
      points: [
        "Mobile-first, flexible grid system",
        "Consistent spacing, color usage, and typography",
        "Adaptive components for different layouts",
        "Touch-friendly controls for mobile users"
      ],
      width: 1920,
      height: 1080
    },
    {
      title: "Intuitive Dashboard",
      description: "Redesigned the dashboard layout to improve clarity, usability, and visual hierarchy with quick access to academic resources.",
      image: "/images/sgou_2.webp",
      points: [
        "Clean and structured information architecture",
        "Clear status indicators for semesters and registrations",
        "Quick-access action cards for common tasks",
        "Personalized welcome section with academic details"
      ],
      width: 1920,
      height: 1080
    },
    {
      title: "Student Services & Application Tracking",
      description: "Designed a comprehensive services section with quick access to student requests and clear application status tracking.",
      image: "/images/sgou_3.webp",
      points: [
        "Quick-access grid for common student services",
        "Clear application status with step-by-step progress",
        "Downloadable documents and admission notices",
        "Streamlined grievance and request submission"
      ],
      width: 1920,
      height: 1080
    },
    {
      title: "Academic Calendar Modal",
      description: "Designed a simplified and easy-to-scan calendar section displaying important university updates, deadlines, and alerts.",
      image: "/images/sgou_4.webp",
      points: [
        "Color-coded event indicators",
        "Clear date hierarchy and layout",
        "Highlighted urgent updates/alerts",
        "Easy navigation for upcoming deadlines"
      ],
      width: 1920,
      height: 1080
    }
  ];

  const allImages = features.map(feature => feature.image);

  const techStack = [
    { name: "Bootstrap 5", purpose: "Responsive Layout & Components" },
    { name: "Material Design for Bootstrap (MDB)", purpose: "UI Components & Design System" },
    { name: "JavaScript", purpose: "Interactivity & Frontend Logic" },
    { name: "CSS3", purpose: "Custom Styling & Animations" },
    { name: "HTML5", purpose: "Semantic Structure" }
  ];

  const builtFeatures = [
    "Student Dashboard Layout",
    "Academic Progress Visualization", 
    "Responsive Navigation System",
    "Notification & Alert System",
    "Calendar & Deadline Tracking",
    "Service Request Interface",
    "Mobile-First Components",
    "Accessibility-Focused Design"
  ];

  const openModal = (image: string) => {
    const index = allImages.indexOf(image);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % allImages.length;
    } else {
      newIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-2 sm:mb-4 px-2 sm:px-4">
                <div className="text-white text-xs sm:text-sm font-medium truncate max-w-[60%]">
                  {currentImageIndex + 1} / {allImages.length} - {features[currentImageIndex].title}
                </div>
                <button
                  className="text-white hover:text-primary transition-colors p-1 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Main Image Container */}
              <div className="relative flex-1 flex items-center justify-center min-h-0 bg-black/50 rounded-lg">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-1 sm:left-4 z-10 p-2 sm:p-3 rounded-full bg-background/70 text-muted-foreground hover:bg-background/90 transition-all transform hover:scale-110 shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                
                <div className="relative w-full h-[60vh] sm:h-[70vh] p-1 sm:p-4">
                  <Image
                    src={selectedImage}
                    alt={features[currentImageIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    className="rounded-lg object-contain border border-white/10 shadow-lg"
                    priority
                    quality={90}
                  />
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-1 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-background/70 text-muted-foreground hover:bg-background/90 transition-all transform hover:scale-110 shadow-lg"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Image Navigation Dots */}
              <div className="flex justify-center mt-2 sm:mt-4 space-x-1 sm:space-x-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                      setSelectedImage(allImages[index]);
                    }}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Description */}
              <div className="mt-2 sm:mt-4 text-center px-2">
                <p className="text-white/80 text-xs sm:text-sm max-w-2xl mx-auto">
                  {features[currentImageIndex].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      <div className="fixed top-20 md:top-24 left-6 z-40">
        <Link href="/#projects">
          <motion.div
            className="flex items-center text-sm gap-2 px-4 py-2 rounded-xl bg-primary/90 backdrop-blur-sm border border-ring text-foreground hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ 
              scale: 1.05,
              x: 4
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
            <span className="sm:hidden">Back</span>
          </motion.div>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full"
          >       
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text mb-4 sm:mb-6 leading-tight px-2">
              Sreenarayanaguru Open University (SGOU)
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Redesigned the Sreenarayanaguru Open University student dashboard to deliver a modern, intuitive, 
              and responsive experience that enhances academic management for distance learners.
            </p>
       
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <motion.a
                href="https://erp.sgou.ac.in/login-candidate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all w-full sm:w-auto justify-center max-w-xs"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(45, 212, 191, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                View Live Website
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text font-bold mb-3 sm:mb-4">Problem & Solution</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
              Addressing key challenges in the original dashboard and delivering an improved user experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-red-500/10 border border-red-500/20 w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1 sm:p-2 rounded-lg bg-red-500/10">
                  <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-red-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-red-400">The Problem</h2>
              </div>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>The original dashboard was outdated and difficult to navigate, causing frustration for distance learners needing quick access to academic resources.</p>
                <ul className="space-y-2 sm:space-y-3 ml-2 sm:ml-4">
                  {[
                    "Poor information architecture and visual hierarchy",
                    "Non-responsive design with mobile usability issues",
                    "Complex navigation hiding important features",
                    "Lack of clear status indicators for academic progress"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-green-500/10 border border-green-500/20 w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1 sm:p-2 rounded-lg bg-green-500/10">
                  <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-green-400">The Solution</h2>
              </div>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>A complete redesign with modern, mobile-first approach prioritizing usability and accessibility for all students.</p>
                <ul className="space-y-2 sm:space-y-3 ml-2 sm:ml-4">
                  {[
                    "Complete visual redesign with clear information hierarchy",
                    "Fully responsive design system for all devices",
                    "Intuitive navigation and quick-access features",
                    "Enhanced calendar and notification systems"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-4xl gradient-text font-bold mb-3 sm:mb-4">Key Features</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
              Focused on creating intuitive interfaces that address student needs and improve the academic management experience
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-16 md:space-y-20 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center w-full ${
                  index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-xs sm:text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    {feature.points.map((point) => (
                      <div key={point} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm sm:text-base">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    className="rounded-lg sm:rounded-xl border-8 border-ring/50 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 bg-card w-full overflow-hidden"
                    whileHover={{ scale: isMobile ? 1 : 1.02, y: isMobile ? 0 : -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => openModal(feature.image)}
                  >
                    <div className="w-full h-auto aspect-video relative">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        quality={85}
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    </div>
                  </motion.div>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center mt-2 sm:mt-3 flex items-center justify-center gap-1 sm:gap-2">
                    <Layout className="w-3 h-3 sm:w-4 sm:h-4" />
                    Click image to view full screen
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text font-bold mb-3 sm:mb-4">Technical Implementation</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
              Applied modern frontend technologies and design principles to deliver a scalable, maintainable solution
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6 w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Technologies & Skills Applied
              </h3>
              
              <div className="grid gap-3 sm:gap-4 w-full ">
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex overflow-x-hidden items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background border border-ring/70 hover:border-primary/30 transition-colors w-full"
                  >
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground text-sm sm:text-base truncate">{tech.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground truncate">{tech.purpose}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6 w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Key Deliverables
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                {builtFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-background border border-ring/70 hover:border-primary/30 transition-colors w-full"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-xs sm:text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* View More Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text font-bold mb-4">Explore More Projects</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl mx-auto px-4">
              Check out my other projects and see how I approach different frontend challenges
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
              <Link href="/#projects" className="w-full sm:w-auto">
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-4 sm:text-sm md:text-base rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 40px rgba(45, 212, 191, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Layout className="w-4 h-4" />
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
              
              <Link href="/#contact" className="w-full sm:w-auto">
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-4 xs:text-sm md:text-base rounded-xl bg-background border border-ring text-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:border-primary w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-4 h-4" />
                  Get In Touch
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}