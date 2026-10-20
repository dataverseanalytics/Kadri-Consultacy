import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { RevealObserver } from "@/components/layout/RevealObserver";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Kadri Consultancy is an IT consulting and software development company. We design, build and support custom software, web and mobile apps, cloud and AI solutions for businesses and individuals — delivered on time.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kadriconsultancy.com"),
  title: {
    default: "Kadri Consultancy — IT Consulting & Software Development Company",
    template: "%s | Kadri Consultancy",
  },
  description,
  keywords: [
    "IT consultancy",
    "software development company",
    "custom software development",
    "web development",
    "mobile app development",
    "cloud migration",
    "IT staff augmentation",
    "MVP development",
  ],
  openGraph: {
    type: "website",
    siteName: "Kadri Consultancy",
    title: "Kadri Consultancy — IT Consulting & Software Development",
    description,
    images: [{ url: "/images/hero.jpg", width: 1800, height: 1200 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Enable scroll-reveal styles only when JS runs, before first paint */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('reveal-ready')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <RevealObserver />
      </body>
    </html>
  );
}
