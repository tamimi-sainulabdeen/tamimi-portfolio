"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Code, Users } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold font-dancing text-5xl md:text-6xl creative-text mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey as a Software Engineer
          </p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >

          {/* ADD: Card hover lift */}
          <motion.div
            className="relative bg-card hover:bg-muted border border-secondary/10 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-8"
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left - Icon and Basic Info */}
              {/* ADD: Container hover scale */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* ADD: Icon hover animation */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                >
                  <Briefcase className="w-10 h-10 text-white" />
                </motion.div>
                <div className="space-y-3">
                  {/* ADD: Info items hover slide */}
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>SEP 2024 - NOV 2025</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Kerala, India</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-sm font-medium text-primary"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <span>Full-time Position</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Detailed Info */}
              <div className="flex-1">
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Frontend Developer
                  </h3>
                  <p className="text-secondary text-lg font-semibold">
                    Centre for Digital Innovation And Product Developement
                  </p>
                </motion.div>

                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Developing responsive web applications using modern frameworks. I collaborate with designers and developers to create user-friendly interfaces and ensure smooth, high-performing digital experiences.
                </motion.p>

                {/* Technologies */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Next.js",
                      "Figma",                   
                      "Tailwind CSS",  
                      "JavaScript",
                      "TypeScript",                   
                      "Git",
                      "GitHub",
                      "REST APIs",
                      "Framer Motion"
                    ].map((tech, index) => (
                      // ADD: Tag hover effect
                      <motion.span
                        key={index}
                        className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm border border-secondary/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.5 + index * 0.1 
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(45, 212, 191, 0.15)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Key Responsibilities */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Designed and converted high-fidelity Figma prototypes into responsive, accessible UI screens.",
                      "Developed scalable web interfaces using React, Next.js, Tailwind CSS, and JavaScript/TypeScript.",
                      "Built reusable UI components and optimized performance with lazy loading and minimized re-renders.",
                      "Integrated REST APIs and managed state for smooth data flow.",
                      "Collaborated with designers and developers, performing code reviews and UI testing.",
                      "Managed version control using Git/GitHub and followed Agile development practices."
                    ].map((responsibility, index) => (
                      // ADD: List item hover effects
                      <motion.li 
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.7 + index * 0.1 
                        }}
                        whileHover={{ x: 5 }}
                      >
                        {/* ADD: Bullet hover scale */}
                        <motion.div 
                          className="w-1.5 h-1.5 bg-secondary rounded-full"
                          whileHover={{ scale: 1.5 }}
                        ></motion.div>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* ADD: Hover Glow Effect */}
            <motion.div
              className="rounded-2xl bg-card "
              initial={false}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}