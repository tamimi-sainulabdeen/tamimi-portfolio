"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="px-6 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold font-dancing text-5xl md:text-6xl creative-text mb-4">
            About Me
          </h2>
         
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Keeping your paragraphs but with better styling */}
      {/* Simpler Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-left max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                I'm a front-end developer with 1 year of experience, passionate about 
                crafting intuitive interfaces that connect seamlessly with backend services. 
                I enjoy solving problems through thoughtful design, clean code, and 
                effective integration.
              </p>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                <div className="w-px h-full bg-gradient-to-b from-primary to-transparent mt-2"></div>
              </div>
              <div className="flex-1 pb-6">                
                <h3 className="text-xl font-semibold text-foreground mb-3">Front-End Development</h3>
                <p className="text-foreground leading-relaxed">
                  I build responsive, high-performance interfaces using modern frameworks, 
                  with expertise in consuming REST APIs, managing application state, and 
                  handling asynchronous data flow to create dynamic user experiences.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                <div className="w-px h-full bg-gradient-to-b from-secondary to-transparent mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">UI/UX Focus</h3>
                <p className="text-foreground leading-relaxed">
                I apply design thinking to turn ideas into intuitive user flows and visually consistent layouts. 
                I focus on accessibility, usability, and creating interfaces that feel natural and engaging for users.
                </p>
              </div>
            </div>

      {/* Point 3 */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-3">Problem Solver</h3>
          <p className="text-foreground leading-relaxed">
          I enjoy solving problems through code and continuously strive to improve my skills 
          and take on new frontend challenges.
          </p>
        </div>
      </div>
    </motion.div>

          {/* Smaller Image Section */}
            <motion.div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto order-2 md:order-1 mt-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
              {/* Background Decoration */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-2xl transform rotate-3"></div>
              
              {/* Main Image */}
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-lg border border-ring"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/images/tamimi_2.webp"
                  alt="Profile picture"
                  width={320}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                  placeholder="blur" // Add this
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6/DMclB18bGYbq2tMUg=="
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
      
          </motion.div>
        </div>
      </div>
    </section>
  );
}