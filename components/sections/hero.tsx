"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Rocket } from "lucide-react";
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
      {/* Space-themed background elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Cosmic glow */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/5 to-transparent" />

        {/* Floating planets/asteroids */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-[10%] w-4 h-4 bg-linear-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[60%] left-[5%] w-3 h-3 bg-linear-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[30%] left-[15%] w-2 h-2 bg-white rounded-full star-glow"
        />

        {/* Nebula clouds */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-linear-to-r from-violet-500/20 via-purple-500/10 to-transparent rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-linear-to-r from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-[120px]"
        />

        {/* Star field parallax */}
        <div className="absolute inset-0 opacity-30">
          {[
            { top: 12, left: 8, duration: 2.5, delay: 0.2 },
            { top: 25, left: 45, duration: 3.2, delay: 0.8 },
            { top: 8, left: 78, duration: 4.1, delay: 1.5 },
            { top: 45, left: 22, duration: 2.8, delay: 0.5 },
            { top: 68, left: 65, duration: 3.5, delay: 1.2 },
            { top: 82, left: 12, duration: 4.3, delay: 0.3 },
            { top: 35, left: 88, duration: 2.2, delay: 1.8 },
            { top: 58, left: 35, duration: 3.8, delay: 0.7 },
            { top: 15, left: 55, duration: 4.5, delay: 1.1 },
            { top: 72, left: 82, duration: 2.9, delay: 0.4 },
            { top: 42, left: 5, duration: 3.3, delay: 1.6 },
            { top: 88, left: 48, duration: 4.0, delay: 0.9 },
            { top: 5, left: 32, duration: 2.6, delay: 1.3 },
            { top: 55, left: 92, duration: 3.7, delay: 0.1 },
            { top: 78, left: 28, duration: 4.2, delay: 1.9 },
            { top: 22, left: 72, duration: 2.4, delay: 0.6 },
            { top: 62, left: 15, duration: 3.1, delay: 1.4 },
            { top: 38, left: 58, duration: 4.4, delay: 1.0 },
            { top: 92, left: 75, duration: 2.7, delay: 1.7 },
            { top: 18, left: 95, duration: 3.6, delay: 0.0 },
          ].map((star, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <FadeContent delay={0.2} direction="up" blur>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-8 border border-violet-500/20 backdrop-blur-sm">
                <Rocket className="h-4 w-4" />
                <Typewriter
                  text="Welcome to my universe"
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
                  colors={[
                    "#a855f7",
                    "#8b5cf6",
                    "#6366f1",
                    "#3b82f6",
                    "#a855f7",
                  ]}
                  animationSpeed={4}
                >
                  <SplitText
                    text={siteConfig.name}
                    delay={0.6}
                    staggerDelay={0.05}
                  />
                </GradientText>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-violet-500 via-purple-500 to-blue-500 rounded-full"
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
              className="mt-10 flex gap-5 justify-center lg:justify-start"
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
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 hover:bg-violet-500/25 text-violet-300 hover:text-white border border-violet-500/40 hover:border-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/10 hover:shadow-violet-500/30"
                    whileHover={{ scale: 1.15, rotate: 5 }}
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
                {/* Cosmic glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-linear-to-r from-violet-500/40 via-purple-500/30 to-blue-500/40 rounded-full blur-2xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Orbiting ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 rounded-full border-2 border-dashed border-violet-500/30"
                >
                  {/* Orbiting satellite/star */}
                  <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-violet-400 rounded-full star-glow" />
                </motion.div>

                {/* Second orbit ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-14 rounded-full border border-dotted border-purple-500/20"
                >
                  <motion.div
                    className="absolute bottom-0 right-0 w-2 h-2 bg-blue-400 rounded-full"
                    style={{ boxShadow: "0 0 10px rgba(96, 165, 250, 0.8)" }}
                  />
                </motion.div>

                {/* Image container - styled like a planet */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-2xl planet-glow">
                  <Image
                    src="/profile.jpg"
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                  {/* Fallback gradient - cosmic themed */}
                  <div className="absolute inset-0 bg-linear-to-br from-violet-600/30 via-purple-500/20 to-blue-600/30 flex items-center justify-center">
                    <span className="text-7xl font-bold text-white/60">
                      {siteConfig.name.charAt(0)}
                    </span>
                  </div>
                  {/* Atmospheric glow overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-violet-900/20 via-transparent to-white/5" />
                </div>
              </div>
            </Floating>
          </FadeContent>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom center of hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <Magnetic strength={0.5}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-violet-300/60 hover:text-violet-300 transition-colors cursor-pointer"
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-xs font-medium tracking-widest uppercase mb-3">
              Scroll
            </span>
            <div className="w-7 h-11 border-2 border-violet-500/50 hover:border-violet-400 rounded-full flex justify-center pt-2 transition-colors bg-violet-500/5">
              <motion.div
                animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-violet-400 rounded-full shadow-lg shadow-violet-500/50"
              />
            </div>
          </motion.div>
        </Magnetic>
      </motion.div>
    </section>
  );
}
