"use client";

import Image from "next/image";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";
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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-muted/50 via-background to-background" />

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
                spotlightColor="rgba(59, 130, 246, 0.15)"
              >
                <Card className="h-full flex flex-col overflow-hidden border border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group">
                  {/* Project Image */}
                  <div className="relative h-52 overflow-hidden bg-linear-to-br from-muted to-muted/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Fallback gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-blue-500/10 to-purple-500/10 flex items-center justify-center">
                      <Folder className="h-16 w-16 text-muted-foreground/30" />
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 gap-3">
                      <Magnetic strength={0.3}>
                        <Button size="sm" className="shadow-lg" asChild>
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
                          className="shadow-lg"
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
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
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
                          className="text-xs font-medium bg-primary/5 hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links - Mobile visible */}
                    <div className="flex gap-3 w-full md:hidden">
                      <Button size="sm" className="flex-1" asChild>
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
                        className="flex-1"
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
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group border-2 px-8 py-6 text-base hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                View All Projects on GitHub
                <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </Magnetic>
        </FadeContent>
      </div>
    </SectionWrapper>
  );
}
