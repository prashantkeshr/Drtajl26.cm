import { motion } from "framer-motion";
import { ShieldCheck, Code2, EyeOff, UserX, Globe } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, text: "Privacy Native" },
  { icon: Code2, text: "Open Source" },
  { icon: EyeOff, text: "Zero Telemetry" },
  { icon: UserX, text: "No Accounts" },
  { icon: Globe, text: "Sovereign Infrastructure" },
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
            <b.icon size={13} strokeWidth={1.75} style={{ opacity: 0.85, flexShrink: 0 }} />
            {b.text}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
