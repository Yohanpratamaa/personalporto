"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/config/site";
import { Code2, Server, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: skills.frontend,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
    badgeColor:
      "bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
  },
  {
    title: "Backend",
    icon: Server,
    skills: skills.backend,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    textColor: "text-green-600 dark:text-green-400",
    badgeColor:
      "bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30",
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: skills.aiml,
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600 dark:text-purple-400",
    badgeColor:
      "bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: skills.tools,
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-600 dark:text-orange-400",
    badgeColor:
      "bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30",
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />

      <div className="relative">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full border border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-linear-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-bold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.04,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="outline"
                          className={`${category.badgeColor} transition-all duration-200 cursor-default px-3 py-1.5 text-sm font-medium`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block border border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="px-8 py-6">
              <p className="text-muted-foreground max-w-2xl">
                I&apos;m constantly learning and expanding my skill set.
                Currently exploring{" "}
                <span className="text-primary font-semibold">
                  Web3 technologies
                </span>
                , <span className="text-primary font-semibold">Kubernetes</span>
                , and{" "}
                <span className="text-primary font-semibold">
                  advanced AI/ML patterns
                </span>
                .
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
