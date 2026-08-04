import "./globals.css";

export const metadata = {
  title: "Kona AI — Web Sitesi Değil, Satış Makinası Kuruyoruz",
  description:
    "Google'da daha görünür olun. Daha az reklam harcayın. Daha fazla müşteriye ulaşın.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
