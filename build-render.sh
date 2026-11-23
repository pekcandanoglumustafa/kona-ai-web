#!/usr/bin/env bash
set -euo pipefail

# ALL_PUBLIC_PAGES_DISABLED: independent demo is confidential until institutional review.
# This temporary build publishes only a holding page on both Cloudflare and Render.
mkdir -p out
cat > out/index.html <<'HTML'
<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Özel sunum — yayın kapalı</title></head><body style="font:16px/1.6 system-ui,-apple-system,Segoe UI,Arial,sans-serif;max-width:600px;padding:45px 22px;margin:10vh auto;color:#20232a"><h1>Önizleme erişime kapatıldı</h1><p>Bu bağlantıda artık kamuya açık tasarım önizlemesi yayımlanmamaktadır.</p></body></html>
HTML
cat > out/_headers <<'HEADERS'
/*
  X-Robots-Tag: noindex, nofollow
  Cache-Control: no-store
HEADERS
echo 'Public independent demo has been temporarily unpublished pending secure access setup.'
exit 0


# RENDER_PUBLIC_COPY_DISABLED: the former Render demo must not remain public.
# Cloudflare Pages (CF_PAGES=1) continues to build the protected demo normally.
if [[ "${RENDER:-}" == "true" && "${CF_PAGES:-}" != "1" ]]; then
  mkdir -p out
  cat > out/index.html <<'HTML'
<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Önizleme yayından kaldırıldı</title></head><body style="font-family:Arial,sans-serif;max-width:650px;margin:12vh auto;padding:20px"><h1>Önizleme yayından kaldırıldı</h1><p>Bu bağlantı artık kamuya açık bir tasarım önizlemesi sunmamaktadır.</p></body></html>
HTML
  printf '/\n  X-Robots-Tag: noindex, nofollow\n  Cache-Control: no-store\n' > out/_headers
  echo "The former Render demo has been disabled. No MGK materials are published here."
  exit 0
fi

# This deployment branch intentionally does not modify the live Kona AI main branch.
# The original source archive is split into GitHub text chunks for reliable upload.
cat source-part-01.b64 source-part-02.b64 source-part-03.b64 source-part-04.b64 source-part-05.b64 source-part-06.b64 | base64 --decode > kona-ai-mgk-source.tar.xz
echo '96e004460f065fa351e3a6455de62778d2f8a469207d689e3a1d83530f679cc9  kona-ai-mgk-source.tar.xz' | sha256sum --check
tar -xJf kona-ai-mgk-source.tar.xz
node apply-mgk-emblem.cjs
npm install --no-audit --no-fund
npm run build
echo "Kona AI MGK static export finished successfully: out/"
