"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import {
  FadeContent,
  Magnetic,
  SpotlightCard,
} from "@/components/ui/animations";

const certifications = [
  {
    id: 1,
    title: "Junior Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "November 2024",
    credentialId: "BNSP-12345678",
    credentialUrl: "#",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    logo: "🏛️",
    color: "from-amber-500 to-yellow-500",
    glowColor: "rgba(245, 158, 11, 0.3)",
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "October 2024",
    credentialId: "AWS-CLF-123456",
    credentialUrl: "#",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"],
    logo: "☁️",
    color: "from-orange-500 to-amber-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
  },
  {
    id: 3,
    title: "React Developer Certificate",
    issuer: "Meta (Facebook)",
    date: "August 2024",
    credentialId: "META-REACT-789",
    credentialUrl: "#",
    skills: ["React.js", "JSX", "Hooks", "State Management"],
    logo: "⚛️",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    id: 4,
    title: "Laravel Developer",
    issuer: "Dicoding Indonesia",
    date: "June 2024",
    credentialId: "DIC-LARAVEL-456",
    credentialUrl: "#",
    skills: ["Laravel", "PHP", "MVC", "REST API"],
    logo: "🚀",
    color: "from-red-500 to-rose-500",
    glowColor: "rgba(239, 68, 68, 0.3)",
  },
  {
    id: 5,
    title: "Database Design & Programming",
    issuer: "Oracle Academy",
    date: "March 2024",
    credentialId: "ORACLE-DB-321",
    credentialUrl: "#",
    skills: ["SQL", "Database Design", "PL/SQL", "Data Modeling"],
    logo: "🗄️",
    color: "from-violet-500 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    id: 6,
    title: "Git & GitHub Fundamentals",
    issuer: "GitHub Learning Lab",
    date: "January 2024",
    credentialId: "GH-FUND-654",
    credentialUrl: "#",
    skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    logo: "🐙",
    color: "from-gray-600 to-gray-800",
    glowColor: "rgba(107, 114, 128, 0.3)",
  },
];

export function Certifications() {
  return (
    <SectionWrapper id="certifications" className="relative overflow-hidden">
      {/* Animated space background */}
      <div className="absolute inset-0">
        {/* Constellation pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern
              id="constellation"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill="white" />
              <circle cx="20" cy="30" r="0.5" fill="white" />
              <circle cx="80" cy="70" r="0.5" fill="white" />
              <line
                x1="20"
                y1="30"
                x2="50"
                y2="50"
                stroke="white"
                strokeWidth="0.2"
                opacity="0.3"
              />
              <line
                x1="50"
                y1="50"
                x2="80"
                y2="70"
                stroke="white"
                strokeWidth="0.2"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation)" />
        </svg>

        {/* Nebula glow effects */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[130px]"
        />

        {/* Floating particles */}
        {[
          { top: "15%", left: "10%", size: 3, duration: 4, delay: 0 },
          { top: "25%", right: "15%", size: 2, duration: 5, delay: 1 },
          { top: "55%", left: "5%", size: 2.5, duration: 4.5, delay: 2 },
          { top: "75%", right: "10%", size: 2, duration: 3.5, delay: 1.5 },
          { top: "45%", right: "8%", size: 1.5, duration: 5.5, delay: 0.5 },
          { top: "85%", left: "15%", size: 2, duration: 4, delay: 3 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: particle.top,
              left: particle.left,
              right: particle.right,
              width: `${particle.size * 4}px`,
              height: `${particle.size * 4}px`,
              background:
                "radial-gradient(circle, rgba(167,139,250,0.8) 0%, transparent 70%)",
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.3, 0.8],
              y: [0, -10, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative">
        <SectionHeader
          title="Certifications"
          subtitle="Professional credentials and achievements in my cosmic journey"
        />

        {/* Certification Cards - Hexagonal/Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <FadeContent key={cert.id} delay={index * 0.1} direction="up">
              <Magnetic strength={0.05}>
                <SpotlightCard spotlightColor={cert.glowColor}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group h-full"
                  >
                    {/* Card */}
                    <div className="relative h-full p-6 rounded-2xl bg-[#0a0a1a]/70 border border-violet-500/20 backdrop-blur-sm overflow-hidden">
                      {/* Gradient border effect on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                      />

                      {/* Top accent line */}
                      <motion.div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        style={{ transformOrigin: "left" }}
                      />

                      {/* Floating badge icon */}
                      <motion.div
                        className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                        >
                          {cert.logo}
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="relative space-y-4">
                        {/* Certificate Icon & Title */}
                        <div className="flex items-start gap-3 pr-12">
                          <div
                            className={`p-2.5 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-20 shrink-0`}
                            style={{
                              background: `linear-gradient(135deg, ${cert.glowColor}, transparent)`,
                            }}
                          >
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-2">
                              {cert.title}
                            </h3>
                          </div>
                        </div>

                        {/* Issuer */}
                        <div className="flex items-center gap-2 text-gray-400">
                          <Building2 className="w-4 h-4 text-violet-400" />
                          <span className="text-sm">{cert.issuer}</span>
                        </div>

                        {/* Date & Credential */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{cert.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-violet-400">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span className="text-xs font-mono">
                              {cert.credentialId.slice(0, 12)}...
                            </span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {cert.skills.slice(0, 4).map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs bg-violet-500/10 border-violet-500/30 text-violet-300 hover:bg-violet-500/20 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {cert.skills.length > 4 && (
                            <Badge
                              variant="outline"
                              className="text-xs bg-purple-500/10 border-purple-500/30 text-purple-300"
                            >
                              +{cert.skills.length - 4}
                            </Badge>
                          )}
                        </div>

                        {/* View Certificate Link */}
                        <motion.a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors pt-2 group/link"
                          whileHover={{ x: 5 }}
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>View Credential</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </motion.a>
                      </div>

                      {/* Corner decoration */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                        <div
                          className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${cert.color} opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2`}
                        />
                      </div>
                    </div>
                  </motion.div>
                </SpotlightCard>
              </Magnetic>
            </FadeContent>
          ))}
        </div>

        {/* Bottom decoration - Achievement counter */}
        <FadeContent delay={0.8} direction="up">
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#0a0a1a]/60 border border-violet-500/20 backdrop-blur-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center"
              >
                <Award className="w-5 h-5 text-white" />
              </motion.div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">
                  {certifications.length}+
                </p>
                <p className="text-xs text-gray-400">
                  Professional Certifications
                </p>
              </div>
              <div className="w-px h-10 bg-violet-500/30" />
              <div className="text-center">
                <p className="text-2xl font-bold text-violet-400">
                  {certifications.reduce(
                    (acc, cert) => acc + cert.skills.length,
                    0
                  )}
                  +
                </p>
                <p className="text-xs text-gray-400">Skills Validated</p>
              </div>
            </div>
          </motion.div>
        </FadeContent>
      </div>
    </SectionWrapper>
  );
}
