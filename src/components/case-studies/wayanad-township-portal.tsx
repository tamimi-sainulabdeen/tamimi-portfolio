"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MousePointer as ClickIcon, ExternalLink, Code, Layout, Palette, Component, Zap, X, ChevronLeft, ChevronRight, CreditCard, Shield, FormInput, Globe, Users, Download, Eye, FileText, CheckCircle, Key, Cpu, UserCheck, Settings, Database, Workflow, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function WayanadTownshipPortalCaseStudy() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const screenshots = [
    {
      src: "/images/wayanad_project/wayanad_home.webp",
      alt: "Wayanad Township Portal",
      title: "Wayanad Township Portal",
      category: "all",
      features: ["Home"]
    },
    {
      src: "/images/wayanad_project/gallery.webp",
      alt: "Gallery",
      title: "Gallery",
      category: "interface",
      features: ["Image Gallery", "Media Display"]
    },
    {
      src: "/images/wayanad_project/login_1.webp",
      alt: "Login",
      title: "Login Page",
      category: "authentication",
      features: ["Sponsor/Official Login", "OTP Login","Google Sign-In"]
    },
    {
      src: "/images/wayanad_project/piu_dashboard.webp",
      alt: "Admin Dashboard",
      title: "Admin Dashboard",
      category: "dashboard",
      features: ["Cards", "Charts", "Progress", "Sponsorship details", "Donation Management"]
    },
       {
      src: "/images/wayanad_project/sponsorship_dashboard.webp",
      alt: "Sponsor Dashboard",
      title: "Sponsor Dashboard",
      category: "dashboard",
      features: [ "Sponsorship options", "Sponsorship history", "Cards", "Data tables"]
    },
    {
      src: "/images/wayanad_project/sponsorship_details.webp",
      alt: "Payment Details",
      title: "Payment Details",
      category: "interface",
      features: ["Transaction History", "Status Tracking", "Filters", "Pagination"]
    },
    {
      src: "/images/wayanad_project/house_sponsorship.webp",
      alt: "House Sponsorship",
      title: "House Sponsorship",
      category: "interface",
      features: ["House Details", "Payment Methods", "Add to Cart"]
    },
    {
      src: "/images/wayanad_project/house_form.webp",
      alt: "House Sponsorship Form",
      title: "House Sponsorship Form",
      category: "forms",
      features: ["Dynamic Fields", "Validation", "Installment Options"]
    },
    {
      src: "/images/wayanad_project/monetary_form.webp",
      alt: "Monetary Sponsorship",
      title: "Monetary Sponsorship Form",
      category: "forms",
      features: [ "Payment Options", "Confirmation", "Preview"]
    },
     {
      src: "/images/wayanad_project/house_installment.webp",
      alt: "House Sponsorship",
      title: "House Installment Details",
      category: "interface",
      features: [ "installment Options", "Transaction Details", "Reminders"]
    }
  ];

  const filteredScreenshots = screenshots.filter(screenshot => 
    activeTab === 'all' || screenshot.category === activeTab
  );

  const categories = [
    { id: 'all', name: 'All Modules', icon: Component, count: screenshots.length },
    { id: 'dashboard', name: 'Dashboard', icon: Layout, count: screenshots.filter(s => s.category === 'dashboard').length },
    { id: 'authentication', name: 'Authentication', icon: CreditCard, count: screenshots.filter(s => s.category === 'authentication').length },
    { id: 'forms', name: 'Forms', icon: FormInput, count: screenshots.filter(s => s.category === 'forms').length },
    { id: 'interface', name: 'Interface', icon: Globe, count: screenshots.filter(s => s.category === 'interface').length },
  ];

  const openModal = (index: number) => {
    const actualIndex = screenshots.findIndex(s => s.src === filteredScreenshots[index].src);
    setSelectedImage(actualIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + screenshots.length) % screenshots.length);
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImage]);

  return (
    <div className="min-h-screen bg-background pt-3 overflow-hidden">
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

      {/* Image Modal */}
      {isModalOpen && selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 sm:p-4 backdrop-blur-sm hover:bg-black/70"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 sm:p-4 backdrop-blur-sm hover:bg-black/70"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 text-white text-sm bg-black/50 rounded-full px-3 py-2 backdrop-blur-sm">
              {selectedImage + 1} / {screenshots.length}
            </div>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <motion.img
                key={selectedImage}
                src={screenshots[selectedImage].src}
                alt={screenshots[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section with Background Image */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wayanad_project/wayanad_banner.webp"
            alt="Wayanad Township Portal Banner"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
          {/* Additional Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full px-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full"
          >
            <motion.h1 
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Wayanad Township Portal
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed drop-shadow-lg px-2 sm:px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
             A rehabilitation sponsorship platform designed for disaster-relief initiatives. 
             It supports both monetary, materials and house sponsorships, offers flexible online/offline payment flows, and manages installment-based contributions. 
             The system provides multiple sponsor categories (individual, group, and corporate), 
             seamless Google Sign-In authentication, and automated certificate/document generation for a smooth and transparent user experience.
            </motion.p>
            
            <motion.a
              href="https://wayanadtownship.kerala.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm sm:text-base w-full sm:w-auto justify-center max-w-xs mx-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(45, 212, 191, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              Visit Live Website
            </motion.a>
          </motion.div>
        </div>        
      </section>

      {/* Project Overview - Focused on Development */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text">Website Development</h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>
                  As the frontend developer, I built the complete user interface for this disaster-relief platform 
                  featuring dual sponsorship models (monetary and house), flexible payment processing (online/offline), 
                  and comprehensive sponsor management. The system handles complex business logic including installment 
                  payments, multiple sponsor types, and automated document generation.
                </p>
                <p>
                  I developed the frontend with reusable components, implemented the design system, 
                  and integrated with backend APIs to create a seamless user experience for administrators, 
                  contractors, and sponsors.
                </p>
              </div>
            </motion.div>

           <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full"
            >
              {/* Add click handler to open modal with the first image */}
              <div 
                className="relative group cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-lg w-full"
                onClick={() => {
                  const overviewIndex = screenshots.findIndex(s => s.category === 'all');
                  if (overviewIndex !== -1) {
                    setSelectedImage(overviewIndex);
                    setIsModalOpen(true);
                  }
                }}
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {/* Actual Image */}
                  <img
                    src="/images/wayanad_project/wayanad_2.webp"
                    alt="Wayanad Portal"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Indicator */}
                  <div className="absolute top-4 right-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-primary/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Highlights */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Development Highlights</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
              Key features and technical implementations I developed
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full"
          >
            {/* Dashboard Development - Made Responsive */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                  <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Dashboard Development</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Built multiple role-based dashboards with React components, 
                and responsive layouts.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Admin dashboard with system controls and analytics",
                  "Contractor dashboard for project management",
                  "Sponsor dashboard for contribution tracking",
                  "Dynamic data tables with sorting and pagination",
                  "Real-time data visualization with React ECharts"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sponsorship System */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-secondary/10">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Sponsorship System</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Developed dual sponsorship models with flexible contribution options and automated documentation.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Monetary donations",
                  "House sponsorship",
                  "Installment payments (up to 2 installments)",
                  "Multiple sponsor types: Individual, Group, Corporate",
                  "Receipt & Certificate generation"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Payment Processing */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">Payment Processing</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Built UI screens for payment system supporting multiple transaction methods and verification workflows.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Online payments: UPI, Cards, Net Banking",
                  "Offline payments: Bank Transfer, Cheque",
                  "Payment status tracking & verification",
                  "Installment management for large amounts",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Component Library */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-secondary/10">
                  <Component className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Component Architecture</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Created a reusable component library for 
                consistent development and maintenance.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Modular React components",
                  "Reusable form components with validation",
                  "Custom data table components",
                  "Chart and visualization components",
                  "Responsive layout components"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form System */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                  <FormInput className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Form Management System</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Built dynamic form system with conditional logic, multi-step workflows, 
                and comprehensive validation.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Conditional form field rendering",
                  "Multi-step form wizard components",
                  "Real-time validation feedback",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Authentication & Documents */}
            {/* <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-secondary/10">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Authentication & Documents</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Implemented secure authentication and automated document generation system.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Google Sign-In integration",
                  "Secure session handling",
                  "Automated PDF receipt generation",
                  "Sponsorship certificate creation",
                  "Document download and sharing"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Technical Implementation</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
              Modern frontend architecture and development approach
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 w-full"
          >
            {[
              {
                icon: Code,
                title: "Next.js",
                description: "App Router, JavaScript, React"
              },
              {
                icon: Palette,
                title: "Tailwind CSS",
                description: "Utility-first styling system"
              },
              {
                icon: Component,
                title: "Component Library",
                description: "Reusable UI components"
              },
           
              {
                icon: Zap,
                title: "Performance",
                description: "Optimized loading & rendering"
              },
          
              {
                icon: Globe,
                title: "i18n",
                description: "Multi-language support"
              },
              {
                icon: Download,
                title: "Data Export",
                description: "PDF generation, data export"
              },
              {
                icon: Users,
                title: "Authentication",
                description: "Google Sign-In & role management"
              },
          
              {
                icon: CreditCard,
                title: "Payment Gateway",
                description: "Multi-method payment processing"
              },
          
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={cardVariants}
                whileHover="hover"
                className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/30 shadow-sm text-center w-full"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <tech.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 md:mb-3">{tech.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

        {/* Screenshot Gallery */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Interface Gallery</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
              Explore the key interfaces developed for this sponsorship platform
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card/50 border border-ring/50 text-muted-foreground hover:border-ring hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="text-xs bg-primary/20 px-1.5 py-0.5 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Gallery Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full"
          >
            {filteredScreenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group cursor-pointer relative w-full"
                onClick={() => openModal(index)}
              >
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-background shadow-sm group-hover:shadow-md transition-all duration-300 w-full">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-muted w-full">
                    {/* Actual Image */}
                    <img
                      src={screenshot.src}
                      alt={screenshot.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Fallback/Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4 sm:p-8 opacity-0">
                        <FileText className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                        <h3 className="text-base sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                          {screenshot.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* View Indicator */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div className="bg-background/90 backdrop-blur-sm rounded-full px-1 sm:px-2 py-1 text-xs font-medium text-foreground border border-border">
                        {categories.find(c => c.id === screenshot.category)?.name}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {screenshot.title}
                      </h3>
                    </div>
                    
                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {screenshot.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Navigation Help */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12 w-full"
          >
            <p className="text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
              <span className="flex items-center gap-1">
                <ClickIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                Click to explore
              </span>
              •
              <span className="flex items-center gap-1">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                Navigate with arrows
              </span>
            </p>
          </motion.div> */}
        </div>
      </section>

      {/* Development Outcomes */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">Development Outcomes</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-2">
              Successfully delivered a production-ready platform that streamlined relief coordination 
              through dual sponsorship models and flexible payment systems. The frontend architecture 
              I built provided efficient, scalable interfaces for multiple user roles, with responsive 
              design, secure payment processing, installment management, and comprehensive sponsor workflows.
            </p>
            
         
            
            <div className="pt-6 sm:pt-8">
               <motion.a
              href="https://wayanadtownship.kerala.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm sm:text-base w-full sm:w-auto justify-center max-w-xs mx-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(45, 212, 191, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              Visit Live Website
            </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* View More Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text font-bold mb-4">Explore More Projects</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Check out my other projects and see how I approach different frontend challenges
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-2">
              <Link href="/#projects" className="w-full sm:w-auto">
                <motion.div
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center text-sm sm:text-base"
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
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-background border border-ring text-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:border-primary w-full sm:w-auto justify-center text-sm sm:text-base"
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