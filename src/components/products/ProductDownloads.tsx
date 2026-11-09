import { motion } from "framer-motion";
import TiltCard from "../ui/TiltCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const PRODUCTS = [
  {
    id: "browser",
    name: "Dhurta Browser",
    icon: "🔱",
    desc: "Zero-telemetry sovereign browser with real Tor Ghost Mode, Chakra Shield VPN bundle, and Omni self-audit dashboard.",
    accent: "#00d4aa",
    chipClass: "chip--teal",
    chips: ["Ghost Mode", "Tor Routing", "Zero Telemetry", "Kill Switch"],
    buttons: [
      { label: "Windows", href: "https://github.com/prashantkeshr/drtajl26.n/releases", size: "84 MB" },
      { label: "macOS", href: "https://github.com/prashantkeshr/drtajl26.n/releases", size: "91 MB" },
      { label: "Linux", href: "https://github.com/prashantkeshr/drtajl26.n/releases", size: "78 MB" },
    ],
    version: "v1.0.0",
  },
  {
    id: "connect",
    name: "Dhurta Connect",
    icon: "💬",
    desc: "Zero-server end-to-end encrypted P2P chat, voice and video calls, and file sharing. Pair with a short code — no accounts.",
    accent: "#c9a84c",
    chipClass: "chip--gold",
    chips: ["P2P Encrypted", "No Server", "Short-code Pairing"],
    buttons: [
      { label: "Download P2P Client", href: "https://connect.dhurta.com", size: "52 MB" },
    ],
    version: "v1.0.0",
  },
  {
    id: "setu",
    name: "Dhurta Setu",
    icon: "⌕",
    desc: "Hand-curated web index and first-party private search engine. No ad auctions, no tracking, no algorithms.",
    accent: "#4a9eff",
    chipClass: "chip--blue",
    chips: ["No Tracking", "Open Index", "No Ads"],
    buttons: [
      { label: "Download Bridge Tool", href: "https://setu.dhurta.com", size: "36 MB" },
    ],
    version: "v1.0.0",
  },
];

export default function ProductDownloads() {
  return (
    <section id="downloads" style={{ padding: "7rem 0", background: "var(--navy)" }}>
      <div className="container">
        <p className="section-label" style={{ color: "var(--teal)", marginBottom: "1rem" }}>Downloads</p>
        <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
          Three tools. One mission.
        </h2>
        <p style={{ color: "var(--gray-light)", maxWidth: "36rem", marginBottom: "3.5rem", lineHeight: 1.65 }}>
          Enterprise-grade privacy tools engineered for professionals. Open-source. Zero telemetry. Sovereign.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "2rem",
          alignItems: "stretch",
        }}>
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              style={{ height: "100%" }}
            >
              <TiltCard>
                <div style={{
                  background: "rgba(10, 22, 40, 0.88)",
                  border: `1px solid ${p.accent}22`,
                  borderRadius: "1rem",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}>
                  {/* Gradient header strip */}
                  <div style={{
                    background: `linear-gradient(135deg, ${p.accent}2a, ${p.accent}0d)`,
                    borderBottom: `1px solid ${p.accent}22`,
                    padding: "1.5rem 1.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                    <span style={{ fontSize: "2.4rem" }}>{p.icon}</span>
                    <div style={{ textAlign: "right" }}>
                      <h3 style={{
                        fontFamily: "var(--font-tech)",
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        color: p.accent,
                        lineHeight: 1.2,
                      }}>
                        {p.name}
                      </h3>
                      <span style={{
                        fontSize: "0.65rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--gray-light)",
                        background: "rgba(255,255,255,0.08)",
                        padding: "0.15rem 0.45rem",
                        borderRadius: "999px",
                        marginTop: "0.3rem",
                        display: "inline-block",
                      }}>
                        {p.version}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{
                    padding: "1.5rem 1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.1rem",
                    flex: 1,
                  }}>
                    <p style={{ color: "var(--gray-light)", fontSize: "0.88rem", lineHeight: 1.65 }}>
                      {p.desc}
                    </p>

                    {/* Feature chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {p.chips.map((chip) => (
                        <span key={chip} className={`chip ${p.chipClass}`}>{chip}</span>
                      ))}
                    </div>

                    {/* Download buttons */}
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.55rem",
                      marginTop: "auto",
                      paddingTop: "0.5rem",
                    }}>
                      {p.buttons.map((btn) => (
                        <a
                          key={btn.label}
                          href={btn.href}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            padding: "0.5rem 1rem",
                            borderRadius: "999px",
                            background: `${p.accent}18`,
                            border: `1px solid ${p.accent}40`,
                            color: p.accent,
                            fontFamily: "var(--font-tech)",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            transition: "background 0.2s, transform 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `${p.accent}30`;
                            e.currentTarget.style.transform = "translateY(-1px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `${p.accent}18`;
                            e.currentTarget.style.transform = "";
                          }}
                        >
                          ↓ {btn.label}
                          <span style={{
                            fontSize: "0.65rem",
                            color: "var(--gray-light)",
                            opacity: 0.7,
                          }}>
                            {btn.size}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
