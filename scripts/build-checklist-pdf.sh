#!/usr/bin/env bash
# Regenerate the 4D Growth Audit checklist PDF from the print page.
# The print page (app/growth-audit/checklist/pdf) reads the same questions
# as the website (content/checklist.ts), so the PDF never drifts.
#
# Usage:  npm run dev   (in another terminal)
#         ./scripts/build-checklist-pdf.sh [port]   (default port 3007)
set -euo pipefail

PORT="${1:-3007}"
OUT="public/marketing/4d-growth-audit-checklist.pdf"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

"$CHROME" \
  --headless=new --disable-gpu --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw --virtual-time-budget=6000 \
  --print-to-pdf="$OUT" \
  "http://localhost:${PORT}/growth-audit/checklist/pdf/"

echo "Wrote $OUT"
