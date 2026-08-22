#!/usr/bin/env python3
"""Point www.fidelisstrategy.net at the same host as the apex.

Live today:
  apex  A     5.183.10.226          → the real site (works)
  www   CNAME connect.hostinger.com → Hostinger parked-domain / Website Builder CDN
                                      HTTPS handshake fails; HTTP is a parking page

This script deletes the www CNAME and adds A/AAAA matching the apex.
It does not touch MX, TXT, or other records (overwrite=false).

Usage:
  HOSTINGER_API_TOKEN=... python3 scripts/hostinger-www-dns.py          # dry run
  HOSTINGER_API_TOKEN=... python3 scripts/hostinger-www-dns.py --apply
"""

from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.request

DOMAIN = "fidelisstrategy.net"
APEX_A = "5.183.10.226"
APEX_AAAA = "2a02:4780:1:2327:0:348e:e49a:3"
BASE = "https://developers.hostinger.com"


def req(method: str, path: str, token: str, body: dict | None = None) -> tuple[int, object]:
    data = None if body is None else json.dumps(body).encode()
    r = urllib.request.Request(
        f"{BASE}{path}",
        data=data,
        method=method,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(r, timeout=30) as res:
            raw = res.read().decode()
            return res.status, json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        raw = e.read().decode()
        try:
            parsed: object = json.loads(raw)
        except json.JSONDecodeError:
            parsed = raw
        return e.code, parsed


def main() -> int:
    apply = "--apply" in sys.argv
    token = os.environ.get("HOSTINGER_API_TOKEN", "").strip()
    if not token:
        print("Set HOSTINGER_API_TOKEN (hPanel → Account → API / developers.hostinger.com).", file=sys.stderr)
        return 2

    code, zone = req("GET", f"/api/dns/v1/zones/{DOMAIN}", token)
    print(f"GET zone → {code}")
    print(json.dumps(zone, indent=2)[:8000])
    if code != 200:
        return 1

    records = zone if isinstance(zone, list) else zone.get("records") or zone.get("data") or []
    www = [
        r
        for r in records
        if str(r.get("name", "")).rstrip(".") in {DOMAIN, "www", f"www.{DOMAIN}"}
        or str(r.get("name", "")).lower() in {"www", f"www.{DOMAIN}."}
    ]
    print("\nwww-related records:")
    print(json.dumps(www, indent=2))

    if not apply:
        print("\nDry run. Re-run with --apply to delete www CNAME and set www A/AAAA to the apex.")
        return 0

    # Remove parked Website-Builder CNAME first so it cannot coexist with an A record.
    del_code, del_body = req(
        "DELETE",
        f"/api/dns/v1/zones/{DOMAIN}?name=www&type=CNAME",
        token,
    )
    print(f"DELETE www CNAME → {del_code} {del_body}")

    put_code, put_body = req(
        "PUT",
        f"/api/dns/v1/zones/{DOMAIN}",
        token,
        {
            "overwrite": False,
            "zone": [
                {"name": "www", "type": "A", "ttl": 300, "records": [{"content": APEX_A}]},
                {"name": "www", "type": "AAAA", "ttl": 300, "records": [{"content": APEX_AAAA}]},
            ],
        },
    )
    print(f"PUT www A/AAAA → {put_code}")
    print(json.dumps(put_body, indent=2)[:4000])
    return 0 if put_code in {200, 201, 204} else 1


if __name__ == "__main__":
    raise SystemExit(main())
