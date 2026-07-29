import "./globals.css";

export const metadata = {
  title: "Kona AI — Web Sitesi + Google & Meta Reklam Yönetimi",
  description:
    "Kona AI; hızlı, SEO uyumlu bir web sitesi kurar ve Google & Meta reklamlarınızı yönetir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
