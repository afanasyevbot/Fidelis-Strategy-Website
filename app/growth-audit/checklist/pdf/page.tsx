import type { Metadata } from "next";
import { stages, scoringBands, checklistMeta } from "@/content/checklist";
import { siteConfig } from "@/lib/siteConfig";

// Print-only layout. Rendered to public/marketing/4d-growth-audit-checklist.pdf
// via Chrome headless (see scripts/build-checklist-pdf.sh). Not linked in nav.
export const metadata: Metadata = {
  title: "The 4D Growth Audit — Printable Checklist",
  robots: { index: false, follow: false },
};

const css = `
@page { size: Letter; margin: 0; }
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { background: #EDE4CC; }
.doc { font-family: var(--font-inter), system-ui, sans-serif; color: #1C1A16; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 8.5in; height: 11in; position: relative; overflow: hidden; page-break-after: always; background: #EDE4CC; }
.page:last-child { page-break-after: auto; }
.pad { padding: 0.8in 0.9in; }

/* Cover */
.cover { background: #2A3D2C; color: #EDE4CC; display: flex; flex-direction: column; align-items: center; justify-content: space-between; text-align: center; padding: 1.15in 0.9in 1in; height: 11in; }
.crest { height: 116px; width: auto; }
.wordmark { font-family: var(--font-cinzel), Georgia, serif; letter-spacing: 0.24em; font-size: 18px; color: #D4C4A0; margin-top: 16px; }
.cover-mid { display: flex; flex-direction: column; align-items: center; gap: 22px; }
.eyebrow-lt { font-size: 12px; letter-spacing: 0.34em; color: #D4C4A0; text-transform: uppercase; }
.cover-title { font-family: var(--font-space-grotesk), sans-serif; font-weight: 700; font-size: 56px; line-height: 1.02; letter-spacing: -0.02em; color: #EDE4CC; }
.cover-sub { font-family: var(--font-space-grotesk), sans-serif; font-weight: 300; font-size: 21px; color: #D4C4A0; max-width: 6.1in; line-height: 1.36; }
.rule { width: 66px; height: 2px; background: #D4C4A0; opacity: 0.55; }
.cover-bottom { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.tagline { font-family: var(--font-cinzel), Georgia, serif; font-style: italic; font-size: 14px; color: #D4C4A0; letter-spacing: 0.04em; }
.cover-url { font-size: 11px; letter-spacing: 0.2em; color: rgba(237,228,204,0.6); text-transform: uppercase; }

/* Content header / intro */
.runhead { display: flex; justify-content: space-between; align-items: center; font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase; color: #4A5D3C; padding-bottom: 13px; border-bottom: 1px solid rgba(74,93,60,0.25); }
.intro { font-family: var(--font-space-grotesk), sans-serif; font-weight: 300; font-size: 15px; color: #2A3D2C; margin-top: 18px; line-height: 1.4; }

/* Section */
.section { margin-top: 24px; }
.sec-label { font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: #4A5D3C; font-weight: 600; }
.sec-head { font-family: var(--font-space-grotesk), sans-serif; font-weight: 700; font-size: 20px; color: #2A3D2C; margin-top: 6px; letter-spacing: -0.01em; }
.q { display: flex; align-items: flex-start; gap: 12px; padding: 8.5px 0; border-bottom: 1px solid rgba(74,93,60,0.12); }
.q-num { font-family: var(--font-space-grotesk), sans-serif; font-weight: 700; color: #4A5D3C; font-size: 12.5px; width: 20px; flex: none; line-height: 1.5; }
.q-text { flex: 1; font-size: 12.5px; line-height: 1.5; color: #1C1A16; }
.q-box { width: 15px; height: 15px; border: 1.5px solid #4A5D3C; border-radius: 3px; flex: none; margin-top: 1px; }
.sec-score { margin-top: 9px; font-size: 11px; letter-spacing: 0.03em; color: #4A5D3C; text-align: right; }
.sec-score span { font-family: var(--font-space-grotesk), sans-serif; font-weight: 700; }

/* Total */
.total { margin-top: 26px; background: #2A3D2C; color: #EDE4CC; padding: 16px 22px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; }
.total .lbl { font-family: var(--font-space-grotesk), sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 0.02em; }
.total .val { font-size: 13px; color: #D4C4A0; letter-spacing: 0.04em; }

/* Scoring */
.score-head { font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: #4A5D3C; font-weight: 600; margin-top: 22px; }
.band { margin-top: 15px; }
.band-lbl { font-family: var(--font-space-grotesk), sans-serif; font-weight: 700; color: #2A3D2C; font-size: 14px; }
.band p { font-size: 12.5px; line-height: 1.55; color: #1C1A16; margin-top: 3px; }

/* CTA */
.cta { margin-top: 30px; background: #2A3D2C; color: #EDE4CC; border-radius: 8px; padding: 32px 34px; }
.cta h3 { font-family: var(--font-space-grotesk), sans-serif; font-weight: 700; font-size: 23px; line-height: 1.14; letter-spacing: -0.01em; }
.cta p { font-size: 13px; line-height: 1.6; color: rgba(237,228,204,0.85); margin-top: 12px; max-width: 5.3in; }
.cta-link { display: inline-block; margin-top: 20px; background: #D4C4A0; color: #2A3D2C; font-family: var(--font-space-grotesk), sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; padding: 11px 20px; border-radius: 4px; text-decoration: none; }
.cta-meta { margin-top: 18px; font-size: 12px; color: rgba(237,228,204,0.62); line-height: 1.6; }
.cta-meta strong { color: #D4C4A0; font-weight: 600; }

.foot { position: absolute; bottom: 0.5in; left: 0.9in; right: 0.9in; display: flex; justify-content: space-between; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(74,93,60,0.5); }
`;

