import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio-data";
import { Target, Globe } from "lucide-react";


interface HeroSectionProps {
  onScrollToProjects: () => void;
}

export function HeroSection({ onScrollToProjects }: HeroSectionProps) {
  return (
    <section id="home" className="px-6 pt-20 pb-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto w-full py-8">
        <div className="grid md:grid-cols-2 gap-5  items-center">

          {/* ---------------- IMAGE (shown second on mobile) ---------------- */}
         <motion.div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto order-2 md:order-1 mt-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Decoration - Tilted LEFT */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-xl transform -rotate-3"></div>

            {/* Main Image */}
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-lg border border-ring "
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                src="/images/tamimi_1.webp"
                alt="Tamimi Sainulabdeen"
                width={320}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
                priority
                placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6/DMclB18bGYbq2tMUg=="
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>


          {/* ---------------- CONTENT (shown first on mobile) ---------------- */}
          <motion.div
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-muted-foreground mb-2 text-2xl lg:text-3xl font-bold font-dancing">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
              {personalInfo.name}
            </h1>

            <p className="text-foreground text-lg md:text-xl lg:text-2xl font-semibold">
              {personalInfo.title}
            </p>
             {/* Status Tags */}
         <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
            <span
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-background text-secondary border border-secondary/50 backdrop-blur-md flex items-center gap-2"
            >
              <Target className="w-4 h-4" />
              Actively Seeking Opportunities
            </span>

            <span
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-background text-primary border border-primary/50 backdrop-blur-md flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              Open to Relocation
            </span>
          </div>



            <p className="text-muted-foreground max-w-2xl text-base lg:text-lg leading-relaxed mx-auto lg:mx-0">
              Crafting thoughtful, user-centered digital experiences that look visually appealing and feel effortless to use.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={onScrollToProjects}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Works
              </motion.button>

             <motion.a
                href="/documents/Tamimi_Sainulabdeen_CV.pdf"
                download="Tamimi_Sainulabdeen_CV.pdf"
                className="px-6 py-3 rounded-xl border border-ring text-muted-foreground hover:border-primary hover:text-foreground transition-colors flex items-center gap-2 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
