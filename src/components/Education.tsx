"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award, GraduationCap, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-background">
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
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey in Computer Science
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* ADD BACK: Background Effect */}
          <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* ADD BACK: Card hover lift */}
          <motion.div
            className="relative bg-card/50 border border-border shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-8"
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left - Icon and Basic Info */}
              {/* ADD BACK: Container hover scale */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* ADD BACK: Icon hover animation */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                >
                  <GraduationCap className="w-10 h-10 text-white" />
                </motion.div>
                <div className="space-y-3">
                  {/* ADD BACK: Info items hover slide */}
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    whileHover={{ x: 5 }}
     
                  >
                    <Calendar className="w-4 h-4" />
                    <span>2020 - 2024</span>
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
                    className="flex items-center gap-2 text-sm font-medium text-secondary"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={{ x: 5 }}
         
                  >
                    <Award className="w-4 h-4" />
                    <span>First Class</span>
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
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-primary text-lg font-semibold">
                    APJ Abdul Kalam Technological University
                  </p>
                </motion.div>

                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Comprehensive 4-year program focusing on software development, algorithms, 
                  data structures, and modern web technologies. Gained hands-on experience 
                  through various projects and coursework.
                </motion.p>

                {/* Key Focus Areas */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Key Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Web Development",
                      "Database Systems",
                      "Software Engineering",
                      "Computer Networks",
                      "Machine Learning"
                    ].map((topic, index) => (
                      // ADD BACK: Tag hover effect
                      <motion.span
                        key={index}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
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
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Completed multiple full-stack web projects",
                      "Active participant in coding competitions",
                      "Strong foundation in problem-solving and algorithms"
                    ].map((achievement, index) => (
                      // ADD BACK: List item hover effects
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
                        {/* ADD BACK: Bullet hover scale */}
                        <motion.div 
                          className="w-1.5 h-1.5 bg-primary rounded-full"
                          whileHover={{ scale: 1.5 }}
                        ></motion.div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* ADD BACK: Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 -z-10"
              initial={false}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}