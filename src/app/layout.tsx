import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Savnerkar - Developer Portfolio",
  description:
    "Student / Developer focused on Java, Python, and Web Development. Passionate about building innovative solutions and continuous learning.",
  keywords: [
    "Harsh Savnerkar",
    "Developer",
    "Portfolio",
    "Java",
    "Python",
    "Web Development",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Harsh Savnerkar" }],
  creator: "Harsh Savnerkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshsavnerkar.com",
    title: "Harsh Savnerkar - Developer Portfolio",
    description:
      "Student / Developer focused on Java, Python, and Web Development. Passionate about building innovative solutions and continuous learning.",
    siteName: "Harsh Savnerkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Savnerkar - Developer Portfolio",
    description:
      "Student / Developer focused on Java, Python, and Web Development.",
    creator: "@harshsavnerkar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-primary text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
