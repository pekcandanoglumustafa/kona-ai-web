# Kona AI — MGK bağımsız tasarım demosu | Cloudflare Pages

Bu proje resmî bir MGK sitesi değildir. Projenin üzerinde yer alan *bağımsız ve resmî olmayan tasarım demosu* bildirimleri korunmalıdır.

## Mevcut, derlemesi doğrulanmış proje

- Kaynak depo: `pekcandanoglumustafa/kona-ai-web`
- Yayın dalı: `kona-ai-mgk-demo-2026` (**main DEĞİL**)
- Gerçek kaynak Next.js / React projesidir. GitHub dalında boyut sınırları nedeniyle parçalara ayrılmış, doğrulama sırasında otomatik olarak çıkarılan kaynak arşivinden derlenir.
- Render üzerinde aynı dal, `bash build-render.sh` komutu ile başarıyla statik dışa aktarım oluşturdu.

## Cloudflare Pages oluşturma

1. Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git bölümüne gir.
2. GitHub erişimini doğrula ve `pekcandanoglumustafa/kona-ai-web` deposunu seç.
3. Proje adını `kona-ai-mgk-demo` yap (isim doluysa yeni bir varyant seç).
4. **Production branch** olarak yalnızca `kona-ai-mgk-demo-2026` seç. Yanlışlıkla `main` seçme.
5. Framework preset: `None` / özel (otomatik Next.js preset'i seçilirse build komutunu yine aşağıdaki gibi özelleştir).
6. Build command: `bash build-render.sh`
7. Build output directory: `out`
8. Root directory: boş / repository root.
9. Gerekirse Environment variables: `NODE_VERSION=22`.
10. Save and Deploy. Derleme bütünlük kontrolünden geçmeli, ardından Next.js statik dışa aktarımı `out/` içine oluşmalıdır.

Başarılı dağıtım sonrasında Cloudflare kendi `*.pages.dev` alan adını verir. Bu adresi doğrulamadan kullanıcıya site yayında denmemelidir.

Önemli: Proje statik bir pazarlama/önizleme demosudur; kullanıcılardan hesap bilgisi veya kişisel veri toplayan resmî hizmet değildir. MGK'nın üretim sistemi veya yetkilendirmesine erişmez.

Kaynak: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/ ve https://developers.cloudflare.com/pages/get-started/git-integration/
