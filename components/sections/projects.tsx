"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Folder,
  ArrowUpRight,
  Rocket,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, siteConfig } from "@/config/site";
import {
  FadeContent,
  TiltCard,
  SpotlightCard,
  Magnetic,
  StaggerChildren,
} from "@/components/ui/animations";

export function Projects() {
  return (
    <SectionWrapper id="projects" className="relative overflow-hidden">
      {/* Space-themed background */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/5 via-transparent to-purple-900/5" />

      {/* Floating space elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: 360 }}
        transition={{
          y: { duration: 6, repeat: Infinity },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
        className="absolute top-40 right-[8%] w-4 h-4 bg-linear-to-br from-violet-400 to-purple-500 rounded-full opacity-50"
        style={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
      />
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-[20%] left-[5%] w-2 h-2 bg-white rounded-full"
      />

      <div className="relative">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of projects I've worked on, showcasing my skills and experience"
        />

        <StaggerChildren
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.15}
        >
          {projects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={8}
              scale={1.02}
              className="h-full"
            >
              <SpotlightCard
                className="h-full"
                spotlightColor="rgba(139, 92, 246, 0.15)"
              >
                <Card className="h-full flex flex-col overflow-hidden border border-violet-500/20 bg-[#0a0a1a]/60 backdrop-blur-sm hover:shadow-2xl hover:shadow-violet-500/10 hover:border-violet-500/30 transition-all duration-500 group">
                  {/* Project Image */}
                  <div className="relative h-52 overflow-hidden bg-linear-to-br from-violet-900/20 to-blue-900/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Fallback gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-blue-500/10 to-purple-500/10 flex items-center justify-center">
                      <Rocket className="h-16 w-16 text-violet-400/30" />
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a1a] via-[#0a0a1a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 gap-3">
                      <Magnetic strength={0.3}>
                        <Button
                          size="sm"
                          className="shadow-lg bg-violet-600 hover:bg-violet-500 text-white"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </Magnetic>
                      <Magnetic strength={0.3}>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="shadow-lg bg-[#0a0a1a]/80 border-violet-500/30 hover:border-violet-400/50 text-violet-200"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Source
                          </a>
                        </Button>
                      </Magnetic>
                    </div>
                  </div>

                  {/* Project Info */}
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold group-hover:text-violet-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-violet-400/50 opacity-0 group-hover:opacity-100 group-hover:text-violet-400 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 pt-0">
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start gap-4 pt-0">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-medium bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 border border-violet-500/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links - Mobile visible */}
                    <div className="flex gap-3 w-full md:hidden">
                      <Button
                        size="sm"
                        className="flex-1 bg-violet-600 hover:bg-violet-500"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-violet-500/30 text-violet-300 hover:bg-violet-500/10"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SpotlightCard>
            </TiltCard>
          ))}
        </StaggerChildren>

        {/* View All Button */}
        <FadeContent delay={0.6} direction="up" className="mt-16 text-center">
          <Magnetic strength={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                size="lg"
                asChild
                className="group px-8 py-6 text-base bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg shadow-violet-500/25 transition-all duration-300 relative overflow-hidden"
              >
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    View All Projects on GitHub
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              </Button>
            </motion.div>
          </Magnetic>
        </FadeContent>

        {/* Additional space decorations */}
        <motion.div
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 right-[15%] w-1 h-1 bg-purple-400 rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          className="absolute top-[30%] left-[3%] w-1.5 h-1.5 bg-blue-400 rounded-full"
        />
      </div>
    </SectionWrapper>
  );
}
