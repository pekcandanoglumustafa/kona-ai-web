const SECTIONS = [
  {
    eyebrow: "Kona AI · Premium Deneyim",
    title: "Web sitesi artık düz kaydırma değil.",
    text: "3D, sahne ışığı ve scroll ile hareket eden bir kamera — markanızı ilk saniyede farklılaştırır.",
  },
  {
    eyebrow: "Teknoloji",
    title: "Three.js + React Three Fiber + GSAP.",
    text: "Aynı teknoloji yığınıyla, markanıza özel bir 3D obje ve size özel kamera hareketiyle kurarız.",
  },
  {
    eyebrow: "Performans",
    title: "Mobilde de aynı akıcılıkta.",
    text: "Düşük poligon sayısı, optimize doku ve ışık kurulumuyla mobil ve masaüstünde yüksek hız skoru hedefleriz.",
  },
  {
    eyebrow: "Kimin İçin",
    title: "Premium+ pakette.",
    text: "Bu deneyim, öne çıkmak isteyen markalar için Premium pakete özel, ek ücretli bir seçenek olarak sunulur.",
    cta: true,
  },
];

export default function ScrollSections() {
  return (
    <div className="text-col">
      {SECTIONS.map((s, i) => (
        <section key={i} className="text-panel">
          <div className="eyebrow">{s.eyebrow}</div>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
          {s.cta && (
            <a href="#" className="btn" style={{ marginTop: 26 }}>
              Detay İçin Konuşalım →
            </a>
          )}
        </section>
      ))}
    </div>
  );
}
