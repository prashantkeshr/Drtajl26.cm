import { motion } from "framer-motion";
import { Lock, Layers, Cpu, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  {
    icon: Lock,
    label: "Privacy as default",
    desc: "Not a setting you enable. The only mode that exists.",
    color: "var(--teal)",
  },
  {
    icon: Layers,
    label: "Open by nature",
    desc: "Every line of code is public. Trust nothing you can't verify.",
    color: "var(--gold)",
  },
  {
    icon: Cpu,
    label: "Runs on your machine",
    desc: "No subscription. No cloud dependency. No intermediary.",
    color: "var(--blue)",
  },
];

export default function ManifestoSection() {
  return (
    <section
      id="manifesto"
      style={{
        padding: "8rem 0",
        background: "var(--black)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(0,212,170,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section label */}
        <motion.p
          className="section-label"
          style={{ color: "var(--gold)", marginBottom: "1.5rem", textAlign: "center" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our conviction
        </motion.p>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.7rem, 4vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.22,
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "var(--white)" }}>Software should serve </span>
          <span className="text-gradient-gold">its user.</span>
          <br />
          <span style={{ color: "var(--white)" }}>Not the other way </span>
          <span style={{ color: "var(--teal)" }}>around.</span>
        </motion.blockquote>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          style={{
            color: "var(--gray-light)",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto 4rem",
          }}
        >
          The internet became a surveillance machine. Dhurta builds tools that return control — your connection, your data, your identity. Free and open source, always.
        </motion.p>

        {/* Three pillars */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          maxWidth: "800px",
          margin: "0 auto 4rem",
        }}>
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: EASE }}
              style={{
                background: "rgba(10,22,40,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.875rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <p.icon size={22} strokeWidth={1.5} style={{ color: p.color }} />
              <p style={{
                fontFamily: "var(--font-tech)",
                fontWeight: 600,
                fontSize: "0.92rem",
                color: "var(--white)",
                margin: 0,
              }}>
                {p.label}
              </p>
              <p style={{
                fontSize: "0.84rem",
                color: "var(--gray-light)",
                lineHeight: 1.6,
                margin: 0,
              }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Read manifesto link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <a
            href="https://dhurta.org"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "var(--font-tech)",
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "var(--teal)",
              borderBottom: "1px solid rgba(0,212,170,0.3)",
              paddingBottom: "0.15rem",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,212,170,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,212,170,0.3)";
            }}
          >
            Read the full story on dhurta.org
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
