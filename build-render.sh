#!/usr/bin/env bash
set -euo pipefail

# This deployment branch intentionally does not modify the live Kona AI main branch.
# The original source archive is split into GitHub text chunks for reliable upload.
cat source-part-01.b64 source-part-02.b64 source-part-03.b64 source-part-04.b64 source-part-05.b64 source-part-06.b64 | base64 --decode > kona-ai-mgk-source.tar.xz
echo '96e004460f065fa351e3a6455de62778d2f8a469207d689e3a1d83530f679cc9  kona-ai-mgk-source.tar.xz' | sha256sum --check
tar -xJf kona-ai-mgk-source.tar.xz
node apply-mgk-emblem.cjs
npm install --no-audit --no-fund
npm run build
echo "Kona AI MGK static export finished successfully: out/"
