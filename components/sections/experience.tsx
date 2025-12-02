"use client";

import { motion } from "framer-motion";
import { Trophy, Briefcase, Award, Users, Calendar } from "lucide-react";
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
};

const typeGradients = {
  achievement: "from-yellow-500 to-orange-500",
  internship: "from-blue-500 to-cyan-500",
  certification: "from-green-500 to-emerald-500",
  leadership: "from-purple-500 to-pink-500",
};

const typeColors = {
  achievement:
    "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30",
  internship:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
  certification:
    "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30",
  leadership:
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
};

export function Experience() {
  return (
    <SectionWrapper id="experience" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />

      <div className="relative">
        <SectionHeader
          title="Experience & Achievements"
          subtitle="My journey in tech, including internships, certifications, and notable achievements"
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 origin-top"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="h-full bg-linear-to-b from-primary/50 via-blue-500/50 to-purple-500/50" />
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
                    className={`absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center md:-translate-x-1/2 shadow-lg ring-4 ring-background z-10`}
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
                      <SpotlightCard>
                        <Card
                          className={`border border-border/50 bg-background/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
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
                              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                <Calendar className="h-3.5 w-3.5" />
                                {experience.date}
                              </span>
                            </div>

                            <Reveal delay={index * 0.1 + 0.2}>
                              <h3 className="text-xl font-bold">
                                {experience.title}
                              </h3>
                            </Reveal>

                            <p className="text-sm font-medium text-primary">
                              {experience.organization}
                            </p>

                            <p
                              className={`text-muted-foreground text-sm leading-relaxed ${
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
