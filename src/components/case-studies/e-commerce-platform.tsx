"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ShoppingCart, CreditCard, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function ECommercePlatformCaseStudy() {
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
              E-Commerce Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              A modern, scalable e-commerce platform built with Next.js and TypeScript, 
              featuring seamless checkout, inventory management, and personalized shopping experiences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                Next.js
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                Stripe
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                PostgreSQL
              </span>
            </div>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(45, 212, 191, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "Smart Cart System",
                description: "Advanced cart management with real-time updates, saved items, and cross-device synchronization"
              },
              {
                icon: CreditCard,
                title: "Secure Payments",
                description: "Integrated Stripe payments with multiple payment methods and fraud detection"
              },
              {
                icon: Shield,
                title: "Admin Dashboard",
                description: "Comprehensive inventory management, order tracking, and customer insights"
              },
              {
                icon: Zap,
                title: "Fast Performance",
                description: "Optimized with Next.js for lightning-fast page loads and smooth user experience"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}