"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Brain,
  Rocket,
  MapPin,
  GraduationCap,
  Clock,
  Target,
  Orbit,
  Satellite,
  Star,
  Sparkles,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import {
  FadeContent,
  TiltCard,
  SpotlightCard,
  Counter,
  StaggerChildren,
  Reveal,
  Magnetic,
} from "@/components/ui/animations";

const interests = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building modern, responsive web applications with cutting-edge technologies.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Exploring machine learning and AI to create intelligent solutions.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Leveraging cloud platforms for scalable and reliable applications.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Passionate about learning new technologies and solving complex problems.",
    gradient: "from-indigo-500 to-violet-500",
  },
];

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Indonesia" },
  { icon: GraduationCap, label: "Education", value: "System Information" },
  { icon: Clock, label: "Experience", value: 2, suffix: "+ Years" },
  { icon: Target, label: "Focus", value: "Web & AI" },
];

export function About() {
  return (
    <SectionWrapper id="about" className="relative overflow-hidden">
      {/* Space-themed background */}
      <div className="absolute inset-0 bg-linear-to-b from-violet-900/5 via-transparent to-blue-900/5" />

      {/* Floating space elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-[10%] w-3 h-3 bg-violet-400 rounded-full star-glow opacity-60"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-40 left-[5%] w-2 h-2 bg-blue-400 rounded-full star-glow opacity-50"
      />

      <div className="relative">
        <SectionHeader
          title="About Me"
          subtitle="Get to know more about who I am and what drives me"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <FadeContent direction="left" blur>
            <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.15)">
              <Card className="border border-violet-500/20 shadow-xl bg-[#0a0a1a]/60 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                  <Reveal delay={0.2}>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-linear-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                      Hello! I&apos;m {siteConfig.name}
                    </h3>
                  </Reveal>
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <FadeContent delay={0.3} direction="up">
                      <p>
                        I&apos;m a passionate{" "}
                        <span className="text-violet-400 font-semibold">
                          System Information student
                        </span>{" "}
                        with a deep interest in technology and innovation. My
                        journey in tech started with curiosity about how digital
                        solutions can transform the way we live and work.
                      </p>
                    </FadeContent>
                    <FadeContent delay={0.4} direction="up">
                      <p>
                        Currently, I&apos;m focused on{" "}
                        <span className="text-violet-400 font-semibold">
                          full-stack web development
                        </span>
                        , exploring the realms of{" "}
                        <span className="text-purple-400 font-semibold">
                          artificial intelligence
                        </span>
                        , and understanding{" "}
                        <span className="text-blue-400 font-semibold">
                          cloud infrastructure
                        </span>
                        . I believe in continuous learning and applying
                        knowledge to create meaningful projects.
                      </p>
                    </FadeContent>
                    <FadeContent delay={0.5} direction="up">
                      <p>
                        When I&apos;m not coding, you can find me participating
                        in hackathons, contributing to open-source projects, or
                        exploring the latest tech trends.
                      </p>
                    </FadeContent>
                  </div>

                  {/* Quick Facts with Counter Animation */}
                  <div className="mt-8 pt-8 border-t border-violet-500/20 grid grid-cols-2 gap-6">
                    {quickFacts.map((fact, index) => (
                      <FadeContent
                        key={fact.label}
                        delay={0.6 + index * 0.1}
                        direction="up"
                      >
                        <Magnetic strength={0.15}>
                          <div className="flex items-center gap-3 group cursor-default">
                            <div className="p-2 rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20 group-hover:scale-110 transition-all duration-300">
                              <fact.icon className="h-4 w-4 text-violet-400" />
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground block">
                                {fact.label}
                              </span>
                              <p className="font-semibold text-sm">
                                {typeof fact.value === "number" ? (
                                  <>
                                    <Counter
                                      value={fact.value}
                                      delay={0.8 + index * 0.1}
                                    />
                                    {fact.suffix}
                                  </>
                                ) : (
                                  fact.value
                                )}
                              </p>
                            </div>
                          </div>
                        </Magnetic>
                      </FadeContent>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SpotlightCard>
          </FadeContent>

          {/* Interests Grid */}
          <StaggerChildren
            className="grid sm:grid-cols-2 gap-5"
            staggerDelay={0.15}
          >
            {interests.map((interest) => (
              <TiltCard key={interest.title} maxTilt={10} scale={1.03}>
                <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.12)">
                  <Card className="h-full border border-violet-500/20 bg-[#0a0a1a]/60 backdrop-blur-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${interest.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-linear-to-br ${interest.gradient} flex items-center justify-center mb-5 shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <interest.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-lg mb-2 group-hover:text-violet-400 transition-colors">
                        {interest.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {interest.description}
                      </p>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </TiltCard>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </SectionWrapper>
  );
}
