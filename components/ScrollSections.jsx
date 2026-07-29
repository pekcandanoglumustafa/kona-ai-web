const SECTIONS = [
  {
    eyebrow: "Kona AI · Premium Deneyim",
    title: "Web sitesi artık düz kaydırma değil.",
    text: "3D, sahne ışığı ve scroll ile hareket eden bir kamera — markanızı ilk saniyede farklılaştırır.",
    align: "left",
  },
  {
    eyebrow: "Teknoloji",
    title: "Three.js + React Three Fiber + GSAP.",
    text: "Aynı teknoloji yığınıyla, markanıza özel bir 3D obje ve size özel kamera hareketiyle kurarız.",
    align: "right",
  },
  {
    eyebrow: "Performans",
    title: "Mobilde de aynı akıcılıkta.",
    text: "Düşük poligon sayısı, optimize doku ve ışık kurulumuyla mobil ve masaüstünde yüksek hız skoru hedefleriz.",
    align: "left",
  },
  {
    eyebrow: "Kimin İçin",
    title: "Premium+ pakette.",
    text: "Bu deneyim, öne çıkmak isteyen markalar için Premium pakete özel, ek ücretli bir seçenek olarak sunulur.",
    align: "right",
    cta: true,
  },
];

export default function ScrollSections() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      {SECTIONS.map((s, i) => (
        <section
          key={i}
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 8vw",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              maxWidth: 480,
              pointerEvents: "auto",
              marginLeft: s.align === "right" ? "auto" : 0,
              textAlign: s.align === "right" ? "right" : "left",
            }}
          >
            <div className="eyebrow">{s.eyebrow}</div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(30px, 4.6vw, 52px)",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              {s.title}
            </h2>
            <p style={{ color: "var(--ink-muted)", fontSize: 16, maxWidth: 420, marginLeft: s.align === "right" ? "auto" : 0 }}>
              {s.text}
            </p>
            {s.cta && (
              <a href="#" className="btn" style={{ marginTop: 26 }}>
                Detay İçin Konuşalım →
              </a>
            )}
          </div>
        </section>
      ))}
      <div style={{ height: "100vh" }} />
    </div>
  );
}
