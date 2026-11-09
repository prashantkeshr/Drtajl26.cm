import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    icon: "🛡",
    title: "Encrypted by Default",
    desc: "Every connection, every file, every session — encrypted without configuration.",
    bg: "rgba(0, 212, 170, 0.1)",
  },
  {
    icon: "☁",
    title: "No Cloud Dependency",
    desc: "P2P-first. No relay servers. Your data never touches infrastructure you don't own.",
    bg: "rgba(74, 158, 255, 0.1)",
  },
  {
    icon: "</>",
    title: "Open Source",
    desc: "Full source on GitHub. Audit it. Fork it. Contribute to it.",
    bg: "rgba(201, 168, 76, 0.1)",
  },
  {
    icon: "💻",
    title: "Cross-Platform",
    desc: "Windows, macOS, Linux. One codebase, full feature parity across every OS.",
    bg: "rgba(0, 212, 170, 0.1)",
  },
  {
    icon: "🚫",
    title: "Zero Accounts Needed",
    desc: "No email. No sign-up. No identity linked to your usage.",
    bg: "rgba(74, 158, 255, 0.1)",
  },
  {
    icon: "🏠",
    title: "Self-Hostable",
    desc: "Run your own relay for Setu and Connect. Full deployment guides included.",
    bg: "rgba(201, 168, 76, 0.1)",
  },
];

export default function FeaturesGrid() {
  return (
    <section style={{ padding: "6rem 0", background: "var(--navy)" }}>
      <div className="container">
        <p className="section-label" style={{ color: "var(--teal)", marginBottom: "1rem" }}>Why Dhurta</p>
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>
          Sovereignty by design.
        </h2>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              whileHover={{ y: -4 }}
              style={{
                background: "rgba(10, 22, 40, 0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.875rem",
                padding: "1.75rem",
                cursor: "default",
                transition: "border-color 0.2s",
              }}
            >
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "0.75rem",
                background: f.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                marginBottom: "1.1rem",
                fontFamily: "var(--font-mono)",
              }}>
                {f.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-tech)",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--white)",
                marginBottom: "0.5rem",
              }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.87rem", color: "var(--gray-light)", lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
