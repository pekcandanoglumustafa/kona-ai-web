# Kona AI — Premium 3D Web Sitesi

Next.js 16 + React 19 + React Three Fiber (Three.js) + GSAP ScrollTrigger.
Build test edildi, gerçekten derleniyor (`npm run build` başarılı).

## Yerelde çalıştırma
```
npm install
npm run dev
```
http://localhost:3000 adresinden açılır.

## Vercel'e deploy
Her zamanki gibi: GitHub'a push → Vercel'e bağla → deploy. Ekstra ayar gerekmiyor.

## Proje yapısı
```
app/
  layout.js        → fontlar, sayfa başlığı
  page.js           → sahneyi, yükleme ekranını ve scroll bölümlerini birleştirir, GSAP ScrollTrigger burada kamerayı yönetir
  globals.css       → marka renkleri (kağıt/mürekkep/zümrüt)
components/
  Scene3D.jsx        → React Three Fiber sahnesi (3D obje + ışıklar)
  LoadingOverlay.jsx → yüklenme ekranı, scroll'u kilitler
  ScrollSections.jsx → sağa/sola hizalı metin blokları
```

## Nasıl özelleştirilir
- **3D obje**: `components/Scene3D.jsx` içindeki `icosahedronGeometry` — burayı değiştirerek farklı bir geometri veya (ileride) gerçek bir `.glb` model yükleyebiliriz (`@react-three/drei`'nin `useGLTF` hook'uyla).
- **Metinler**: `components/ScrollSections.jsx` içindeki `SECTIONS` dizisi.
- **Renkler**: `app/globals.css` içindeki `:root` değişkenleri.
- **Kamera hareketi**: `app/page.js` içindeki `initScrollAnimation()` fonksiyonu.

## Sonraki adımlar (istersen)
- Gerçek bir `.glb` model eklemek (Sketchfab'tan indirdiğin dosyayı `public/models/` altına koyup `useGLTF` ile yüklemek).
- Kona Chat chatbot widget'ını buraya `app/api/chat/route.js` olarak entegre etmek.
- Agent (site/reklam metni üreten) mantığını ayrı bir API route olarak eklemek.
