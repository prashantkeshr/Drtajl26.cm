import { motion } from "framer-motion";
import { type LucideIcon, BookOpen, ListChecks, Terminal, ShieldAlert } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type DocLink = { label: string; desc: string; href: string; icon: LucideIcon };

const LINKS: DocLink[] = [
  {
    label: "Documentation",
    desc: "Setup guides, feature docs, API reference.",
    href: "https://docs.dhurta.com",
    icon: BookOpen,
  },
  {
    label: "Changelog",
    desc: "What's new in every release.",
    href: "https://github.com/prashantkeshr/drtajl26.n/releases",
    icon: ListChecks,
  },
  {
    label: "API Reference",
    desc: "Integration guides for developers.",
    href: "https://docs.dhurta.com/api",
    icon: Terminal,
  },
  {
    label: "Security Advisories",
    desc: "Vulnerabilities, CVEs, and patches.",
    href: "https://docs.dhurta.com/security",
    icon: ShieldAlert,
  },
];

type Segment = { text: string; color?: string };
type CodeLine = { segments: Segment[] };

const CODE_LINES: CodeLine[] = [
  { segments: [{ text: "$ ", color: "var(--teal)" }, { text: "npm install @dhurta/connect" }] },
  { segments: [] },
  { segments: [
    { text: "import", color: "var(--blue)" },
    { text: " { DhurtaConnect } " },
    { text: "from", color: "var(--blue)" },
    { text: " " },
    { text: "'@dhurta/connect'", color: "var(--gold)" },
  ] },
  { segments: [] },
  { segments: [
    { text: "const", color: "var(--blue)" },
    { text: " conn = " },
    { text: "new", color: "var(--blue)" },
    { text: " DhurtaConnect({" },
  ] },
  { segments: [
    { text: "  encrypted: ", color: undefined },
    { text: "true", color: "var(--teal)" },
    { text: "," },
  ] },
  { segments: [
    { text: "  mode: ", color: undefined },
    { text: "'p2p'", color: "var(--gold)" },
    { text: "," },
  ] },
  { segments: [{ text: "})" }] },
  { segments: [] },
  { segments: [{ text: "// Zero config. Secure by default.", color: "var(--gray-light)" }] },
];

export default function DocsPreview() {
  return (
    <section id="docs" style={{ padding: "6rem 0", background: "var(--black)" }}>
      <div className="container">
        <p className="section-label" style={{ color: "var(--blue)", marginBottom: "1rem" }}>Resources</p>
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>
          Docs, Changelog & API
        </h2>

        <div className="docs-two-col">
          {/* Left col: doc links */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}>
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                whileHover={{ y: -3 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(10,22,40,0.7)",
                  border: "1px solid rgba(74,158,255,0.18)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  color: "inherit",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(74,158,255,0.45)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(74,158,255,0.18)"; }}
              >
                <div style={{ marginBottom: "0.65rem", color: "var(--blue)" }}>
                  <link.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-tech)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  marginBottom: "0.35rem",
                  color: "var(--blue)",
                }}>
                  {link.label}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--gray-light)", lineHeight: 1.5, flex: 1 }}>
                  {link.desc}
                </p>
                <span style={{ display: "inline-block", marginTop: "0.65rem", fontSize: "0.78rem", color: "var(--blue)" }}>→</span>
              </motion.a>
            ))}
          </div>

          {/* Right col: code block */}
          <motion.div
            className="docs-code-col"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            <div className="code-block">
              <div className="code-block__header">
                <div className="code-block__dot" style={{ background: "#ff5f56" }} />
                <div className="code-block__dot" style={{ background: "#ffbd2e" }} />
                <div className="code-block__dot" style={{ background: "#27c93f" }} />
                <span style={{
                  marginLeft: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--gray-light)",
                  opacity: 0.6,
                }}>
                  connect.ts
                </span>
              </div>
              <div className="code-block__body">
                {CODE_LINES.map((line, i) => (
                  <div key={i} style={{ minHeight: "1.4rem" }}>
                    {line.segments.map((seg, j) => (
                      <span key={j} style={{ color: seg.color ?? "var(--white)" }}>
                        {seg.text}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <p style={{
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: "var(--gray-light)",
              opacity: 0.65,
              fontFamily: "var(--font-mono)",
            }}>
              @dhurta/connect — coming soon · <a
                href="https://github.com/prashantkeshr/drtajl26.n"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--teal)", textDecoration: "none" }}
              >
                star on GitHub ↗
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
