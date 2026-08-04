"use client";

const WHATSAPP_NUMBER = "905076584245";

const FEATURES = [
  { icon: "⚡", title: "Ultra Hızlı", text: "Gereksiz hiçbir şey yok. Sayfa milisaniyeler içinde açılır." },
  { icon: "🔍", title: "SEO Hazır", text: "Başlıktan yapılandırılmış veriye, Google'ın sevdiği her şey kurulu gelir." },
  { icon: "📈", title: "Google Ads Hazır", text: "Reklam açmaya hazır, dönüşüm takibi kurulu bir altyapı." },
  { icon: "📱", title: "Mobile First", text: "Trafiğinizin çoğu mobilden gelir; site önce mobil için tasarlanır." },
  { icon: "✨", title: "Premium Tasarım", text: "Şablon değil, markanıza özel tasarlanmış bir deneyim." },
  { icon: "🎯", title: "Dönüşüm Odaklı", text: "Her bölüm, ziyaretçiyi müşteriye çevirmek için kurgulanır." },
];

const RESULTS = [
  { name: "Dönüşüm Oranı", dir: "up", fill: 78 },
  { name: "Hemen Çıkma Oranı", dir: "down", fill: 34 },
  { name: "ROAS", dir: "up", fill: 82 },
  { name: "Tıklama Başı Maliyet", dir: "down", fill: 40 },
  { name: "Organik Sıralama", dir: "up", fill: 70 },
  { name: "Google Kalite Puanı", dir: "up", fill: 90 },
];

const PORTFOLIO = [
  { name: "Şamata Rafting", tag: "Rafting Turizmi", url: "https://samatarafting.com", score: "100/100 Mobil Hız" },
  { name: "İdeal Rafting", tag: "Rafting Turizmi", url: "https://ideal-rafting.vercel.app", score: "Canlı Site" },
  { name: "Rivyera Tur", tag: "Tur Acentesi", url: "https://rivyera-tur.vercel.app", score: "46 Tur, Canlı" },
];

const TRUST = ["Şamata Rafting", "İdeal Rafting", "Rivyera Tur", "Side Quad Buggy", "CV Sepeti"];

