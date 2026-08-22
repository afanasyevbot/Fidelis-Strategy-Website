# Deploy — Hostinger

Production is a static export (`next build` → `out/`) on Hostinger shared hosting.
**The live path is GitHub Actions**, not a zip upload. Pushing `main` runs
`.github/workflows/deploy.yml`: build, then `rsync` into
`~/domains/fidelisstrategy.net/public_html/`.

Merging a PR to `main` is a production deploy.

## What is actually live vs what is broken

`https://fidelisstrategy.net` works. That is the site. A visual review of that URL
will look operational — it is.

`www` does **not** point at the site. It is a Hostinger parked / Website Builder
record (`CNAME` → `connect.hostinger.com` / `connect.hstgr.net`):

| Host | Record | Where it goes |
|---|---|---|
| apex (`fidelisstrategy.net`) | A `5.183.10.226` | Real LiteSpeed account. HTTPS 200. |
| `www` | CNAME `connect.hostinger.com` | Parking page. HTTPS handshake fails. HTTP title: “Parked Domain name on Hostinger DNS system”. |

Mail is mixed: MX is Microsoft 365 (`*.mail.protection.outlook.com`) but
`autodiscover` still points at Hostinger mail. Apex TXT/SPF/DMARC were empty from
public resolvers. Inbound Outlook can still work; spoofing protection and some
clients will not.

Let's Encrypt on the apex expires **24 Sep 2026**. Confirm auto-renew in hPanel
→ SSL.

## Fix `www` (needs hPanel or a Hostinger API token)

Goal: `www` A/AAAA match the apex, then SSL covers `www`, then `.htaccess`
redirects `www` → apex.

### In hPanel ( Domains → DNS / DNS Zone Editor )

1. Delete the `www` **CNAME** (`connect.hostinger.com` / `connect.hstgr.net`).
2. Add:
   - `www` **A** → `5.183.10.226` (same as `@`)
   - `www` **AAAA** → same IPv6 as `@` (currently `2a02:4780:1:2327:0:348e:e49a:3`)
3. SSL → manage certificates for `fidelisstrategy.net` → install / renew so the
   SAN includes `www.fidelisstrategy.net`. Wait for issuance (often a few minutes).
4. Confirm:
   - `curl -sI https://www.fidelisstrategy.net` → `301` to `https://fidelisstrategy.net/`
   - `curl -sI https://fidelisstrategy.net` still `200`

Do not enable Hostinger Website Builder or CDN on `www`. That is what created
the parking CNAME.

### API (if `HOSTINGER_API_TOKEN` is set)

```bash
python3 scripts/hostinger-www-dns.py          # dry run, prints the zone
python3 scripts/hostinger-www-dns.py --apply  # delete www CNAME, set A/AAAA
```

Then still do the SSL click in hPanel — the DNS API does not issue certificates.

## Mail (Microsoft 365)

If the mailbox is Exchange Online (MX already says it is):

- TXT `@`: `v=spf1 include:spf.protection.outlook.com -all`
- CNAME `autodiscover` → `autodiscover.outlook.com` (replace Hostinger autodiscover)
- Add the two DKIM CNAMEs from Microsoft 365 Admin → Settings → Domains
- TXT `_dmarc`: `v=DMARC1; p=none; rua=mailto:mafanasiev@fidelisstrategy.net`

Do this in Microsoft 365’s DNS wizard so the selectors match the tenant. Do not
guess DKIM hostnames.

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
