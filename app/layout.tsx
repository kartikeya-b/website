import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartikeya Bahuguna | Senior Product Manager",
  description:
    "Senior Product Manager with 6+ years across health-tech, fintech, and B2B SaaS. Currently at Bupa Global. Based in Bristol, UK. Open to new opportunities.",
  openGraph: {
    title: "Kartikeya Bahuguna | Senior Product Manager",
    description:
      "Senior Product Manager with 6+ years across health-tech, fintech, and B2B SaaS. Currently at Bupa Global. Based in Bristol, UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kartikeya Bahuguna",
              jobTitle: "Senior Product Manager",
              sameAs: [
                "https://www.linkedin.com/in/kartikeya-bahuguna-924670bb/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Bupa Global",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bristol",
                addressCountry: "UK",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
