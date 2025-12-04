"use client";

import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { SiBehance, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: SiGmail,
    },
    {
      name: "GitHub",
      href: personalInfo.github,
      icon: SiGithub,
    },
    {
      name: "LinkedIn",
      href: personalInfo.linkedin,
      icon: SiLinkedin,
    },
    // {
    //   name: "Behance",
    //   href: `mailto:${personalInfo.behance}`,
    //   icon: SiBehance,
    // },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Section - Name & Title */}
          <div className="text-center md:text-left">
            <div className="gradient-text text-2xl font-dancing mb-2">
              {personalInfo.logo}
            </div>
            <p className="text-muted-foreground text-sm">
              {personalInfo.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                aria-label={link.name}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section - Copyright */}
        <motion.div
          className="text-center text-sm text-muted-foreground border-t border-border pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-1">
            Designed & developed with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}