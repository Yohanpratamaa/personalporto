"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/config/site";
import { Code2, Server, Brain, Wrench } from "lucide-react";
import {
  FadeContent,
  TiltCard,
  SpotlightCard,
  StaggerChildren,
  Floating,
  Magnetic,
} from "@/components/ui/animations";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: skills.frontend,
    gradient: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-400",
    badgeColor:
      "bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 border-violet-500/30",
  },
  {
    title: "Backend",
    icon: Server,
    skills: skills.backend,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    badgeColor:
      "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: skills.aiml,
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
    badgeColor:
      "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: skills.tools,
    gradient: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-400",
    badgeColor:
      "bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="relative">
      {/* Space-themed background */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-900/5 via-transparent to-blue-900/5" />

      {/* Floating space elements */}
      <Floating
        duration={6}
        distance={20}
        className="absolute top-20 left-10 opacity-30"
      >
        <div className="w-20 h-20 rounded-full bg-linear-to-br from-violet-500 to-purple-500 blur-2xl" />
      </Floating>
      <Floating
        duration={8}
        distance={15}
        delay={1}
        className="absolute bottom-20 right-10 opacity-30"
      >
        <div className="w-24 h-24 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 blur-2xl" />
      </Floating>

      {/* Twinkling stars */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-[15%] right-[20%] w-1.5 h-1.5 bg-white rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-white rounded-full"
      />

      <div className="relative">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <StaggerChildren
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          staggerDelay={0.15}
        >
          {skillCategories.map((category, categoryIndex) => (
            <TiltCard key={category.title} maxTilt={8} scale={1.02}>
              <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.12)">
                <Card className="h-full border border-violet-500/20 bg-[#0a0a1a]/60 backdrop-blur-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 group overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-4">
                      <Magnetic strength={0.2}>
                        <motion.div
                          className={`p-3 rounded-xl bg-linear-to-br ${category.gradient} shadow-lg`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <category.icon className="h-6 w-6 text-white" />
                        </motion.div>
                      </Magnetic>
                      <span className="text-xl font-bold">
                        {category.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: categoryIndex * 0.15 + skillIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{
                            scale: 1.1,
                            y: -3,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <Badge
                            variant="outline"
                            className={`${category.badgeColor} transition-all duration-200 cursor-default px-3 py-1.5 text-sm font-medium hover:shadow-md`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </TiltCard>
          ))}
        </StaggerChildren>

        {/* Additional Skills Info */}
        <FadeContent
          delay={0.5}
          direction="up"
          blur
          className="mt-16 text-center"
        >
          <Magnetic strength={0.1}>
            <Card className="inline-block border border-violet-500/20 bg-[#0a0a1a]/60 backdrop-blur-sm hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
              <CardContent className="px-8 py-6">
                <p className="text-muted-foreground max-w-2xl">
                  I&apos;m constantly learning and expanding my skill set.
                  Currently exploring{" "}
                  <span className="text-violet-400 font-semibold">
                    Web3 technologies
                  </span>
                  ,{" "}
                  <span className="text-purple-400 font-semibold">
                    Kubernetes
                  </span>
                  , and{" "}
                  <span className="text-blue-400 font-semibold">
                    advanced AI/ML patterns
                  </span>
                  .
                </p>
              </CardContent>
            </Card>
          </Magnetic>
        </FadeContent>
      </div>
    </SectionWrapper>
  );
}
