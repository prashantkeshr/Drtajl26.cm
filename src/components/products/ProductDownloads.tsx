import { motion } from "framer-motion";
import { type LucideIcon, Compass, MessageSquare, Search, Code2, ArrowUpRight } from "lucide-react";
import TiltCard from "../ui/TiltCard";

const EASE = [0.22, 1, 0.36, 1] as const;

type Product = {
  id: string;
  name: string;
  icon: LucideIcon;
  desc: string;
  accent: string;
  chipClass: string;
  chips: string[];
  github: string;
  subdomain: string;
  version: string;
};

const PRODUCTS: Product[] = [
  {
    id: "browser",
    name: "Dhurta Browser",
    icon: Compass,
    desc: "A sovereign browser with Tor Ghost Mode, Chakra Shield routing, and Omni self-audit dashboard. Zero telemetry by design.",
    accent: "#00d4aa",
    chipClass: "chip--teal",
    chips: ["Ghost Mode", "Tor Routing", "Zero Telemetry", "Kill Switch"],
    github: "https://github.com/prashantkeshr/drtajl26.n",
    subdomain: "https://browser.dhurta.com",
    version: "v1.0.0",
  },
  {
    id: "connect",
    name: "Dhurta Connect",
    icon: MessageSquare,
    desc: "End-to-end encrypted P2P chat, voice, video and file sharing. Pair two devices with a short code — no server, no accounts.",
    accent: "#c9a84c",
    chipClass: "chip--gold",
    chips: ["P2P Encrypted", "No Server", "Short-code Pairing", "E2E by Default"],
    github: "https://github.com/prashantkeshr/drtajl26.n",
    subdomain: "https://connect.dhurta.com",
    version: "v1.0.0",
  },
  {
    id: "setu",
    name: "Dhurta Setu",
    icon: Search,
    desc: "A hand-curated web index and private search engine. No ad auctions, no tracking, no algorithmic manipulation.",
    accent: "#4a9eff",
    chipClass: "chip--blue",
    chips: ["No Tracking", "Open Index", "No Ads", "Curated Web"],
    github: "https://github.com/prashantkeshr/drtajl26.n",
    subdomain: "https://setu.dhurta.com",
    version: "v1.0.0",
  },
];

export default function ProductDownloads() {
  return (
    <section id="downloads" style={{ padding: "7rem 0", background: "var(--navy)" }}>
      <div className="container">
        <p className="section-label" style={{ color: "var(--teal)", marginBottom: "1rem" }}>The Ecosystem</p>
        <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
          Three tools. One mission.
        </h2>
        <p style={{ color: "var(--gray-light)", maxWidth: "36rem", marginBottom: "3.5rem", lineHeight: 1.65 }}>
          Independently useful, deeply integrated. Each tool is free, open-source, and built on the same principle — you are in control.
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
                    <div style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "0.875rem",
                      background: `${p.accent}18`,
                      border: `1px solid ${p.accent}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: p.accent,
                    }}>
                      <p.icon size={24} strokeWidth={1.5} />
                    </div>
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

                    {/* Action links */}
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.55rem",
                      marginTop: "auto",
                      paddingTop: "0.5rem",
                    }}>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          padding: "0.5rem 1.1rem",
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
                        <Code2 size={13} strokeWidth={2} />
                        View on GitHub
                      </a>
                      <a
                        href={p.subdomain}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.5rem 1.1rem",
                          borderRadius: "999px",
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "var(--gray-light)",
                          fontFamily: "var(--font-tech)",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          transition: "border-color 0.2s, transform 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                          e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                          e.currentTarget.style.transform = "";
                        }}
                      >
                        Learn more
                        <ArrowUpRight size={12} strokeWidth={2} />
                      </a>
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
