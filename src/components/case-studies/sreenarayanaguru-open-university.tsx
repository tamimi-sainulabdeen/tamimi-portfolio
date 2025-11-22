// app/projects/sreenarayanaguru-open-university/page.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Users, Layout, Smartphone, CheckCircle, Code, Palette, Component, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SGOUCaseStudy() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/#projects">
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-foreground hover:border-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </motion.div>
        </Link>
      </div>

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
              Sreenarayanaguru Open University (SGOU)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Redesigned the student dashboard with modern, responsive UI and enhanced features to improve usability, navigation, and overall student experience for Kerala's first state open university website.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                Bootstrap 5
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                Material Design
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                JavaScript
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                CSS3
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                Responsive Design
              </span>
            </div>

            <motion.a
              href="https://erp.sgou.ac.in/login-candidate"
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
              Visit Website
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <Zap className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-red-400">The Problem</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>The existing student dashboard was outdated and difficult to navigate, causing frustration for distance learners who needed quick access to academic resources.</p>
                <p>Key challenges included:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Poor information architecture and visual hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Non-responsive design that didn't work well on mobile devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Complex navigation made it hard to find important features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Lack of clear status indicators for academic progress</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-green-400">The Solution</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>I redesigned the entire student dashboard with a modern, mobile-first approach that prioritized usability and accessibility.</p>
                <p>Key improvements included:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Complete visual redesign with clear information hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Fully responsive design system that works on all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Intuitive navigation and quick-access features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Enhanced calendar and notification systems</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          </motion.div>

          <div className="space-y-20">
            {/* Feature 1: Intuitive Dashboard Redesign */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Intuitive Dashboard Redesign</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Redesigned the dashboard layout to improve clarity, usability, and visual hierarchy. 
                  Students can quickly view their academic progress, subjects, notifications, calendar 
                  updates, and service requests.
                </p>
                <div className="space-y-3">
                  {[
                    "Clean and structured information architecture",
                    "Clear status indicators for semesters and registrations",
                    "Quick-access action cards for common tasks",
                    "Personalized welcome section with academic details"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/images/sgou_1.webp"
                    alt="Intuitive Dashboard Redesign"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Responsive Design System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-row-dense"
            >
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-semibold mb-6">Responsive, Mobile-Friendly Design System</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Built a consistent and scalable design system to ensure the interface looks and 
                  functions smoothly across all screen sizes.
                </p>
                <div className="space-y-3">
                  {[
                    "Mobile-first, flexible grid system",
                    "Consistent spacing, color usage, and typography",
                    "Adaptive components for different layouts",
                    "Touch-friendly controls for mobile users"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/images/sgou_2.webp"
                    alt="Responsive Design System"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Academic Calendar UI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Academic Calendar UI</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Designed a simplified and easy-to-scan calendar section displaying important 
                  university updates, deadlines, and alerts.
                </p>
                <div className="space-y-3">
                  {[
                    "Color-coded event indicators",
                    "Clear date hierarchy and layout",
                    "Highlighted urgent updates/alerts",
                    "Easy navigation for upcoming deadlines"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/images/sgou_4.webp"
                    alt="Academic Calendar UI"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Implementation */}
{/* Technical Implementation */}
<section className="py-20 px-6 bg-card/50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-4">Technical Implementation</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Modern frontend stack focused on performance, accessibility, and maintainability
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-xl font-semibold flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-primary" />
          Tech Stack
        </h3>
        
        <div className="grid gap-4">
          {[
            { name: "Bootstrap 5", purpose: "Responsive Layout & Components" },
            { name: "Material Design", purpose: "UI/UX System & Patterns" },
            { name: "JavaScript", purpose: "Interactivity & Frontend Logic" },
            { name: "CSS3", purpose: "Custom Styling & Animations" },
            { name: "HTML5", purpose: "Semantic Structure" }
          ].map((tech, index) => (
            <div key={tech.name} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-foreground">{tech.name}</div>
                <div className="text-sm text-muted-foreground">{tech.purpose}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Key Features Built */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-xl font-semibold flex items-center gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-primary" />
          Features Built
        </h3>
        
        <div className="grid gap-3">
          {[
            "Student Dashboard Layout",
            "Academic Progress Visualization", 
            "Responsive Navigation System",
            "Notification & Alert System",
            "Calendar & Deadline Tracking",
            "Service Request Interface",
            "Mobile-First Components",
            "Accessibility-Focused Design"
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>


      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
}