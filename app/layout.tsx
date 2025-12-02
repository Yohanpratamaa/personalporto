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
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global background effects */}
          <div className="fixed inset-0 -z-10 bg-gradient-mesh" />
          <div className="fixed inset-0 -z-10 bg-dot-pattern opacity-40" />

          {/* Animated gradient orbs */}
          <div className="fixed top-0 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float-slow -z-10" />
          <div className="fixed top-1/3 -right-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-float-medium -z-10" />
          <div className="fixed bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow -z-10" />

          <div className="relative flex min-h-screen flex-col bg-noise">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
