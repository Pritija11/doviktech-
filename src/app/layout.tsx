import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const SITE_URL = "https://doviktechnologies.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dovik Technologies — Custom Software, Built to Last",
    template: "%s · Dovik Technologies",
  },
  description:
    "Dovik Technologies is an early-stage custom software development startup based in Kathmandu, Nepal, building web applications, SaaS platforms, APIs, and business software for clients.",
  keywords: [
    "Dovik Technologies",
    "custom software development startup",
    "software development agency",
    "web application development",
    "SaaS development",
    "API development",
    "business software",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dovik Technologies — Custom Software, Built to Last",
    description:
      "We design and build web applications, SaaS platforms, APIs, and business software for clients who need software that works.",
    siteName: "Dovik Technologies",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dovik Technologies — Custom Software, Built to Last",
    description:
      "We design and build web applications, SaaS platforms, APIs, and business software for clients who need software that works.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dovik Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Dovik Technologies is an early-stage custom software development startup based in Kathmandu, Nepal, building web applications, SaaS platforms, APIs, and business software for clients.",
  email: "hello@doviktechnologies.ltd",
  telephone: "+977-984-1122334",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dillibazar",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
