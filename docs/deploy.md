# Deploy — Hostinger

Production is a static export (`next build` → `out/`) on Hostinger shared hosting.
**The live path is GitHub Actions**, not a zip upload. Pushing `main` runs
`.github/workflows/deploy.yml`: build, then `rsync` into
`~/domains/fidelisstrategy.net/public_html/`.

Merging a PR to `main` is a production deploy.

## What is actually live vs what is broken

`https://fidelisstrategy.net` works. That is the site. A visual review of that URL
will look operational — it is.

`www` DNS was pointed at the same LiteSpeed IPs as the apex on 22 Aug 2026
(Website Builder `CNAME connect.hostinger.com` removed). Public resolvers already
see `www` A `5.183.10.226`. HTTP `www` hits LiteSpeed and 301s toward HTTPS.

HTTPS `www` still fails: the Let's Encrypt cert SAN is only
`DNS:fidelisstrategy.net` (expires **24 Sep 2026**). Browsers never reach the
`.htaccess` www → apex rewrite. The rewrite itself already works if you skip
certificate verification (`curl -k`).

Hostinger's public API cannot issue SSL. `www` is a reserved name — it cannot be
added as a parked domain or a subdomain. Reinstall Lifetime SSL in hPanel.

Mail is mixed: MX is Microsoft 365 (`*.mail.protection.outlook.com`) but
`autodiscover` still points at Hostinger mail. Apex TXT/SPF/DMARC were empty from
public resolvers. Inbound Outlook can still work; spoofing protection and some
clients will not. A leftover `@ ALIAS connect.hostinger.com` still exists in the
zone; public A/AAAA already serve the real site — do not wipe the zone to remove
it.

## Fix `www` SSL (hPanel click — API cannot do this)

1. hPanel → Websites → `fidelisstrategy.net` → Dashboard → Security → SSL.
2. If a certificate is already **Active**, ⋮ → **Uninstall**.
3. **Install SSL**. Wait until **Active** (usually a few minutes).
4. Confirm the certificate lists both `fidelisstrategy.net` and
   `www.fidelisstrategy.net`.
5. Confirm:
   - `curl -sI https://www.fidelisstrategy.net` → `301` to `https://fidelisstrategy.net/`
   - `curl -sI https://fidelisstrategy.net` still `200`

Do not enable Hostinger Website Builder or CDN on `www`. That is what created
the parking CNAME.

### DNS API (already applied; script kept for replay)

`scripts/hostinger-www-dns.py` must send a browser User-Agent or Cloudflare
returns Error 1010.

```bash
python3 scripts/hostinger-www-dns.py          # dry run, prints the zone
python3 scripts/hostinger-www-dns.py --apply  # delete www CNAME, set A/AAAA
```

Then still do the SSL click in hPanel.

## Mail (Microsoft 365)

If the mailbox is Exchange Online (MX already says it is):

- TXT `@`: `v=spf1 include:spf.protection.outlook.com -all`
- CNAME `autodiscover` → `autodiscover.outlook.com` (replace Hostinger autodiscover)
- Add the two DKIM CNAMEs from Microsoft 365 Admin → Settings → Domains
- TXT `_dmarc`: `v=DMARC1; p=none; rua=mailto:mafanasiev@fidelisstrategy.net`

Do this in Microsoft 365’s DNS wizard so the selectors match the tenant. Do not
guess DKIM hostnames.

## Deploy from Cursor Cloud Agent

The agent can deploy directly (without merging to `main`) when the Cloud
environment has the same SSH secrets as GitHub Actions:

- `SSH_HOST`, `SSH_PORT`, `SSH_USERNAME`, `SSH_PASSWORD`

Add them in the Cursor environment dashboard for this repo. Then:

```bash
npm run deploy:hostinger
```

That builds `out/` and rsyncs to Hostinger — same path as the GitHub Action.
Use this for preview deploys from a branch; keep `main` → GitHub Actions as
the normal production path unless you intentionally want agent-only deploys.

### Optional: Hostinger API MCP

Hostinger also ships an official API MCP server with `hosting_deployStaticWebsite`
(zip of pre-built `out/`). That works, but SSH/rsync is a better fit here
because it is already proven in CI, does incremental sync, and does not require
a second integration. Consider the MCP if you want agent-native deploys across
many Hostinger sites from one token (`HOSTINGER_API_TOKEN`).

## First-time GitHub Actions secrets

Already used by `.github/workflows/deploy.yml`:

- `SSH_HOST` — Hostinger SSH hostname
- `SSH_PORT` — usually `65002` (or `22`)
- `SSH_USERNAME` — hosting username
- `SSH_PASSWORD` — hosting password

hPanel → Advanced → SSH Access.

## Manual zip deploy (fallback only)

1. `npm ci && npm run build`
2. Zip the *contents* of `out/`
3. hPanel → File Manager → `domains/fidelisstrategy.net/public_html/` → extract
4. Confirm `.htaccess` from `out/` overwrote the live one
