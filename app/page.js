"use client";

const PORTFOLIO = [
  { name: "Şamata Rafting", tag: "Rafting turizmi", url: "https://samatarafting.com", initial: "Ş" },
  { name: "Ideal Rafting", tag: "Rafting turizmi", url: "https://ideal-rafting.vercel.app", initial: "I" },
  { name: "Rivyera Tur", tag: "Günübirlik tur acentesi", url: "https://rivyera-tur.vercel.app", initial: "R" },
  { name: "Side Quad Buggy", tag: "ATV / buggy turları", url: "https://sidequadbuggy.com", initial: "S" },
];

const WHATSAPP_NUMBER = "905076584245";

export default function Page() {
  function sendToWhatsapp() {
    const name = document.getElementById("o-name").value.trim();
    const firm = document.getElementById("o-firm").value.trim();
    const note = document.getElementById("o-note").value.trim();

    let msg = `Merhaba, Kona AI'nin anahtar teslim paketi (20.000 TL) hakkında bilgi almak istiyorum.\n\nAd Soyad: ${name || "-"}\nİşletme: ${firm || "-"}`;
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
            <a href="#sistem">Nasıl Çalışıyor</a>
            <a href="#paket">Paket</a>
            <a href="#referanslar">Örnek Çalışmalar</a>
          </div>
          <a href="#siparis" className="nav-cta">
            Hemen Başlayalım
          </a>
        </nav>
      </header>

      <div className="wrap">
        {/* HERO */}
        <section className="hero">
          <div className="eyebrow">Turizm &amp; Aktivite İşletmeleri İçin</div>
          <h1>
            Web sitenizi kurarız, <em>reklamlarınızı açarız</em>, müşteri direkt size ulaşır.
          </h1>
          <p className="sub">
            Rafting, ATV/buggy, tur ve aktivite işletmeleri için: mobil uyumlu hızlı bir web sitesi kurar, Google,
            Instagram ve Facebook reklamlarınızı yönetiriz. Acenteye komisyon yok — müşteri doğrudan sizin
            WhatsApp&apos;ınıza yazar.
          </p>
          <div className="hero-cta">
            <a href="#paket" className="btn-primary">
              Paketi İncele — 20.000₺
            </a>
            <a href="#referanslar" className="btn-ghost">
              Örnek Çalışmalarımız
            </a>
          </div>

          <div className="stat-band">
            <div className="lead">
              Acentelere <span>%20-30 komisyon</span> ödemeyi bırakın — müşteri doğrudan size mesaj atsın veya arasın.
            </div>
            <div>
              <div className="stat-number">60-70</div>
              <div className="stat-label">Günlük doğrudan müşteri mesajı/araması*</div>
            </div>
            <div>
              <div className="stat-number">48 saat</div>
              <div className="stat-label">Site + reklam teslim süresi</div>
            </div>
          </div>
          <p style={{ fontSize: "12.5px", color: "var(--ink-muted)", marginTop: "14px" }}>
            * Kendi işlettiğimiz bir tesiste ölçtüğümüz sezon içi ortalama. Sonuçlar bölgeye, sezona ve işletmeye göre değişir.
          </p>
        </section>
      </div>

      {/* SISTEM */}
      <section id="sistem" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Sistem Nasıl Çalışıyor</div>
            <h2>Acente modelinden, doğrudan müşteri modeline.</h2>
            <p>Kendi tesislerimizde denedik: acenteye ödediğimiz komisyonu kaldırınca hem daha çok kazandık hem de müşteriyle direkt konuşur olduk.</p>
          </div>
          <div className="system-grid">
            <div className="system-old">
              <h4>Eski Yöntem</h4>
              <ul>
                <li>Acente/otel her satıştan %20-30 komisyon alır</li>
                <li>Müşteriyle aranızda üçüncü bir taraf olur</li>
                <li>Fiyatınızı ve markanızı siz kontrol edemezsiniz</li>
                <li>Sezon dışında talep tamamen acenteye bağlıdır</li>
              </ul>
            </div>
            <div className="system-new">
              <h4>Kona AI Modeli</h4>
              <ul>
                <li>Kendi web siteniz, kendi reklamınız, komisyon yok</li>
                <li>Müşteri doğrudan sizin WhatsApp&apos;ınıza yazar/arar</li>
                <li>Fiyatı, markayı, müşteri ilişkisini siz kontrol edersiniz</li>
                <li>Reklamı siz yönetirsiniz — talep sezon boyunca sizin elinizde</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAKET */}
      <section id="paket">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Anahtar Teslim Paket</div>
            <h2>Tek fiyat, tek teslimat, 48 saat.</h2>
          </div>

          <div className="pkg-card">
            <div className="flag">En çok tercih edilen</div>
            <div className="pkg-head">
              <h3>Anahtar Teslim Paket</h3>
              <div className="pkg-price">20.000₺</div>
            </div>

            <div className="pkg-list">
              <div className="pkg-item">
                <span className="n">1</span>
                <p>
                  <strong>Mobil Uyumlu Hızlı Web Site</strong>
                  İşletmenize özel, hızlı yayınlanan bir site.
                </p>
              </div>
              <div className="pkg-item">
                <span className="n">2</span>
                <p>
                  <strong>Google, Instagram &amp; Facebook Reklam Kurulumu</strong>
                  Üç platformda reklam hesaplarınız kurulur, yayına alınır.
                </p>
              </div>
              <div className="pkg-item">
                <span className="n">3</span>
                <p>
                  <strong>Otomatik Müşteri Yanıtlama Sistemi</strong>
                  Sitenize 7/24 yanıt veren bir chatbot ekleriz.
                </p>
              </div>
            </div>

            <div className="pkg-gift">🎁 Hediye: 1 Ay Reklam Yönetim Hizmetimiz Ücretsiz</div>

            <div className="pkg-payment">
              <b>Ödeme:</b> 10.000₺ iş başlangıcında, kalan 10.000₺ siteyi teslim alıp onayladığınızda.
            </div>

            <a href="#siparis" className="btn-primary">
              Sitemi Kurun, Reklamı Açın →
            </a>
          </div>
        </div>
      </section>

      {/* REFERANSLAR */}
      <section id="referanslar" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Örnek Çalışmalarımız</div>
            <h2>Konuşmuyoruz, kurduğumuz siteler ortada.</h2>
            <p>Aşağıdaki tüm siteler tarafımızca kuruldu ve yayında. Tıklayıp inceleyebilirsiniz.</p>
          </div>
          <div className="portfolio-grid">
            {PORTFOLIO.map((p) => (
              <a key={p.name} className="pf-card" href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="pf-thumb">{p.initial}</div>
                <h4>{p.name}</h4>
                <div className="pf-tag">{p.tag}</div>
                <div className="pf-link">Siteyi Gör →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SIPARIS */}
      <section id="siparis">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Hemen Başlayalım</div>
            <h2>&quot;Sitemi kurun, reklamı açın&quot; deyin, 48 saatte teslim edelim.</h2>
            <p>Formu doldurun, WhatsApp&apos;tan konuşalım.</p>
          </div>
          <div className="order-wrap">
            <div className="order-form">
              <label>Ad Soyad</label>
              <input id="o-name" type="text" placeholder="Adınız Soyadınız" />
              <label>İşletme Adı</label>
              <input id="o-firm" type="text" placeholder="Rafting / tur / aktivite işletmeniz" />
              <label>Kısa not (opsiyonel)</label>
              <textarea id="o-note" placeholder="Bölge, hizmet türü, mevcut siteniz varsa linki vb."></textarea>
              <button className="wa-submit" onClick={sendToWhatsapp}>
                WhatsApp&apos;tan Gönder →
              </button>
            </div>
            <div className="info-card">
              <div className="eyebrow">Neden Bu Model Çalışıyor</div>
              <h3>Biz de aynı işi kendi tesisimizde yapıyoruz.</h3>
              <p>Kona AI, turizm/aktivite işletmeleri için kurduğu bu sistemi önce kendi işinde denedi — günde 60-70 doğrudan mesaj/arama, sıfır acente komisyonu.</p>
              <p>10.000₺ başlangıçta, kalan 10.000₺ siteyi onayladığınızda — riski paylaşıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div className="logo">
              <span className="dot"></span>KONA AI
            </div>
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
