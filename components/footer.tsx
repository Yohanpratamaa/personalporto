"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: siteConfig.links.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: siteConfig.links.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-violet-500/10 bg-[#0a0a1a]/80 backdrop-blur-sm">
      {/* Space-themed background decoration */}
      <div className="absolute inset-0 bg-linear-to-t from-violet-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-space-stars opacity-20 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Brand and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block text-2xl font-bold bg-linear-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"
            >
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2.5 sm:gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-500/10 text-muted-foreground hover:bg-violet-500/20 hover:text-violet-400 transition-all duration-300 border border-violet-500/20 hover:border-violet-500/40"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-violet-500/30 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-400 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-linear-to-r from-transparent via-border to-transparent" />

        {/* Built with */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 inline-block mx-1 animate-pulse" />
            <span>using</span>
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Next.js
            </Link>
            <span>•</span>
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              TailwindCSS
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
