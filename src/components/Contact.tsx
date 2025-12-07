"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { personalInfo } from "@/data/portfolio-data";
import { SiBehance, SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if user is on mobile device
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };
    checkMobile();
    
    // Also check on resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const maxMessageLength = 500;
  const messageLength = formData.message.length;
  const isMessageTooLong = messageLength > maxMessageLength;

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let isValid = true;

    // Name validation
    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    // Message max length validation
    if (isMessageTooLong) {
      newErrors.message = `Message must be less than ${maxMessageLength} characters`;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("https://formspree.io/f/mwpjyenk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name} - Portfolio Contact`,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          id: toastId,
          duration: 5000,
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Sorry, there was an error sending your message. Please try again or email me directly.", {
        id: toastId,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === "message" && value.length > maxMessageLength) {
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleBlur = (field: string) => {
    setFocusedField(null);
    
    if (formData[field as keyof typeof formData].trim()) {
      const newErrors = { ...errors };
      
      switch (field) {
        case "name":
          if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters long";
          }
          break;
        case "email":
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
          }
          break;
        case "message":
          if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
          }
          if (formData.message.length > maxMessageLength) {
            newErrors.message = `Message must be less than ${maxMessageLength} characters`;
          }
          break;
      }
      
      setErrors(newErrors);
    }
  };

  const handlePhoneClick = (e: React.MouseEvent, phoneNumber: string, country: string) => {
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText(phoneNumber).then(() => {
        toast.success(`${country} phone number copied to clipboard!`);
      }).catch(() => {
        toast.info(`${country} Phone: ${phoneNumber}`);
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      onClick: (e: React.MouseEvent) => {
        if (!isMobile) {
          e.preventDefault();
          navigator.clipboard.writeText(personalInfo.email).then(() => {
            toast.success("Email copied to clipboard!");
          }).catch(() => {
            window.location.href = `mailto:${personalInfo.email}`;
          });
        }
      },
    },
    {
      icon: Phone,
      label: "UAE Phone",
      value: personalInfo.uaePhone || "+971 XX XXX XXXX", // Add to your portfolio-data
      href: `tel:${personalInfo.uaePhone || "+971XXXXXXXXXX"}`,
      onClick: (e: React.MouseEvent) => handlePhoneClick(e, personalInfo.uaePhone || "+971 XX XXX XXXX", "UAE"),
    },
    {
      icon: Phone,
      label: "Indian Phone",
      value: personalInfo.indiaPhone || "+91 XX XXX XXXX", // Add to your portfolio-data
      href: `tel:${personalInfo.indiaPhone || "+91XXXXXXXXXX"}`,
      onClick: (e: React.MouseEvent) => handlePhoneClick(e, personalInfo.indiaPhone || "+91 XX XXX XXXX", "Indian"),
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}`,
    },
  ];

  const socialLinks = [
    { 
      icon: SiGmail, 
      href: `mailto:${personalInfo.email}`, 
      label: "Email",
      onClick: (e: React.MouseEvent) => {
        if (!isMobile) {
          e.preventDefault();
          navigator.clipboard.writeText(personalInfo.email).then(() => {
            toast.success("Email copied to clipboard!");
          });
        }
      },
    },
    { 
      icon: SiWhatsapp, 
      href: `https://wa.me/${personalInfo.indiaPhone?.replace(/\D/g, '') || "91XXXXXXXXXX"}`, 
      label: "WhatsApp",
    },
    { 
      icon: SiGithub, 
      href: personalInfo.github || "https://github.com", 
      label: "GitHub",
    },
    { 
      icon: SiLinkedin, 
      href: personalInfo.linkedin || "https://linkedin.com", 
      label: "LinkedIn",
    },
  ];

  const isExternalLink = (href: string) => {
    return href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel');
  };

  return (
    <section id="contact" className="px-6 py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-dancing bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="flex items-center gap-2 mx-auto max-w-fit text-sm md:text-md text-foreground/90 font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Actively Seeking Opportunities <span className="ml-4 h-2 w-2 rounded-full bg-primary animate-pulse"></span>Open to Relocation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 items-start">
          {/* Left Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-card hover:bg-muted rounded-2xl p-8 mr-4 border border-border shadow-sm hover:shadow-lg"
          >
            <h3 className="text-primary text-3xl font-bold mb-6">Drop Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-4 pointer-events-none z-10 transition-all duration-200 ${
                    focusedField === "name" || formData.name
                      ? "-top-2 text-xs text-primary bg-muted px-1"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => handleBlur("name")}
                  className={`w-full h-14 rounded-xl border-ring/40 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 transition-colors ${
                    errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}
                  required
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-1 ml-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-4 pointer-events-none z-10 transition-all duration-200 ${
                    focusedField === "email" || formData.email
                      ? "-top-2 text-xs text-primary bg-muted px-1"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => handleBlur("email")}
                  className={`w-full h-14 rounded-xl border-ring/40 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 transition-colors ${
                    errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}
                  required
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-1 ml-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 pointer-events-none z-10 transition-all duration-200 ${
                    focusedField === "message" || formData.message
                      ? "-top-2 text-xs text-primary bg-muted px-1"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => handleBlur("message")}
                  className={`w-full min-h-[150px] rounded-xl border-ring/40 focus:border-primary focus:ring-2 focus:ring-primary/20 p-4 resize-none transition-colors ${
                    errors.message || isMessageTooLong ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                  }`}
                  required
                  disabled={isSubmitting}
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.message ? (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs ml-1"
                    >
                      {errors.message}
                    </motion.p>
                  ) : (
                    <div /> 
                  )}
                  <div className={`text-xs ${
                    isMessageTooLong ? 'text-red-500 font-semibold' : 
                    messageLength > maxMessageLength * 0.8 ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    {messageLength}/{maxMessageLength}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isMessageTooLong}
                className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground flex items-center justify-center gap-2 shadow-lg font-semibold hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={
                  !isSubmitting && !isMessageTooLong
                    ? {
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(45, 212, 191, 0.3)",
                      }
                    : {}
                }
                whileTap={!isSubmitting && !isMessageTooLong ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info & Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Professional Portrait */}
            <motion.div
               className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto border border-2 border-ring rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/tamimi_3.webp"
                alt="Tamimi Sainulabdeen"
                width={400}
                height={400}
                className="w-full aspect-[4/4] object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRT8AlrJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6/DMclB18bGYbq2tMUg=="
              />
              <div className="absolute inset-0" />
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  onClick={info.onClick}
                  target={isExternalLink(info.href) ? "_blank" : undefined}
                  rel={isExternalLink(info.href) ? "noopener noreferrer" : undefined}
                  className="flex items-center xl:gap-4 p-4 mx-auto rounded-xl bg-card border border-border hover:border-primary transition-all group shadow-sm cursor-pointer"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-12 h-12 mr-2 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="border-t border-border pt-6">
              <h4 className="text-foreground text-xl font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3">
               {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onClick={social.onClick}
                  target={isExternalLink(social.href) ? "_blank" : undefined}
                  rel={isExternalLink(social.href) ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-xl bg-card hover:bg-muted border border-border hover:border-primary/50 flex items-center justify-center group transition-all shadow-sm hover:shadow-md cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.label === "Email" && (
                    <SiGmail className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                  )}
                  {social.label === "WhatsApp" && (
                    <SiWhatsapp className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                  )}
                  {social.label === "GitHub" && (
                    <SiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                  )}
                  {social.label === "LinkedIn" && (
                    <SiLinkedin className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  )}
                </motion.a>
              ))}
              </div>
            </div>
           </motion.div>
          </div>
        </div>
      </section>
  );
}