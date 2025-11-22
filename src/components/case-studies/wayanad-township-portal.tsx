"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code, Layout, Smartphone, Palette, Component, Zap, X, ChevronLeft, ChevronRight, CreditCard, Shield, FormInput, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function WayanadTownshipPortalCaseStudy() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const screenshots = [
    {
      src: "/images/wayanad-dashboard.webp",
      alt: "Main Dashboard",
      title: "Main Dashboard",
      description: "Responsive dashboard with overview cards and navigation"
    },
    {
      src: "/images/wayanad-donation.webp",
      alt: "Donation Page",
      title: "Donation Interface",
      description: "Payment form with multiple gateway options"
    },
    {
      src: "/images/wayanad-admin.webp",
      alt: "Admin Panel",
      title: "Admin Dashboard",
      description: "Management interface with data tables and controls"
    },
    {
      src: "/images/wayanad-forms.webp",
      alt: "Dynamic Forms",
      title: "Form Management",
      description: "Conditional form fields with validation"
    },
    {
      src: "/images/wayanad-gallery.webp",
      alt: "Media Gallery",
      title: "Progress Gallery",
      description: "Image gallery with categorization"
    },
    {
      src: "/images/wayanad-mobile.webp",
      alt: "Mobile View",
      title: "Mobile Responsive",
      description: "Optimized mobile interface"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
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
      transition: { duration: 0.6 }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
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

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Back Button */}
     <div className="fixed top-24 left-30 z-40">
        <Link href="/#projects">
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/30 backdrop-blur-sm border border-ring/50 text-foreground hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative">
              <Image
                src={screenshots[selectedImage].src}
                alt={screenshots[selectedImage].alt}
                width={1200}
                height={800}
                className="rounded-lg max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold">
                  {screenshots[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {screenshots[selectedImage].description}
                </p>
                <div className="text-white text-sm mt-2">
                  {selectedImage + 1} / {screenshots.length}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-bold text-4xl md:text-6xl gradient-text mb-6">
              Wayanad Township Portal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              A comprehensive relief and rehabilitation platform built to support communities affected by the Meppadi landslide. 
              Connecting hope with help through technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                Next.js 14
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm">
                Responsive Design
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                i18n Internationalization
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm">
                Form Management
              </span>
            </div>

            <motion.a
              href="https://wayanadtownship.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(45, 212, 191, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              View Live Project
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a frontend developer, I designed and developed the user interfaces for a disaster relief platform 
                  supporting the Meppadi landslide rehabilitation efforts. Created responsive interfaces, 
                  component libraries, and user experiences for multiple user roles.
                </p>
                <p>
                  Focused on creating intuitive designs that work seamlessly across all devices 
                  while maintaining performance and accessibility standards.
                </p>
              </div>

              {/* Role Focus */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="mt-8 p-6 rounded-2xl bg-background border border-border shadow-sm"
              >
                <h4 className="text-lg font-semibold text-primary mb-3">My Role: Frontend Developer</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-primary" />
                      <span>UI/UX Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layout className="w-4 h-4 text-primary" />
                      <span>Component Development</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-primary" />
                      <span>Responsive Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span>Performance Optimization</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <Image
                  src="/images/wayanad-dashboard.webp"
                  alt="Wayanad Portal Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Project Screenshots</h2>
            <p className="text-muted-foreground">
              Click on any image to view enlarged version
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden rounded-xl border border-border shadow-sm group-hover:shadow-lg group-hover:border-primary transition-all duration-300">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <ExternalLink className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features & Technical Challenges */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Key Features & Technical Challenges</h2>
            <p className="text-muted-foreground">
              Complex frontend features demonstrating problem-solving and technical expertise
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Payment System */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-8 rounded-2xl bg-background border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Payment System Interface</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Developed the frontend integration for multiple payment gateways with secure 
                form handling and responsive checkout experience.
              </p>
              <div className="space-y-3">
                {[
                  "Payment form validation and error handling",
                  "Responsive checkout interface for both gateways",
                  "Loading states and payment status indicators",
                  "Mobile-optimized payment flow",
                  "Secure iframe integration for payment processing"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Admin Dashboard */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-8 rounded-2xl bg-background border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">Admin Dashboard Interface</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Built comprehensive admin interface with data visualization, 
                user management components, and responsive layout.
              </p>
              <div className="space-y-3">
                {[
                  "Role-based UI components and access views",
                  "Data visualization with charts and statistics",
                  "Responsive data tables with sorting and filtering",
                  "Bulk action interfaces and modal workflows",
                  "Real-time notification system"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form Management */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-8 rounded-2xl bg-background border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FormInput className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Dynamic Form Management</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Developed sophisticated form system with conditional logic, 
                file uploads, and multi-step workflows for various application types.
              </p>
              <div className="space-y-3">
                {[
                  "Conditional field rendering based on user inputs",
                  "File upload interface with drag-and-drop",
                  "Multi-step form wizard with progress tracking",
                  "Real-time validation and error handling",
                  "Auto-save functionality for long forms"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Language Toggle */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-8 rounded-2xl bg-background border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">Multi-language Support</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Implemented internationalization (i18n) using react-i18next for seamless 
                language switching between English and Malayalam to serve local communities.
              </p>
              <div className="space-y-3">
                {[
                  "Language toggle between English and Malayalam",
                  "react-i18next integration with JSON translation files",
                  "Dynamic content translation across all components",
                  "Locale-based date and number formatting",
                  "Accessible language switcher component"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Frontend Implementation */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frontend Implementation</h2>
            <p className="text-muted-foreground">
              Modern frontend architecture and design system implementation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                icon: Layout,
                title: "Component Architecture",
                description: "Reusable UI components with TypeScript"
              },
              {
                icon: Palette,
                title: "Design System",
                description: "Consistent styling with Tailwind CSS"
              },
              {
                icon: Smartphone,
                title: "Responsive Design",
                description: "Mobile-first responsive layouts"
              },
              {
                icon: Zap,
                title: "Performance",
                description: "Optimized images and lazy loading"
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={cardVariants}
                whileHover="hover"
                className="p-6 rounded-2xl bg-card border border-border shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Frontend Features */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            className="bg-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Frontend Features Developed</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">UI Components</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Custom dashboard with data visualization cards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Responsive navigation and sidebar components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Form components with validation states</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Modal and overlay components</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-secondary">User Experience</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Mobile-optimized responsive layouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Interactive form validation and feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Loading states and progress indicators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Accessibility-focused design patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frontend Skills Demonstrated</h2>
            <p className="text-muted-foreground">
              Technical capabilities in modern frontend development and design
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                category: "Framework & Language",
                skills: ["Next.js 14", "TypeScript", "React", "App Router", "i18n"]
              },
              {
                category: "Styling & Design", 
                skills: ["Tailwind CSS", "Responsive Design", "UI/UX Principles", "Component Design"]
              },
              {
                category: "Performance & UX",
                skills: ["Image Optimization", "Lazy Loading", "Loading States", "Mobile First"]
              },
              {
                category: "Development Tools",
                skills: ["Git & GitHub", "VS Code", "Chrome DevTools", "Figma"]
              },
              {
                category: "Component Architecture",
                skills: ["Reusable Components", "Props & Types", "State Management", "Event Handling"]
              },
              {
                category: "Form Management",
                skills: ["Form Validation", "Conditional Fields", "User Feedback", "Error Handling"]
              }
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={cardVariants}
                whileHover="hover"
                className="p-6 rounded-2xl bg-background border border-border shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full bg-card border border-border text-sm text-muted-foreground"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Outcome */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-light/30 to-purple-light/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold gradient-text">Project Outcome</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Successfully delivered a responsive, user-friendly frontend that provided an intuitive 
              experience for donors, administrators, and beneficiaries, contributing to the platform's 
              effectiveness in coordinating relief efforts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <motion.a
                href="https://wayanadtownship.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </motion.a>
              
              <Link href="/#projects">
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-semibold hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code className="w-5 h-5" />
                  View Other Projects
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}