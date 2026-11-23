#!/usr/bin/env bash
set -euo pipefail

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
