"use client";

import { motion } from "framer-motion";
import { Trophy, Briefcase, Award, Users, Calendar } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { experiences } from "@/config/site";

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
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 via-blue-500/50 to-purple-500/50 md:-translate-x-1/2" />

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
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className={`relative pl-16 md:pl-0 pb-12 last:pb-0 ${
                    isLeft ? "md:pr-[52%] md:text-right" : "md:pl-[52%]"
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className={`absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center md:-translate-x-1/2 shadow-lg ring-4 ring-background`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card
                      className={`border border-border/50 bg-background/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        isLeft ? "md:mr-6" : "md:ml-6"
                      }`}
                    >
                      <div
                        className={`flex flex-col gap-3 ${
                          isLeft ? "md:items-end" : ""
                        }`}
                      >
                        <div
                          className={`flex items-center gap-3 flex-wrap ${
                            isLeft ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <Badge
                            variant="outline"
                            className={`${colorClass} font-medium`}
                          >
                            {experience.type.charAt(0).toUpperCase() +
                              experience.type.slice(1)}
                          </Badge>
                          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            {experience.date}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold">
                          {experience.title}
                        </h3>

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
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
