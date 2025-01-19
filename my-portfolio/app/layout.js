import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tejash Soni | Portfolio",
  description:
    "Welcome to Tejash Soni's portfolio. A Full-Stack Developer crafting seamless digital solutions using modern technologies like React, next.js, Django, and Node.js.",
  keywords: [
    "Tejash Soni",
    "Full-Stack Developer",
    "React",
    "Django",
    "Portfolio",
    "JavaScript",
    "Node.js",
    "Web Development",
    "Next.js",
    "MongoDB",
    "MySQL"
  ],
  author: "Tejash Soni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
       <head>
       <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tejashsoni.dev" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
