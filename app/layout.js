
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://dat-portfolio-six.vercel.app"),

  title: "Phat Dat (David) Nguyen | AI/ML & Software Engineering",

  description:
    "Portfolio of Phat Dat (David) Nguyen, Computer Science undergraduate at City University of Hong Kong. Explore AI/ML research, software engineering projects, and Generative AI applications.",

  openGraph: {
    title: "Phat Dat (David) Nguyen | AI/ML & Software Engineering",
    description:
      "Computer Science @ CityUHK | AI/ML, Generative AI, Explainable AI & Software Engineering. Explore my research and featured projects.",
    url: "https://dat-portfolio-six.vercel.app",
    siteName: "Phat Dat (David) Nguyen — Portfolio",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: "Phat Dat (David) Nguyen | AI/ML & Software Engineering",
    description:
      "Computer Science @ CityUHK | AI/ML Research, Generative AI & Software Engineering Projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
