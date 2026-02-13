import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mirzaydemir.com"),
  title: "Mirza Aydemir | MFin Candidate (Capital Markets) | Financial Modeling and FP&A",
  description:
    "Master of Finance candidate at Schulich (Capital Markets). Experience in FP&A, financial modeling, and econometrics research - turning data into decision-grade insight.",
  openGraph: {
    title: "Mirza Aydemir | MFin Candidate (Capital Markets)",
    description:
      "Master of Finance candidate at Schulich (Capital Markets). Turning data into decision-grade insight.",
    url: "https://mirzaydemir.com",
    siteName: "Mirza Aydemir",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirza Aydemir | MFin Candidate (Capital Markets)",
    description:
      "Master of Finance candidate at Schulich (Capital Markets). Turning data into decision-grade insight.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
