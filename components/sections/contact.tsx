"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  Loader2,
  ArrowUpRight,
  Sparkles,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import {
  FadeContent,
  TiltCard,
  SpotlightCard,
  Magnetic,
  ShimmerButton,
  Floating,
  Reveal,
} from "@/components/ui/animations";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.links.linkedin,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my GitHub",
    href: siteConfig.links.github,
    gradient: "from-gray-500 to-slate-600",
    bgGradient: "from-gray-500/20 to-slate-600/20",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: siteConfig.links.whatsapp,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-linear-to-b from-muted/50 via-background to-background" />

      {/* Floating gradient blobs */}
      <Floating
        duration={6}
        distance={20}
        className="absolute top-0 left-1/4 opacity-30"
      >
        <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </Floating>
      <Floating
        duration={8}
        distance={25}
        delay={2}
        className="absolute bottom-0 right-1/4 opacity-30"
      >
        <div className="w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </Floating>

      {/* Floating particles with enhanced animation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            top: `${15 + i * 12}%`,
            left: `${8 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Feel free to reach out!"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <FadeContent direction="left" blur className="space-y-8">
            <div className="space-y-4">
              <Reveal delay={0.1}>
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    Let&apos;s Connect
                  </span>
                </motion.div>
              </Reveal>

              <Reveal delay={0.2}>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
                  Ready to Start a Project?
                </h3>
              </Reveal>

              <FadeContent delay={0.3} direction="up">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision. Feel free
                  to reach out through any of the channels below.
                </p>
              </FadeContent>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactLinks.map((link, index) => (
                <FadeContent
                  key={link.label}
                  delay={0.2 + index * 0.1}
                  direction="up"
                >
                  <Magnetic strength={0.15}>
                    <TiltCard maxTilt={8} scale={1.02}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <SpotlightCard>
                          <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                            {/* Gradient overlay on hover */}
                            <div
                              className={`absolute inset-0 bg-linear-to-br ${link.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />

                            <CardContent className="relative p-5 flex items-center gap-4">
                              <motion.div
                                className={`relative p-3 rounded-xl bg-linear-to-br ${link.gradient} shadow-lg`}
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <link.icon className="h-5 w-5 text-white" />
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                                  {link.label}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">
                                  {link.value}
                                </p>
                              </div>
                              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </CardContent>
                          </Card>
                        </SpotlightCard>
                      </a>
                    </TiltCard>
                  </Magnetic>
                </FadeContent>
              ))}
            </div>

            {/* Decorative element */}
            <FadeContent
              delay={0.6}
              direction="up"
              className="hidden lg:block pt-4"
            >
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
                <span className="text-sm">or send a message</span>
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
              </div>
            </FadeContent>
          </FadeContent>

          {/* Contact Form */}
          <FadeContent direction="right" blur>
            <TiltCard maxTilt={5} scale={1.01}>
              <SpotlightCard>
                <Card className="border-border/50 bg-background/80 backdrop-blur-sm shadow-xl overflow-hidden">
                  {/* Card header decoration with animated gradient */}
                  <motion.div
                    className="h-1.5 bg-linear-to-r from-primary via-primary/50 to-secondary"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />

                  <CardContent className="p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <FadeContent
                        delay={0.3}
                        direction="up"
                        className="space-y-2"
                      >
                        <label
                          htmlFor="name"
                          className="text-sm font-medium flex items-center gap-2"
                        >
                          <User className="h-4 w-4 text-muted-foreground" />
                          Name
                        </label>
                        <motion.div
                          className="relative"
                          whileFocus={{ scale: 1.01 }}
                        >
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            disabled={isSubmitting}
                            className={`h-12 bg-background/50 border-border/50 transition-all duration-300 ${
                              focusedField === "name"
                                ? "border-primary ring-2 ring-primary/20 shadow-lg shadow-primary/10"
                                : ""
                            }`}
                          />
                        </motion.div>
                      </FadeContent>

                      {/* Email Field */}
                      <FadeContent
                        delay={0.4}
                        direction="up"
                        className="space-y-2"
                      >
                        <label
                          htmlFor="email"
                          className="text-sm font-medium flex items-center gap-2"
                        >
                          <AtSign className="h-4 w-4 text-muted-foreground" />
                          Email
                        </label>
                        <motion.div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            disabled={isSubmitting}
                            className={`h-12 bg-background/50 border-border/50 transition-all duration-300 ${
                              focusedField === "email"
                                ? "border-primary ring-2 ring-primary/20 shadow-lg shadow-primary/10"
                                : ""
                            }`}
                          />
                        </motion.div>
                      </FadeContent>

                      {/* Message Field */}
                      <FadeContent
                        delay={0.5}
                        direction="up"
                        className="space-y-2"
                      >
                        <label
                          htmlFor="message"
                          className="text-sm font-medium flex items-center gap-2"
                        >
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          disabled={isSubmitting}
                          className={`bg-background/50 border-border/50 resize-none transition-all duration-300 ${
                            focusedField === "message"
                              ? "border-primary ring-2 ring-primary/20 shadow-lg shadow-primary/10"
                              : ""
                          }`}
                        />
                      </FadeContent>

                      {/* Submit Button with shimmer effect */}
                      <FadeContent delay={0.6} direction="up">
                        <Magnetic strength={0.1}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="submit"
                              size="lg"
                              className="w-full h-12 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 transition-all duration-300 relative overflow-hidden group"
                              disabled={isSubmitting}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatDelay: 3,
                                  ease: "linear",
                                }}
                              />

                              {isSubmitting ? (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="flex items-center gap-2 relative z-10"
                                >
                                  <Loader2 className="h-5 w-5 animate-spin" />
                                  <span>Sending...</span>
                                </motion.div>
                              ) : (
                                <motion.div
                                  className="flex items-center gap-2 relative z-10"
                                  whileHover={{ x: 5 }}
                                >
                                  <Send className="h-5 w-5" />
                                  <span>Send Message</span>
                                </motion.div>
                              )}
                            </Button>
                          </motion.div>
                        </Magnetic>
                      </FadeContent>

                      {/* Status Messages */}
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="flex items-center justify-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                        >
                          <Sparkles className="h-5 w-5 text-green-500" />
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            Message sent successfully! I&apos;ll get back to you
                            soon.
                          </p>
                        </motion.div>
                      )}

                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="flex items-center justify-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                        >
                          <p className="text-sm font-medium text-red-600 dark:text-red-400">
                            Failed to send message. Please try again or use
                            another contact method.
                          </p>
                        </motion.div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </TiltCard>
          </FadeContent>
        </div>
      </div>
    </SectionWrapper>
  );
}
