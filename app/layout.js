import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://omardev.pages.dev"),
  title: {
    default: "Omar Mostafa — Full Stack JS Developer",
    template: "%s | Omar Mostafa",
  },
  description:
    "MERN Stack Developer — React & Next.js frontends, Node.js & Express backends, MongoDB databases, plus a designer's eye for pixel-perfect UI. Let's build something fast, secure and beautiful.",
  keywords: [
    "Omar Mostafa",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "UI UX Designer",
    "Frontend Developer",
  ],
  authors: [{ name: "Omar Mostafa", url: "https://github.com/progamer07745" }],
  creator: "Omar Mostafa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omardev.pages.dev",
    siteName: "Omar.DEV",
    title: "Omar Mostafa — Full Stack JS Developer",
    description:
      "React & Next.js · Node.js & Express · MongoDB. I build fast, secure and pixel-perfect web apps from database to pixels.",
    images: [{ url: "/images/omar.png", width: 512, height: 640, alt: "Omar Mostafa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Mostafa — Full Stack JS Developer",
    description:
      "MERN Stack Developer building fast, secure and beautiful web apps.",
    images: ["/images/omar.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#03050a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>
        {/* Animated background (gradient blobs) */}
        <div className="bg-fixed-layer" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        {children}
      </body>
    </html>
  );
}