export default function Page() {
  function sendToWhatsapp() {
    const name = document.getElementById("o-name").value.trim();
    const firm = document.getElementById("o-firm").value.trim();
    const note = document.getElementById("o-note").value.trim();
    let msg = `Merhaba, Kona AI'den ücretsiz analiz / teklif almak istiyorum.\n\nAd Soyad: ${name || "-"}\nİşletme: ${firm || "-"}`;
    if (note) msg += `\nNot: ${note}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Merhaba, Kona AI hakkında bilgi almak istiyorum.")}`;

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <span className="dot"></span>KONA AI
          </div>
          <div className="nav-links">
            <a href="#ozellikler">Özellikler</a>
            <a href="#sonuclar">Sonuçlar</a>
            <a href="#portfolyo">Örnek Çalışmalar</a>
          </div>
          <a href="#teklif" className="nav-cta">
            Ücretsiz Analiz Al
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Premium Web Tasarım &amp; Dijital Pazarlama
          </div>
          <h1>
            WEB SİTESİ DEĞİL,
            <br />
            <span className="glow">SATIŞ MAKİNASI</span> KURUYORUZ.
          </h1>
          <p className="sub">Google&apos;da daha görünür olun. Daha az reklam harcayın. Daha fazla müşteriye ulaşın.</p>
          <div className="hero-cta">
            <a href="#teklif" className="btn-primary">
              Ücretsiz Analiz Al
            </a>
            <a href="#portfolyo" className="btn-ghost">
              Örnek Çalışmaları İncele
            </a>
          </div>

          <div className="hero-stage">
            <div className="laptop">
              <div className="laptop-screen">
                <div className="laptop-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="laptop-preview">
                  <div className="p-line" style={{ width: "40%" }}></div>
                  <div className="p-line" style={{ width: "58%" }}></div>
                  <div className="p-line" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div className="laptop-base"></div>
              <div className="laptop-stand"></div>
            </div>

            <div className="metric-desktop">
              <div className="metric-chip glass m1">
                <div className="val">99</div>
                <div className="lbl">Performance</div>
                <span className="tag">hedef skor</span>
              </div>
              <div className="metric-chip glass m2">
                <div className="val">100</div>
                <div className="lbl">SEO</div>
                <span className="tag">hedef skor</span>
              </div>
              <div className="metric-chip glass m3">
                <div className="val">100</div>
                <div className="lbl">Accessibility</div>
                <span className="tag">hedef skor</span>
              </div>
              <div className="metric-chip glass m4">
                <div className="val">100</div>
                <div className="lbl">Best Practices</div>
                <span className="tag">hedef skor</span>
              </div>
            </div>
            <div className="metric-row-mobile">
              <div className="metric-chip glass">
                <div className="val">99</div>
                <div className="lbl">Performance</div>
              </div>
              <div className="metric-chip glass">
                <div className="val">100</div>
                <div className="lbl">SEO</div>
              </div>
              <div className="metric-chip glass">
                <div className="val">100</div>
                <div className="lbl">Accessibility</div>
              </div>
              <div className="metric-chip glass">
                <div className="val">100</div>
                <div className="lbl">Best Practices</div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "var(--ink-faint)", fontSize: "12.5px", marginTop: "20px" }}>
            Kurduğumuz sitelerde hedeflediğimiz Lighthouse skorları — Şamata Rafting&apos;te bunu 100/100 mobil hızla gerçekten kanıtladık.
          </p>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section id="ozellikler">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Ne Sunuyoruz
            </div>
            <h2>Premium bir site, altı temel üzerine kurulur.</h2>
          </div>
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature-card glass">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SONUÇLAR */}
      <section id="sonuclar" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Neyi İyileştiriyoruz
            </div>
            <h2>Doğru kurulan bir site + reklam, bu yönde hareket ettirir.</h2>
          </div>
          <div className="results-grid">
            {RESULTS.map((r) => (
              <div key={r.name} className="result-card glass">
                <div className="top">
                  <span className="metric-name">{r.name}</span>
                  <span className={`arrow ${r.dir}`}>{r.dir === "up" ? "↑" : "↓"}</span>
                </div>
                <div className="result-bar">
                  <div className="fill" style={{ width: `${r.fill}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <p className="results-note">Yönler, doğru kurulmuş site + reklam kombinasyonunda genel eğilimi gösterir — kesin oranlar sektöre ve bütçeye göre değişir.</p>
        </div>
      </section>

      {/* PORTFOLYO */}
      <section id="portfolyo">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Örnek Çalışmalarımız
            </div>
            <h2>Konuşmuyoruz, kurduğumuz siteler ortada.</h2>
          </div>
          <div className="portfolio-grid">
            {PORTFOLIO.map((p) => (
              <a key={p.name} className="pf-card glass" href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="pf-preview">{p.name}</div>
                <div className="pf-body">
                  <div className="pf-tag">{p.tag}</div>
                  <h4>{p.name}</h4>
                  <span className="pf-score">
                    <b>●</b> {p.score}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: "center", width: "100%", display: "flex" }}>
            Güvenen Markalar
          </div>
          <div className="trust-row">
            {TRUST.map((t) => (
              <span key={t} className="trust-name">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section id="teklif">
        <div className="wrap">
          <div className="closing">
            <h2>
              <span className="muted">Rakipleriniz web sitesi yaptırıyor.</span>
              <br />
              Siz <span className="glow">dijital satış sistemi</span> kurun.
            </h2>
          </div>

          <div className="order-wrap" style={{ marginTop: 40 }}>
            <div className="order-form glass">
              <label>Ad Soyad</label>
              <input id="o-name" type="text" placeholder="Adınız Soyadınız" />
              <label>İşletme Adı</label>
              <input id="o-firm" type="text" placeholder="İşletmenizin adı" />
              <label>Kısa not (opsiyonel)</label>
              <textarea id="o-note" placeholder="Sektörünüz, mevcut siteniz varsa linki vb."></textarea>
              <button className="wa-submit" onClick={sendToWhatsapp}>
                Hemen Teklif Al →
              </button>
            </div>
            <div className="info-card glass">
              <div className="eyebrow">Neden Kona AI</div>
              <h3>Şablon değil, satış sistemi kuruyoruz.</h3>
              <p>Web sitesi, Google/Instagram/Facebook reklamı ve otomatik müşteri yanıtlama sistemi — hepsi tek elden, hızlı teslim.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="logo" style={{ marginBottom: 24 }}>
            <span className="dot"></span>KONA AI
          </div>
          <div className="footer-bottom">
            <span>© 2026 Kona AI</span>
            <span>Konya, Türkiye</span>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#04140a">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-3 .79.8-2.93-.2-.3A7.94 7.94 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.4-5.6c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z" />
        </svg>
      </a>
    </>
  );
}
