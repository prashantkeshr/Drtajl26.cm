import { motion } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    q: "Is Dhurta Browser truly zero-telemetry?",
    a: "Yes. The browser ships with all telemetry pipelines removed at the source-code level. There is no opt-in or opt-out — the code simply does not exist.",
  },
  {
    q: "Does Dhurta Connect require any server?",
    a: "No. Connect pairs two devices directly using a short numeric code. All data travels exclusively between those two devices, encrypted end-to-end.",
  },
  {
    q: "What is Ghost Mode?",
    a: "Ghost Mode routes all browser traffic through the Tor network, using real onion routing. When activated, your IP is replaced by a Tor exit node and your traffic is multi-hop encrypted.",
  },
  {
    q: "What platforms does Dhurta Browser support?",
    a: "Windows, macOS (Intel & Apple Silicon), and Linux. Mobile support is on the roadmap.",
  },
  {
    q: "Is the source code auditable?",
    a: "Yes. The core browser and Connect are fully open-source on GitHub. Setu's index algorithm is also published.",
  },
];

const CONTACT = [
  { label: "General support", href: "mailto:support@dhurta.org", icon: "✉️" },
  { label: "Enterprise sales", href: "mailto:enterprise@dhurta.org", icon: "🤝" },
  { label: "GitHub Issues", href: "https://github.com/prashantkeshr/drtajl26.n/issues", icon: "🐛" },
  { label: "Security disclosure", href: "mailto:security@dhurta.org", icon: "🔒" },
];

export default function SupportHub() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="support" style={{ padding: "6rem 0", background: "var(--black)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          alignItems: "start",
        }}>
          <div>
            <p className="section-label" style={{ color: "var(--teal)", marginBottom: "1rem" }}>FAQ</p>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Frequently Asked
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {FAQS.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "0.6rem",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "1rem 1.25rem",
                      background: "rgba(10,22,40,0.6)",
                      color: "var(--white)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: "var(--teal)", fontSize: "1.1rem", flexShrink: 0 }}>
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === i && (
                    <div style={{
                      padding: "0.75rem 1.25rem 1rem",
                      background: "rgba(5,13,26,0.8)",
                      color: "var(--gray-light)",
                      fontSize: "0.87rem",
                      lineHeight: 1.65,
                    }}>
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label" style={{ color: "var(--gold)", marginBottom: "1rem" }}>Contact</p>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Get in touch
            </h2>
            <p style={{ color: "var(--gray-light)", lineHeight: 1.65, marginBottom: "2rem" }}>
              For support, partnerships, or enterprise inquiries — reach the Dhurta team directly.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CONTACT.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ x: 4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.9rem 1.25rem",
                    background: "rgba(10,22,40,0.6)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "0.6rem",
                    color: "var(--white)",
                    fontSize: "0.9rem",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                    e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                    e.currentTarget.style.background = "rgba(10,22,40,0.6)";
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                  {item.label}
                  <span style={{ marginLeft: "auto", color: "var(--gray-dark)" }}>→</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
