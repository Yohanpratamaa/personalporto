"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Briefcase,
  Award,
  Users,
  Calendar,
  Star,
  GraduationCap,
  Code2,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { experiences } from "@/config/site";
import {
  FadeContent,
  SpotlightCard,
  Reveal,
  Magnetic,
} from "@/components/ui/animations";

const typeIcons = {
  achievement: Trophy,
  internship: Briefcase,
  certification: Award,
  leadership: Users,
  work: Code2,
  education: GraduationCap,
  freelance: Star,
};

const typeGradients = {
  achievement: "from-amber-400 to-yellow-500",
  internship: "from-violet-500 to-purple-500",
  certification: "from-emerald-400 to-teal-500",
  leadership: "from-blue-400 to-indigo-500",
  work: "from-rose-500 to-pink-500",
  education: "from-cyan-400 to-sky-500",
  freelance: "from-orange-400 to-amber-500",
};

const typeColors = {
  achievement: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  internship: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  certification: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  leadership: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  work: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  education: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  freelance: "bg-orange-500/10 text-orange-400 border-orange-500/30",
};

export function Experience() {
  return (
    <SectionWrapper id="experience" className="relative overflow-hidden">
      {/* Space-themed background */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-900/5 via-transparent to-blue-900/5" />

      {/* Floating space elements */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-[10%] w-2 h-2 bg-violet-400 rounded-full"
        style={{ boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)" }}
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-[30%] left-[5%] w-3 h-3 bg-linear-to-br from-purple-400 to-blue-400 rounded-full opacity-40"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute top-[40%] right-[3%] w-1.5 h-1.5 bg-blue-400 rounded-full"
      />

      <div className="relative">
        <SectionHeader
          title="Experience & Achievements"
          subtitle="My journey in tech, including internships, certifications, and notable achievements"
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Animated Timeline line - space themed */}
            <motion.div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 origin-top"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="h-full bg-linear-to-b from-violet-500/60 via-purple-500/60 to-blue-500/60" />
            </motion.div>

            {experiences.map((experience, index) => {
              const Icon =
                typeIcons[experience.type as keyof typeof typeIcons] || Trophy;
              const gradient =
                typeGradients[experience.type as keyof typeof typeGradients] ||
                typeGradients.achievement;
              const colorClass =
                typeColors[experience.type as keyof typeof typeColors] ||
                typeColors.achievement;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className={`relative pl-16 md:pl-0 pb-12 last:pb-0 ${
                    isLeft ? "md:pr-[52%] md:text-right" : "md:pl-[52%]"
                  }`}
                >
                  {/* Timeline dot with pulse effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center md:-translate-x-1/2 shadow-lg ring-4 ring-[#0a0a1a] z-10`}
                    style={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                  >
                    {/* Pulse ring effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-linear-to-br ${gradient}`}
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <Icon className="h-5 w-5 text-white relative z-10" />
                  </motion.div>

                  {/* Content with reveal animation */}
                  <FadeContent
                    delay={index * 0.15}
                    direction={isLeft ? "left" : "right"}
                  >
                    <Magnetic strength={0.08}>
                      <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.12)">
                        <Card
                          className={`border border-violet-500/20 bg-[#0a0a1a]/60 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-500/30 transition-all duration-300 ${
                            isLeft ? "md:mr-6" : "md:ml-6"
                          }`}
                        >
                          <motion.div
                            className={`flex flex-col gap-3 ${
                              isLeft ? "md:items-end" : ""
                            }`}
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div
                              className={`flex items-center gap-3 flex-wrap ${
                                isLeft ? "md:flex-row-reverse" : ""
                              }`}
                            >
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Badge
                                  variant="outline"
                                  className={`${colorClass} font-medium`}
                                >
                                  {experience.type.charAt(0).toUpperCase() +
                                    experience.type.slice(1)}
                                </Badge>
                              </motion.div>
                              <span className="flex items-center gap-1.5 text-sm text-gray-400">
                                <Calendar className="h-3.5 w-3.5" />
                                {experience.date}
                              </span>
                            </div>

                            <Reveal delay={index * 0.1 + 0.2}>
                              <h3 className="text-xl font-bold text-white">
                                {experience.title}
                              </h3>
                            </Reveal>

                            <p className="text-sm font-medium text-violet-400">
                              {experience.organization}
                            </p>

                            <p
                              className={`text-gray-400 text-sm leading-relaxed ${
                                isLeft ? "md:text-right" : ""
                              }`}
                            >
                              {experience.description}
                            </p>
                          </motion.div>
                        </Card>
                      </SpotlightCard>
                    </Magnetic>
                  </FadeContent>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
