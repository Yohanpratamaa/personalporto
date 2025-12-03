import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Portfolio",
    "Web Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "AI",
    "Machine Learning",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@johndoe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Space Background Base */}
          <div className="fixed inset-0 -z-50 bg-linear-to-b from-[#0a0a1a] via-[#0d0d24] to-[#0a0a1a] dark:from-[#020212] dark:via-[#0a0a1a] dark:to-[#020212]" />

          {/* Stars Layer */}
          <div className="fixed inset-0 -z-40 bg-space-stars opacity-60 dark:opacity-80" />

          {/* Additional Star Layers for depth */}
          <div
            className="fixed inset-0 -z-40 opacity-40 dark:opacity-60"
            style={{
              backgroundImage: `
              radial-gradient(1px 1px at 100px 150px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1.5px 1.5px at 200px 250px, rgba(200,200,255,0.7), transparent),
              radial-gradient(1px 1px at 300px 100px, rgba(255,255,255,0.6), transparent),
              radial-gradient(2px 2px at 400px 300px, rgba(180,180,255,0.8), transparent),
              radial-gradient(1px 1px at 500px 200px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1.5px 1.5px at 150px 350px, rgba(220,200,255,0.6), transparent),
              radial-gradient(1px 1px at 350px 400px, rgba(255,255,255,0.8), transparent),
              radial-gradient(2px 2px at 550px 450px, rgba(200,180,255,0.7), transparent)
            `,
              backgroundSize: "700px 500px",
            }}
          />

          {/* Nebula/Galaxy Effects */}
          <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-linear-to-br from-purple-900/20 via-violet-800/10 to-transparent rounded-full blur-[150px] animate-nebula-drift -z-30" />
          <div
            className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-linear-to-tl from-blue-900/20 via-indigo-800/10 to-transparent rounded-full blur-[120px] animate-nebula-drift -z-30"
            style={{ animationDelay: "-8s" }}
          />
          <div
            className="fixed top-1/3 right-1/4 w-[400px] h-[400px] bg-linear-to-r from-pink-900/15 via-purple-800/10 to-transparent rounded-full blur-[100px] animate-nebula-drift -z-30"
            style={{ animationDelay: "-15s" }}
          />

          {/* Distant Galaxy Glow */}
          <div className="fixed top-1/4 left-1/3 w-[300px] h-[300px] bg-radial-[circle] from-violet-500/10 via-purple-500/5 to-transparent rounded-full blur-[80px] animate-pulse-glow -z-30" />

          {/* Shooting Stars Container */}
          <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
            <div
              className="absolute top-20 right-[20%] w-[100px] h-[2px] bg-linear-to-r from-white via-white to-transparent rounded-full animate-shooting-star opacity-0"
              style={{ animationDelay: "0s", animationDuration: "4s" }}
            />
            <div
              className="absolute top-[40%] right-[10%] w-[80px] h-[1.5px] bg-linear-to-r from-white via-white to-transparent rounded-full animate-shooting-star opacity-0"
              style={{ animationDelay: "2s", animationDuration: "3.5s" }}
            />
            <div
              className="absolute top-[60%] right-[30%] w-[120px] h-[2px] bg-linear-to-r from-white via-white to-transparent rounded-full animate-shooting-star opacity-0"
              style={{ animationDelay: "5s", animationDuration: "4.5s" }}
            />
          </div>

          {/* Twinkling Stars */}
          <div className="fixed inset-0 -z-25 pointer-events-none">
            <div
              className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-[20%] left-[80%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-[35%] left-[25%] w-1 h-1 bg-white rounded-full animate-twinkle-slow"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-[50%] left-[70%] w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-[65%] left-[10%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle-slow"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="absolute top-[75%] left-[60%] w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{ animationDelay: "2.5s" }}
            />
            <div
              className="absolute top-[85%] left-[40%] w-1 h-1 bg-white rounded-full animate-twinkle-slow"
              style={{ animationDelay: "0.8s" }}
            />
            <div
              className="absolute top-[15%] left-[55%] w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{ animationDelay: "1.8s" }}
            />
            <div
              className="absolute top-[45%] left-[90%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle-slow"
              style={{ animationDelay: "3s" }}
            />
            <div
              className="absolute top-[90%] left-[85%] w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{ animationDelay: "2.2s" }}
            />
          </div>

          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
