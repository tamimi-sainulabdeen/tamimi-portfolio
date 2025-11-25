import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader"; // Add this import
import { Toaster } from "sonner";

// Modern sans-serif for body text
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Elegant serif for contrast
const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

// Dancing Script for creative elements
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tamimi Sainulabdeen - Frontend Developer & UI/UX Designer",
  description: "Creative frontend developer and UI/UX designer crafting beautiful, performant digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${dancingScript.variable}`} suppressHydrationWarning>
      <body className="antialiased mx-auto">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <Loader /> {/* Add loader here */}
          <Header/>
          <main className="pt-12">
            {children}
          </main>
          <Toaster 
            position="bottom-right"
            expand={false}
            richColors
            closeButton
            duration={5000}
          />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}