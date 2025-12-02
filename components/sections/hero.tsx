"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useRef } from "react";
import {
  BlurText,
  SplitText,
  Magnetic,
  Floating,
  GradientText,
  FadeContent,
  Typewriter,
} from "@/components/ui/animations";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/5" />

        {/* Floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-linear-to-r from-primary/20 to-purple-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-[120px]"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <FadeContent delay={0.2} direction="up" blur>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
                <Sparkles className="h-4 w-4" />
                <Typewriter
                  text="Welcome to my portfolio"
                  speed={40}
                  delay={0.5}
                />
              </span>
            </FadeContent>

            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <BlurText text="Hi, I'm" className="mb-2" delay={0.3} />
              <div className="relative inline-block">
                <GradientText
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                  colors={["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"]}
                  animationSpeed={4}
                >
                  <SplitText
                    text={siteConfig.name}
                    delay={0.6}
                    staggerDelay={0.05}
                  />
                </GradientText>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-primary via-blue-500 to-purple-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>

            <FadeContent delay={0.8} direction="up" className="mt-6">
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                {siteConfig.title}
              </p>
            </FadeContent>

            <FadeContent delay={1} direction="up" className="mt-6">
              <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {siteConfig.description}
              </p>
            </FadeContent>

            {/* CTA Buttons */}
            <FadeContent
              delay={1.2}
              direction="up"
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Magnetic strength={0.2}>
                <Button
                  size="lg"
                  onClick={handleScrollToProjects}
                  className="group relative overflow-hidden px-8 py-6 text-base"
                >
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-primary to-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="px-8 py-6 text-base border-2 hover:bg-primary/5 transition-all duration-300"
                >
                  <a href={siteConfig.resume} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </Magnetic>
            </FadeContent>

            {/* Social Links */}
            <FadeContent
              delay={1.4}
              direction="up"
              className="mt-10 flex gap-4 justify-center lg:justify-start"
            >
              {[
                {
                  icon: Github,
                  href: siteConfig.links.github,
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: siteConfig.links.linkedin,
                  label: "LinkedIn",
                },
              ].map((social) => (
                <Magnetic key={social.label} strength={0.4}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                </Magnetic>
              ))}
            </FadeContent>
          </div>

          {/* Profile Image */}
          <FadeContent delay={0.5} direction="right" className="shrink-0">
            <Floating duration={4} distance={15}>
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-linear-to-r from-primary/30 via-blue-500/30 to-purple-500/30 rounded-full blur-2xl"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Decorative rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-6 rounded-full border border-dashed border-primary/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-12 rounded-full border border-dotted border-primary/10"
                />

                {/* Image container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-1 ring-primary/10">
                  <Image
                    src="/profile.jpg"
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                  {/* Fallback gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-7xl font-bold text-primary/40">
                      {siteConfig.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            </Floating>
          </FadeContent>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <Magnetic strength={0.5}>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-pointer"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="text-xs font-medium tracking-widest uppercase mb-3">
                Scroll
              </span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 bg-current rounded-full"
                />
              </div>
            </motion.div>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
