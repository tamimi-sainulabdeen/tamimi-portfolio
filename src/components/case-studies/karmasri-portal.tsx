"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Users, FileText, CheckCircle, ArrowRight, Layout, Lock, Eye , Download, Code, Palette, Component, Zap, X, ChevronLeft, ChevronRight, UserCheck, Settings, Database, Key, Cpu, Workflow, Binary, GitBranch, Server, CpuIcon, Sparkles, Award, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function KarmasriPortalCaseStudy() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const screenshots = [
     {
      src: "/images/karmasri_project/karmasri_banner.webp",
      alt: "Karmasri Portal",
      title: "Karmasri Portal",
      category: "all",
      features: ["Logo"]
    },
    {
      src: "/images/karmasri_project/login.webp",
      alt: "Login Module",
      title: "Login Page",
      category: "authentication",
      features: ["JWT Token Management", "OTP-based Login", "Session Management"]
    },
    {
      src: "/images/karmasri_project/forgot_password.webp",
      alt: "Forgot Password",
      title: "Forgot Password",
      category: "authentication",
      features: [ "OTP-based Login", "Password Recovery", "Confirm password", "Secure Sessions"]
    },
    {
      src: "/images/karmasri_project/officer_dashboard.webp",
      alt: "AIS Officer Dashboard",
      title: "AIS Officer Dashboard",
      category: "dashboard",
      features: ["Role-based UI", "Real-time Data", "Quick Actions", "Notifications"]
    },
    {
      src: "/images/karmasri_project/as_dashboard.webp",
      alt: "AS-II Officer Dashboard",
      title: "Admin Dashboard (AS-II)",
      category: "dashboard",
      features: ["User Management", "Reports & Analytics", "Admin Controls"]
    },
    {
      src: "/images/karmasri_project/crop_image.webp",
      alt: "Profile Management",
      title: "Crop Functionality",
      category: "dashboard",
      features: ["Image Cropping"]
    },
    {
      src: "/images/karmasri_project/er_1.webp",
      alt: "Executive Record Form",
      title: "AIS Officer Executive Record Management",
      category: "er-system",
      features: ["Spark API Integration", "Data Validation", "State Management", "CRUD Operations"]
    },
    {
      src: "/images/karmasri_project/incomplete_modal.webp",
      alt: "Profile Incomplete",
      title: "Profile Incomplete Warning",
      category: "er-system",
      features: ["Status Modal", "Alert for completion", "Session Management"]
    },
    
    {
      src: "/images/karmasri_project/change_password.webp",
      alt: "Change Password",
      title: "Change Password",
      category: "validation",
      features: ["Password Policies", "Password Validation", "Password Strength", "Error messages"]
    },
      {
      src: "/images/karmasri_project/form_validation.webp",
      alt: "Form validation",
      title: "Form Validation",
      category: "validation",
      features: [ "Form Validation", "Error messages", "User Guidance"]
    },
  
  ];

  const filteredScreenshots = screenshots.filter(screenshot => 
    activeTab === 'all' || screenshot.category === activeTab
  );

  const categories = [
    { id: 'all', name: 'All Modules', icon: Component, count: screenshots.length },
    { id: 'authentication', name: 'Authentication', icon: Key, count: screenshots.filter(s => s.category === 'authentication').length },
    { id: 'dashboard', name: 'Dashboards', icon: Cpu, count: screenshots.filter(s => s.category === 'dashboard').length },
    { id: 'er-system', name: 'ER Profile', icon: FileText, count: screenshots.filter(s => s.category === 'er-system').length },
    { id: 'validation', name: 'Forms and Validations', icon: CheckCircle, count: screenshots.filter(s => s.category === 'validation').length },
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
                key={selectedImage} // Important for smooth transitions
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
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full px-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center w-full"
              >
                <motion.h1 
                  className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 drop-shadow-lg px-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    KARMASRI
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed drop-shadow-lg px-2 sm:px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Advanced Digital Platform for <span className="font-semibold text-muted-foreground">Kerala Cadre All India Service(AIS) Officers</span> - 
                  Streamlining Resource Management & Service Processes
                </motion.p>
                
                {/* Feature Cards Section */}
                {/* <motion.div
                  className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8 sm:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-card backdrop-blur-sm border border-secondary/50 hover:border-secondary transition-all duration-300">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground font-medium">All India Service Officers</span>
                  </div>
                  <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-card backdrop-blur-sm border border-secondary/50 hover:border-secondary transition-all duration-300">
                    <Database className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground font-medium">Data Management</span>
                  </div>
                  <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-card backdrop-blur-sm border border-secondary/50 hover:border-secondary transition-all duration-300">
                    <Workflow className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground font-medium">Complex Business Logic</span>
                  </div>
                </motion.div> */}

                {/* Project Badge - Separated with proper spacing */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-8 sm:mt-12"
                >
                  <div className="inline-flex items-start sm:items-center gap-3 px-6 py-3 rounded-2xl bg-primary/5 backdrop-blur-sm border border-ring/50  hover:border-ring transition-all duration-300">
                    <div className="flex flex-col">
                      <div className="flex gap-3">
                        <Shield className="w-4 h-4 text-primary mt-0.9" />
                        <span className="text-foreground font-semibold leading-tight mb-2">
                          Confidential Project
                        </span>
                      </div>
                      <span className="text-xs text-primary leading-none">
                        Live platform access restricted
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>        
          </section>

      {/* Project Overview */}
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text">Project Overview</h2>
                <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                  <p>
                    <span className="font-semibold text-foreground">KARMASRI</span> is a comprehensive digital platform 
                    exclusively designed for Kerala cadre <span className="font-semibold text-foreground">All India Services (AIS) officers</span> - 
                    including <span className="font-semibold text-foreground">IAS (Indian Administrative Service), 
                    IPS (Indian Police Service), and IFS (Indian Forest Service)</span>, developed under the 
                    <span className="font-semibold text-foreground"> General Administration Department, Government of Kerala</span>.
                  </p>
                  <p>
                    As a frontend developer, I engineered complex modules handling sensitive officer data with 
                    <span className="font-semibold text-foreground"> stringent validation requirements</span> and 
                    <span className="font-semibold text-foreground"> multi-layered security protocols</span>.
                  </p>
                </div>

                {/* My Role & Contributions */}
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-ring/50 hover:border-ring mt-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">My Key Contributions</h3>
                  <div className="space-y-3">
                    {[
                      "Complete authentication module (login, OTP, password and token management)",
                      "Role-based dashboards for AIS Officers and AS-II Administrators",
                      "Executive Record system with multiple complex sections",
                      "Profile management, image upload, image cropping functionalities",
                      "Complex validation systems for executive records and dependent details",
                      "Data integration from external source with conditional field logic to auto-populate officer information"
                    ].map((contribution, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm sm:text-base">{contribution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full"
              >
              {/* Login Screenshot Display */}
                  <div className="relative group cursor-pointer" onClick={() => {
                    const loginIndex = screenshots.findIndex(s => s.category === 'all');
                    if (loginIndex !== -1) {
                      setSelectedImage(loginIndex);
                      setIsModalOpen(true);
                    }
                  }}>
                    <div className="relative rounded-xl sm:rounded-sm overflow-hidden border-4 border-ring shadow-lg group-hover:shadow-xl transition-all duration-300">
                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        {/* Actual Image */}
                        <img
                          src="/images/karmasri_project/karmasri_banner.webp"
                          alt="Karmasri Portal"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        
                
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 duration-300" />
                        
                        {/* View Indicator */}
                        <div className="absolute top-4 right-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="bg-primary/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                            <Eye className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Category Badge */}
                      
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                  </div>

              </motion.div>
            </div>
          </div>
        </section>
     {/* Technical Challenges & Solutions */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Technical Challenges & Solutions</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
              Key problems encountered and how I solved them
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Challenges Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/30"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Key Challenges
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Complex Data Validation",
                    description: "Advanced verification of personal and family records to prevent duplicate entries and ensure data accuracy",
                    icon: CheckCircle
                  },
                  {
                    title: "Multi-Source Data Integration",
                    description: "Integrating data from external sources with conditional field behavior and priority logic",
                    icon: Database
                  },
                  {
                    title: "Security Requirements",
                    description: "Implementing proper security measures for handling sensitive officer data",
                    icon: Shield
                  },
                  {
                    title: "Role-Based Permissions",
                    description: "Managing hierarchical permissions across multiple government roles and departments",
                    icon: Users
                  }
                ].map((challenge, index) => (
                  <div key={challenge.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <challenge.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{challenge.title}</h4>
                      <p className="text-muted-foreground text-sm">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solutions Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-secondary/10 border border-secondary/30"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-secondary" />
                Solutions Implemented
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Advanced Validation System",
                    description: "Built custom validation hooks and real-time checks to ensure data accuracy across all modules",
                    technologies: ["Custom Validation", "Real-time Checks", "Data Mapping"]
                  },
                  {
                    title: "Smart Data Integration",
                    description: "Implemented field-level priority logic and conditional rendering based on external data sources",
                    technologies: ["API Integration", "State Management", "Data Sync"]
                  },
                  {
                    title: "Secure Authentication Flow",
                    description: "Developed authentication system with JWT tokens, OTP verification, and session management",
                    technologies: ["JWT Tokens", "Session Management", "OTP System"]
                  },
                  {
                    title: "Dynamic Role Management",
                    description: "Created permission-based UI with conditional rendering for different user roles",
                    technologies: ["Conditional Rendering", "Role-based UI", "Access Control"]
                  }
                ].map((solution, index) => (
                  <div key={solution.title} className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{solution.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-md border border-secondary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
          {/* Authentication System */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 shadow-sm w-full"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                <Key className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Authentication System</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Complete secure authentication module with multiple verification layers and session management.
            </p>
            <div className="space-y-2 sm:space-y-3">
              {[
                "JWT Token-based authentication",
                "OTP-based login & password reset",
                "Automatic session timeout handling",
                "Password expiry enforcement",
                "Secure logout mechanisms"
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        {/* Executive Record Management */}
        <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 shadow-sm w-full"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 rounded-lg bg-secondary/10">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Executive Record Management</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Complex ER system with dynamic forms and data integration from external source for officer records.
            </p>
            <div className="space-y-2 sm:space-y-3">
              {[
                "Multiple structured record sections",
                "Data integration from an external source(SPARK platform) to auto-populate fields",
                "Conditional field rendering based on data availability",
                "Field-level priority logic (external data vs Admin entry vs manual entry)",
                "Conditional section enabling/disabling based on submit status",
                "Real-time validation feedback",
                "Submit, Verification, Return for correction and Approval workflows",
                "Consolidated Preview and PDF generation"
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

            {/* Dashboard Systems */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Role Based Dashboard</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Role-based dashboards for officers and administrators with comprehensive data overviews.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "AIS Officer dashboard with service overview",
                  "AS-II Admin dashboard for verification and system oversight",
                  "Quick actions and notifications",
                  "Role-based UI customization",
                  "Approval and Verification flow"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Validation Engine */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-secondary/10">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Forms and Validations</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Advanced business logic validation preventing data misuse and ensuring integrity.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Conditional validations based on data source",
                  "Age and service duration checks",
                  "Duplicate entry prevention",              
                  "Date range validations",
                  "Document verification workflows",
                  "Family relationship cross-validation",
                  "Spouse uniqueness enforcement",
                  "Dependent management rules",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Profile Management */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                  <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">Profile Management</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Comprehensive profile system with image handling and document management capabilities.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Image cropping and upload functionality",
                  "Document management and preview",
                  "Personal and service details",
                  "Data export and reporting",
                  "Document verification status"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

           {/* UI/UX & Component System */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 shadow-sm w-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-secondary/10">
                  <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <h3 className="text-md sm:text-2xl font-semibold overflow-hidden">UI/UX & Component System</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Responsive component library and user experience optimizations for workflows.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Reusable React components for consistent design",
                  "Mobile-first responsive design for officers",
                  "Accessibility-compliant interface components",
                  "Loading states and error handling patterns",
                  "Intuitive navigation and information architecture",
                  "Performance-optimized component rendering"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Interface Gallery</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
            Explore the key interfaces developed for this portal
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
                  
                  {/* Fallback/Placeholder (shows if image fails to load) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 sm:p-8 opacity-0 ">
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
              
                  
          {/* Features Tags - Updated to use screenshot.features */}
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

        {/* Confidential Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
        
        </motion.div>
      </div>
    </section>


     {/* Skills & Technologies */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Technologies & Skills</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
              Technical stack and development approaches used in this project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Technical Stack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Technical Stack</h3>
              
              {[
                {
                  category: "Frontend Development",
                  skills: ["Next.js", "React.js", "JavaScript (ES6+)", "Responsive Design", "Component Architecture"],
                  icon: Code,
                  color: "secondary"
                },
                {
                  category: "State & Data Management",
                  skills: ["React Hooks", "Context API", "Form State Management", "API Data Handling", "Session Storage", "Local Storage"],
                  icon: Database,
                  color: "secondary"
                },
                {
                  category: "Authentication & Security",
                  skills: ["JWT Tokens", "Session Management", "Input Validations", "Secure Routing"],
                  icon: Shield,
                  color: "secondary"
                },
                {
                  category: "API Integration",
                  skills: ["REST APIs", "Axios/Fetch", "Error Handling", "Data Synchronization", "External Data Sources"],
                  icon: Workflow,
                  color: "secondary"
                }
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-secondary/5 border border-secondary/50 hover:border-secondary transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-${skillGroup.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <skillGroup.icon className={`w-5 h-5 text-${skillGroup.color}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 sm:px-3 py-1 bg-card text-secondary rounded-full text-xs sm:text-sm border border-secondary/50 hover:border-secondary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Development Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Development Approach</h3>
              
              <div className="grid gap-4 sm:gap-6">
                {[
                  {
                    icon: Component,
                    title: "Modular Components",
                    description: "Built reusable React components for consistent development and maintenance"
                  },
          
                  {
                    icon: Users,
                    title: "User Experience",
                    description: "Focused on intuitive interfaces and smooth interactions for better usability"
                  },
                  {
                    icon: GitBranch,
                    title: "Code Quality",
                    description: "Maintained clean, organized code with proper documentation and best practices"
                  }
                ].map((approach, index) => (
                  <motion.div
                    key={approach.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-ring/50 hover:border-ring transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <approach.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{approach.title}</h4>
                        <p className="text-muted-foreground text-sm sm:text-base">{approach.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Key Learnings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/30"
              >
                <h4 className="text-lg font-semibold text-foreground mb-3 sm:mb-4">Project Outcomes</h4>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Successfully completed authentication modules meeting security standards",
                    "Implemented advanced validation logic preventing data inconsistencies and misuse",
                    "Created scalable architecture supporting multiple user roles and workflows",
                    "Ensured data integrity through comprehensive validation and business rules",
                    "Delivered intuitive interfaces for data management"
                  ].map((learning, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm sm:text-base">{learning}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-4xl gradient-text font-bold mb-4">Explore More Projects</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Check out my other projects and see how I approach different challenges
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