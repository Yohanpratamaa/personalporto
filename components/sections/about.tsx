"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Rocket,
  MapPin,
  GraduationCap,
  Clock,
  Sparkles,
  Star,
  Zap,
  Heart,
  Coffee,
  Gamepad2,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import {
  FadeContent,
  TiltCard,
  SpotlightCard,
  Counter,
  Magnetic,
  Floating,
  Reveal,
} from "@/components/ui/animations";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 15, suffix: "+", label: "Projects Built", icon: Rocket },
  { value: 10, suffix: "+", label: "Technologies", icon: Zap },
  { value: 100, suffix: "%", label: "Dedication", icon: Heart },
];

const hobbies = [
  { icon: Code2, label: "Coding" },
  { icon: Coffee, label: "Coffee" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Brain, label: "AI/ML" },
];

export function About() {
  return (
    <SectionWrapper id="about" className="relative overflow-hidden">
      {/* Space nebula background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-violet-900/10 via-transparent to-blue-900/10" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Floating stars */}
      {[
        { top: "10%", left: "5%", size: 2, delay: 0 },
        { top: "20%", right: "10%", size: 3, delay: 1 },
        { top: "60%", left: "8%", size: 2, delay: 2 },
        { top: "80%", right: "15%", size: 2, delay: 1.5 },
        { top: "40%", right: "5%", size: 1.5, delay: 0.5 },
      ].map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            width: `${star.size * 4}px`,
            height: `${star.size * 4}px`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: star.delay }}
        />
      ))}

      <div className="relative">
        <SectionHeader
          title="About Me"
          subtitle="Exploring the universe of technology, one project at a time"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Profile Image & Stats */}
          <div className="lg:col-span-5 space-y-8">
            {/* Profile Image with Space Theme */}
            <FadeContent direction="left" blur>
              <div className="relative flex justify-center">
                <Floating duration={5} distance={10}>
                  <div className="relative">
                    {/* Outer glow ring */}
                    <motion.div
                      className="absolute -inset-4 rounded-full bg-linear-to-r from-violet-500/40 via-purple-500/30 to-blue-500/40 blur-xl"
                      animate={{
                        opacity: [0.4, 0.7, 0.4],
                        scale: [0.95, 1.05, 0.95],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    {/* Orbiting ring 1 */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-8 rounded-full border-2 border-dashed border-violet-500/30"
                    >
                      <div className="absolute top-1/2 -left-2 w-4 h-4 bg-violet-400 rounded-full shadow-lg shadow-violet-500/50" />
                    </motion.div>

                    {/* Orbiting ring 2 */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-14 rounded-full border border-dotted border-purple-500/20"
                    >
                      <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50" />
                    </motion.div>

                    {/* Main image container */}
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-violet-500/40 shadow-2xl shadow-violet-500/20">
                      <Image
                        src="/profile.jpg"
                        alt={siteConfig.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 256px, 288px"
                      />
                      {/* Fallback gradient */}
                      <div className="absolute inset-0 bg-linear-to-br from-violet-600/40 via-purple-500/30 to-blue-600/40 flex items-center justify-center">
                        <span className="text-6xl font-bold text-white/70">
                          {siteConfig.name.charAt(0)}
                        </span>
                      </div>
                      {/* Overlay glow */}
                      <div className="absolute inset-0 bg-linear-to-t from-violet-900/30 via-transparent to-white/5" />
                    </div>

                    {/* Floating badge */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                    >
                      <Badge className="bg-linear-to-r from-violet-600 to-purple-600 text-white border-0 px-4 py-1.5 shadow-lg shadow-violet-500/30">
                        <Sparkles className="w-3 h-3 mr-1.5" />
                        Open to Work
                      </Badge>
                    </motion.div>
                  </div>
                </Floating>
              </div>
            </FadeContent>

            {/* Stats Grid */}
            <FadeContent delay={0.3} direction="up">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Magnetic key={stat.label} strength={0.1}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative p-4 rounded-2xl bg-[#0a0a1a]/60 border border-violet-500/20 backdrop-blur-sm group cursor-default overflow-hidden"
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-violet-500/20 group-hover:bg-violet-500/30 transition-colors">
                          <stat.icon className="w-4 h-4 text-violet-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">
                            <Counter
                              value={stat.value}
                              delay={0.5 + index * 0.1}
                            />
                            <span className="text-violet-400">
                              {stat.suffix}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400">{stat.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Magnetic>
                ))}
              </div>
            </FadeContent>
          </div>

          {/* Right Column - Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Bio Card */}
            <FadeContent direction="right" blur>
              <TiltCard maxTilt={5} scale={1.01}>
                <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.15)">
                  <Card className="border border-violet-500/20 bg-[#0a0a1a]/60 backdrop-blur-sm overflow-hidden">
                    {/* Gradient top border */}
                    <motion.div
                      className="h-1 bg-linear-to-r from-violet-500 via-purple-500 to-blue-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />

                    <CardContent className="p-6 sm:p-8">
                      <Reveal>
                        <div className="flex items-center gap-3 mb-6">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                            }}
                            className="text-4xl"
                          >
                            👋
                          </motion.div>
                          <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                            Hello, I&apos;m {siteConfig.name}!
                          </h3>
                        </div>
                      </Reveal>

                      <div className="space-y-4 text-gray-300 leading-relaxed">
                        <FadeContent delay={0.2} direction="up">
                          <p>
                            I&apos;m a passionate{" "}
                            <span className="text-violet-400 font-semibold">
                              Software Engineer
                            </span>{" "}
                            currently working at ITG.ID, where I build
                            innovative digital solutions. My journey in tech
                            started with curiosity and has evolved into
                            expertise in full-stack development and AI
                            integration.
                          </p>
                        </FadeContent>

                        <FadeContent delay={0.3} direction="up">
                          <p>
                            Specializing in{" "}
                            <span className="text-violet-400 font-semibold">
                              Full-Stack Web Development
                            </span>
                            , with deep expertise in{" "}
                            <span className="text-purple-400 font-semibold">
                              AI Chatbot Development
                            </span>{" "}
                            using LangChain & RAG, and{" "}
                            <span className="text-blue-400 font-semibold">
                              workflow automation
                            </span>{" "}
                            with n8n. I transform complex problems into elegant
                            digital solutions.
                          </p>
                        </FadeContent>

                        <FadeContent delay={0.4} direction="up">
                          <p className="text-gray-400">
                            Previously interned at Garudacyber, building event
                            ticketing systems. Now crafting AI-powered solutions
                            and company systems at ITG.ID. Always eager to learn
                            and explore new technologies! 🚀
                          </p>
                        </FadeContent>
                      </div>

                      {/* Quick Info */}
                      <FadeContent delay={0.5} direction="up">
                        <div className="mt-6 pt-6 border-t border-violet-500/20 grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-violet-500/20">
                              <MapPin className="w-4 h-4 text-violet-400" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Location</p>
                              <p className="text-sm font-medium text-white">
                                Bandung, Indonesia 🇮🇩
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/20">
                              <GraduationCap className="w-4 h-4 text-purple-400" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Education</p>
                              <p className="text-sm font-medium text-white">
                                Computer Science
                              </p>
                            </div>
                          </div>
                        </div>
                      </FadeContent>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </TiltCard>
            </FadeContent>

            {/* Hobbies */}
            <FadeContent delay={0.5} direction="up">
              <div className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-violet-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-purple-400" />
                  <h4 className="font-semibold text-white">
                    When I&apos;m Not Coding
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {hobbies.map((hobby, index) => (
                    <Magnetic key={hobby.label} strength={0.2}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 cursor-default"
                      >
                        <hobby.icon className="w-4 h-4 text-violet-400" />
                        <span className="text-sm text-gray-300">
                          {hobby.label}
                        </span>
                      </motion.div>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
