"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiJavascript,
  SiFigma, SiBootstrap, SiTailwindcss, SiHtml5, SiGit, SiGithub, SiPostman
} from "react-icons/si";

import { 
  Users, MessageCircle, Clock, Target, 
  Lightbulb, Search, Zap, BookOpen, Code2,
  Heart, Brain, Calendar, Sparkles, TrendingUp,
  Workflow, Smartphone, Boxes, PlugZap, Bug, Globe, Gauge, TestTube, Palette, ShieldCheck
} from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    gradient: "from-blue-500/50 to-cyan-500/50",
    hoverGradient: "from-blue-500/30 to-cyan-500/30",
    border: "border-blue-200/50",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "React", icon: SiReact, color: "text-blue-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    ],
  },
  {
    category: "Design",
    gradient: "from-purple-500/50 to-pink-500/50",
    hoverGradient: "from-purple-500/30 to-pink-500/30",
    border: "border-purple-200/50",
    skills: [
      { name: "Figma", icon: SiFigma, color: "text-purple-600" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-600" },
      { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-500" },
    ],
  },
  {
    category: "Tools",
    gradient: "from-green-500/50 to-emerald-500/50",
    hoverGradient: "from-green-500/30 to-emerald-500/30",
    border: "border-green-200/50",
    skills: [
      { name: "VS Code", icon: Code2, color: "text-blue-500" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-black dark:text-white" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },
];


const otherSkillsData = [

  {
    icon: Palette,
    title: "UI/UX Practices",
    description: "Applying layout, spacing, hierarchy, and accessibility principles."
  },
  {
    icon: Workflow,
    title: "State Management",
    description: "Ensuring UI data flows smoothly and updates consistently."
  },
  {
    icon: Smartphone,
    title: "Responsive Mobile First Design",
    description: "Creating layouts that adapt beautifully to all screen sizes."
  },
  {
    icon: Boxes,
    title: "Component Architecture",
    description: "Building modular, reusable, and maintainable UI components."
  },
  {
    icon: PlugZap,
    title: "API Handling",
    description: "Integrating APIs, processing responses, and reflecting the data accurately in the UI."
  },
  {
    title: "Security Best Practices",
    description: "Aware of secure coding practices, protecting APIs, handling tokens safely, preventing XSS/CSRF, and following OWASP guidelines.",
    icon: ShieldCheck, 
  },
  {
    icon: Bug,
    title: "Debugging",
    description: "Identifying and fixing issues using browser DevTools and systematic debugging methods."
  },
  {
    icon: Globe,
    title: "Cross-Browser Support",
    description: "Ensuring consistent UI behavior across modern browsers."
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Improving front-end performance with memoization, lazy loading, and image optimization."
  },
  // {
  //   icon: TestTube,
  //   title: "Basic Testing",
  //   description: "Ensuring the UI, core features, and edge cases behave as expected across different scenarios."
  // },
];



const softSkillsData = [
  { icon: MessageCircle, title: "Effective Communication" },
  { icon: Target, title: "Problem Solving" },
  { icon: Clock, title: "Time Management" },
  { icon: Heart, title: "Teamwork" },
  { icon: Brain, title: "Adaptability" },
  { icon: Search, title: "Attention to Detail" },
  { icon: Users, title: "Collaboration" },
  { icon: TrendingUp, title: "Continuous Learning" },

];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold font-dancing text-4xl md:text-5xl gradient-text mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground font-bold text-lg max-w-2xl mx-auto">
            Technologies I Work With
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.gradient} border ${category.border} backdrop-blur-sm transition-all duration-500 group-hover:shadow-xl h-full`}>
                
                {/* Animated overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative z-10">
                  {/* Category Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
                    {category.category}
                  </h3>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 +  categoryIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex flex-col items-center p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:bg-background/90"
                      >
                        <skill.icon className={`w-8 h-8 mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-sm font-medium text-foreground text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills - Feature Cards Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Development Practices
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSkillsData.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
           
                className="group p-4 rounded-xl bg-card border border-ring/40 dark:border-ring/20 hover:border-primary/40 dark:hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills - Minimal Grid Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Soft Skills
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {softSkillsData.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group"
              >
                <div className="flex flex-col items-center p-4 bg-card rounded-lg bg-background/60 border border-secondary/5 dark:border border-secondary/30 hover:border-secondary/50 dark:hover:border-secondary/70 hover:bg-card/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300 mb-2">
                    <skill.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center leading-tight">
                    {skill.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}