import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { personalInfo } from "@/data/portfolio-data";
import { SiBehance, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("https://formspree.io/f/movrqlwk", {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ];

  const socialLinks = [
    { 
      icon: SiGmail, 
      href: `mailto:${personalInfo.email}`, 
      label: "Email" 
    },
    { 
      icon: SiGithub, 
      href: personalInfo.github || "https://github.com", 
      label: "GitHub" 
    },
    { 
      icon: SiLinkedin, 
      href: personalInfo.linkedin || "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: SiBehance, 
      href: personalInfo.behance || "https://behance.com", 
      label: "Behance"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-card hover:bg-muted rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg"
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
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-14 rounded-xl border-ring/40 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 transition-colors"
                  required
                  disabled={isSubmitting}
                />
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
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-14 rounded-xl border-ring/40 focus:border-primary focus:ring-2 focus:ring-primary/20 px-4 transition-colors"
                  required
                  disabled={isSubmitting}
                />
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
                  onBlur={() => setFocusedField(null)}
                  className="w-full min-h-[150px] rounded-xl border-ring/40 focus:border-primary focus:ring-2 focus:ring-primary/20 p-4 resize-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground flex items-center justify-center gap-2 shadow-lg font-semibold hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={
                  !isSubmitting
                    ? {
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(45, 212, 191, 0.3)",
                      }
                    : {}
                }
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
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
              className="relative w-[80%] mx-auto border border-4 border-ring rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/tamimi_3.webp"
                alt="Tamimi Sainulabdeen"
                width={600}
                height={400}
                className="w-full aspect-[4/4] object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6/DMclB18bGYbq2tMUg=="
              />
              <div className="absolute inset-0" />
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-all group shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
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
              <h4 className="text-foreground text-xl font-semibold mb-4">Follow me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card hover:bg-muted border border-border hover:border-primary/50 flex items-center justify-center group transition-all shadow-sm hover:shadow-md"
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
                    {social.label === "GitHub" && (
                      <SiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                    )}
                    {social.label === "LinkedIn" && (
                      <SiLinkedin className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    )}
                    {social.label === "Behance" && (
                      <SiBehance className="w-6 h-6 text-blue-800 group-hover:scale-110 transition-transform" />
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