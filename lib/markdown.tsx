import Link from "next/link";
import type { ReactNode } from "react";

function inlineMarkdown(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={`${match.index}-b`}>{token.slice(2, -2)}</strong>);
    } else {
      const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        if (href.startsWith("/") || href.startsWith("#")) {
          parts.push(
            <Link key={`${match.index}-l`} href={href} className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2 hover:text-moss-olive">
              {label}
            </Link>,
          );
        } else {
          parts.push(
            <a key={`${match.index}-a`} href={href} className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2 hover:text-moss-olive" target="_blank" rel="noopener noreferrer">
              {label}
            </a>,
          );
        }
      }
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function renderMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const nodes: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      nodes.push(
        <h2 key={key++} className="font-display font-bold text-2xl md:text-[28px] text-deep-olive mt-12 mb-4 tracking-tight">
          {line.slice(3)}
        </h2>,
      );
      i++;
      continue;
    }

    if (line.startsWith("# ")) {
      i++;
      continue;
    }

    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split("|").map((c) => c.trim()).filter(Boolean);
        const rows = tableLines.slice(2).map((row) =>
          row.split("|").map((c) => c.trim()).filter(Boolean),
        );
        nodes.push(
          <div key={key++} className="overflow-x-auto my-6">
            <table className="w-full border-collapse font-sans text-[15px]">
              <thead>
                <tr className="border-b border-moss-olive/30">
                  {headers.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 font-semibold text-deep-olive">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-moss-olive/15">
                    {row.map((cell, ci) => (
                      <td key={ci} className="py-2 pr-4 text-ink/85 align-top">{inlineMarkdown(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      nodes.push(
        <ul key={key++} className="list-disc pl-5 space-y-2 my-4 font-sans text-[17px] text-ink/85 leading-[1.75]">
          {items.map((item) => <li key={item}>{inlineMarkdown(item)}</li>)}
        </ul>,
      );
      continue;
    }

    if (line.startsWith("[^") && line.includes("]: ")) {
      const footnotes: ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith("[^")) {
        const footLine = lines[i];
        const idx = footLine.indexOf("]: ");
        const id = footLine.slice(2, idx);
        const body = footLine.slice(idx + 3);
        footnotes.push(
          <p key={id} id={id} className="font-sans text-[14px] text-ink/65 leading-relaxed">
            {inlineMarkdown(body)}
          </p>,
        );
        i++;
      }
      nodes.push(<div key={key++} className="mt-10 pt-6 border-t border-moss-olive/20 space-y-2">{footnotes}</div>);
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.startsWith("## Related reading")) {
      i++;
      const links: ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith("[")) {
        const linkLine = lines[i];
        const m = /^\[([^\]]+)\]\(([^)]+)\)/.exec(linkLine);
        if (m) {
          links.push(
            <li key={m[2]}>
              <Link href={m[2]} className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/40 underline-offset-2">
                {m[1]}
              </Link>
            </li>,
          );
        }
        i++;
      }
      nodes.push(
        <div key={key++} className="mt-12 pt-8 border-t border-moss-olive/20">
          <h2 className="font-display font-bold text-xl text-deep-olive mb-4">Related reading</h2>
          <ul className="space-y-2 font-sans text-[16px]">{links}</ul>
        </div>,
      );
      continue;
    }

    const boldOnly = line.match(/^\*\*(.+)\*\*$/);
    nodes.push(
      <p key={key++} className={`font-sans text-[17px] text-ink/85 leading-[1.75] my-4${boldOnly ? " font-semibold text-deep-olive" : ""}`}>
        {boldOnly ? boldOnly[1] : inlineMarkdown(line)}
      </p>,
    );
    i++;
  }

  return nodes;
}
