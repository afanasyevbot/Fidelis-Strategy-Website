#!/usr/bin/env bash
set -euo pipefail

# Build and rsync the static export to Hostinger shared hosting.
# Requires: SSH_HOST, SSH_PORT, SSH_USERNAME, SSH_PASSWORD
# Same credentials as .github/workflows/deploy.yml (GitHub Actions secrets).

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

for var in SSH_HOST SSH_PORT SSH_USERNAME SSH_PASSWORD; do
  if [[ -z "${!var:-}" ]]; then
    echo "Missing $var. Add it to your Cursor Cloud environment secrets." >&2
    echo "hPanel → Advanced → SSH Access (same values as GitHub Actions secrets)." >&2
    exit 1
  fi
done

if ! command -v sshpass >/dev/null 2>&1; then
  echo "sshpass is required. Rebuild the Cloud Agent environment or run: sudo apt-get install -y sshpass" >&2
  exit 1
fi

echo "Building static export..."
npm run build

REMOTE="${SSH_USERNAME}@${SSH_HOST}:~/domains/fidelisstrategy.net/public_html/"
SSH_OPTS=(-p "$SSH_PORT" -o StrictHostKeyChecking=no)

echo "Deploying out/ → $REMOTE"
sshpass -p "$SSH_PASSWORD" rsync -avzr --delete \
  -e "ssh ${SSH_OPTS[*]}" \
  out/ \
  "$REMOTE"

echo "Invalidating LiteSpeed cache..."
sshpass -p "$SSH_PASSWORD" ssh "${SSH_OPTS[@]}" \
  "$SSH_USERNAME@$SSH_HOST" \
  'find ~/domains/fidelisstrategy.net/public_html -name "*.html" -exec touch -m {} \; && echo "Cache invalidated"'

echo "Done. Check https://fidelisstrategy.net"