function Section({ index }: { index: number }) {
  const stage = stages[index];
  return (
    <div className="section">
      <div className="sec-label">{stage.label}</div>
      <div className="sec-head">{stage.headline}</div>
      {stage.questions.map((q, i) => (
        <div className="q" key={i}>
          <div className="q-num">{index * 6 + i + 1}.</div>
          <div className="q-text">{q}</div>
          <div className="q-box" />
        </div>
      ))}
      <div className="sec-score">
        Section score: <span>____ / 6</span>
      </div>
    </div>
  );
}

export default function ChecklistPdf() {
  return (
    <div className="doc">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Page 1 — Cover */}
      <div className="page">
        <div className="cover">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="crest" src="/logo.png" alt="Fidelis Strategy" />
            <div className="wordmark">FIDELIS STRATEGY</div>
          </div>
          <div className="cover-mid">
            <div className="eyebrow-lt">The Diagnostic</div>
            <div className="cover-title">{checklistMeta.title}</div>
            <div className="rule" />
            <div className="cover-sub">
              {checklistMeta.totalQuestions} questions to know whether your growth
              system is actually working — the same diagnostic we run on day one of
              a paid engagement.
            </div>
          </div>
          <div className="cover-bottom">
            <div className="tagline">Faithful. Loyal. Trustworthy.</div>
            <div className="cover-url">fidelisstrategy.net</div>
          </div>
        </div>
      </div>

      {/* Page 2 — Customer + Offer */}
      <div className="page">
        <div className="pad">
          <div className="runhead">
            <span>The 4D Growth Audit</span>
            <span>Fidelis Strategy</span>
          </div>
          <div className="intro">
            Give yourself 1 point for every honest, confident &ldquo;yes.&rdquo;
            The gaps are where the work is.
          </div>
          <Section index={0} />
          <Section index={1} />
        </div>
        <div className="foot">
          <span>fidelisstrategy.net</span>
          <span>Page 1 of 3</span>
        </div>
      </div>

      {/* Page 3 — Systems + Results + total */}
      <div className="page">
        <div className="pad">
          <div className="runhead">
            <span>The 4D Growth Audit</span>
            <span>Fidelis Strategy</span>
          </div>
          <Section index={2} />
          <Section index={3} />
          <div className="total">
            <span className="lbl">Your total</span>
            <span className="val">______ / {checklistMeta.totalQuestions}</span>
          </div>
        </div>
        <div className="foot">
          <span>fidelisstrategy.net</span>
          <span>Page 2 of 3</span>
        </div>
      </div>

      {/* Page 4 — Scoring guide + CTA */}
      <div className="page">
        <div className="pad">
          <div className="runhead">
            <span>The 4D Growth Audit</span>
            <span>Fidelis Strategy</span>
          </div>
          <div className="score-head">How to read your score</div>
          {scoringBands.map((band) => (
            <div className="band" key={band.label}>
              <span className="band-lbl">{band.label}:</span>
              <p>{band.body}</p>
            </div>
          ))}
          <div className="cta">
            <h3>Two or three answers stinging is normal.</h3>
            <p>
              That&apos;s usually where the highest-leverage work is. If you want a
              second pair of eyes on the gaps, we offer a 30-minute call —
              no pitch deck, no sales script, just a real conversation about what
              you&apos;re trying to build.
            </p>
            <a className="cta-link" href={siteConfig.bookingUrl}>
              Book a Call →
            </a>
            <div className="cta-meta">
              <strong>Matthew Afanasiev</strong> · Founder, Fidelis Strategy
              <br />
              {siteConfig.email} · {siteConfig.phone}
            </div>
          </div>
        </div>
        <div className="foot">
          <span>fidelisstrategy.net</span>
          <span>Page 3 of 3</span>
        </div>
      </div>
    </div>
  );
}
