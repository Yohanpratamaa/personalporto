"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Brain,
  Sparkles,
  MapPin,
  GraduationCap,
  Clock,
  Target,
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
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Passionate about learning new technologies and solving complex problems.",
    gradient: "from-green-500 to-emerald-500",
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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-muted/50 via-background to-background" />

      <div className="relative">
        <SectionHeader
          title="About Me"
          subtitle="Get to know more about who I am and what drives me"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <FadeContent direction="left" blur>
            <SpotlightCard>
              <Card className="border border-border/50 shadow-xl bg-background/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                  <Reveal delay={0.2}>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Hello! I&apos;m {siteConfig.name}
                    </h3>
                  </Reveal>
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <FadeContent delay={0.3} direction="up">
                      <p>
                        I&apos;m a passionate{" "}
                        <span className="text-primary font-semibold">
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
                        <span className="text-primary font-semibold">
                          full-stack web development
                        </span>
                        , exploring the realms of{" "}
                        <span className="text-primary font-semibold">
                          artificial intelligence
                        </span>
                        , and understanding{" "}
                        <span className="text-primary font-semibold">
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
                  <div className="mt-8 pt-8 border-t border-border/50 grid grid-cols-2 gap-6">
                    {quickFacts.map((fact, index) => (
                      <FadeContent
                        key={fact.label}
                        delay={0.6 + index * 0.1}
                        direction="up"
                      >
                        <Magnetic strength={0.15}>
                          <div className="flex items-center gap-3 group cursor-default">
                            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                              <fact.icon className="h-4 w-4 text-primary" />
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
                <SpotlightCard>
                  <Card className="h-full border border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${interest.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />

                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-linear-to-br ${interest.gradient} flex items-center justify-center mb-5 shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <interest.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
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
