import { motion } from "framer-motion";

const BADGES = [
  { icon: "⬇", text: "10K+ Downloads" },
  { icon: "⚖", text: "MIT License" },
  { icon: "⊘", text: "Zero Telemetry" },
  { icon: "👤", text: "No Accounts" },
  { icon: "⌥", text: "Open Source" },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-strip__inner">
        {BADGES.map((b, i) => (
          <motion.span
            key={b.text}
            className="trust-badge"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <span style={{ opacity: 0.9 }}>{b.icon}</span>
            {b.text}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
