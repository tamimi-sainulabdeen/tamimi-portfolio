"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "./theme/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio-data";
import { Handshake } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();
  
  const isHomePage = pathname === "/";
  
  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Keep this empty dependency array
  
  // Separate useEffect for scroll prevention
  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]); // This has mobileMenuOpen as dependency
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  // Reduced navigation items for better responsive design
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href:"#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3"
        style={{
          backdropFilter: backdropBlur,
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-background" 
          style={{
            opacity: useTransform(scrollY, [0, 100], [0, 0.9]),
          }}
        />
        
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          {/* Logo */}
          <motion.button
            onClick={handleHomeClick}
            className="flex-shrink-0 text-xl font-bold tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text text-2xl font-dancing">{personalInfo.logo}</span>
          </motion.button>

          {/* Desktop Navigation - Improved responsive gap */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors relative group text-sm font-medium whitespace-nowrap px-2 py-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* Right side buttons - Improved spacing */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Let's Connect Button - Hidden on smaller screens */}
            <motion.button
              onClick={() => handleNavClick("#contact")}
              className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:bg-primary/80 transition-colors text-sm whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect <Handshake className="w-4 h-4" />
            </motion.button>
            
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Fixed styling and scroll prevention */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ 
          display: mobileMenuOpen ? 'block' : 'none',
        }}
      >
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-lg border-l border-border overflow-y-auto"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-start min-h-full gap-6 p-8 pt-32">
            {/* Mobile navigation */}
            <nav className="flex flex-col items-center gap-4 w-full">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-lg text-foreground hover:text-primary transition-colors py-4 w-full text-center border-b border-border/50 last:border-b-0 font-medium"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    x: mobileMenuOpen ? 0 : 50,
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Contact CTA in mobile menu */}
            <motion.button
              onClick={() => handleNavClick("#contact")}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors mt-8 text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                y: mobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: 0.5 }}
            >             
              Let's Connect <Handshake className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}