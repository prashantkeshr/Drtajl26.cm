import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "For personal use and exploration.",
    features: [
      "2 devices",
      "Dhurta Browser",
      "Dhurta Connect (community)",
      "Community support",
      "Open source access",
    ],
    cta: "Get Started Free",
    href: "https://github.com/prashantkeshr/drtajl26.n/releases",
    accent: "var(--gray-light)",
    glow: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    desc: "For professionals who demand more.",
    features: [
      "5 devices",
      "All Free features",
      "Priority support",
      "Advanced fingerprint protection",
      "Chakra Shield premium routing",
      "Omni dashboard sync",
    ],
    cta: "Start Pro Trial",
    href: "#",
    accent: "var(--teal)",
    glow: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    desc: "For teams requiring complete sovereignty.",
    features: [
      "Unlimited devices",
      "All Pro features",
      "SLA guarantee",
      "Dedicated support team",
      "Custom deployment",
      "Compliance reporting",
    ],
    cta: "Contact Sales",
    href: "mailto:contact@dhurta.org",
    accent: "var(--blue)",
    glow: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" style={{ padding: "7rem 0", background: "var(--black)" }}>
      <div className="container">
        <p className="section-label" style={{ color: "var(--gold)", marginBottom: "1rem" }}>Pricing</p>
        <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
          Simple, honest plans.
        </h2>
        <p style={{ color: "var(--gray-light)", maxWidth: "34rem", marginBottom: "3.5rem", lineHeight: 1.65 }}>
          No surveillance capitalism. Pay for the features you need, not for your data.
        </p>

        <div className="pricing-grid">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "1rem",
                padding: tier.glow ? "2rem" : "2rem",
                background: tier.glow
                  ? "linear-gradient(135deg, rgba(0,212,170,0.1), rgba(10,22,40,0.95))"
                  : "rgba(10, 22, 40, 0.6)",
                border: tier.glow
                  ? "1px solid rgba(0,212,170,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
                transform: tier.glow ? "scale(1.03)" : "scale(1)",
                transformOrigin: "center",
                zIndex: tier.glow ? 1 : 0,
                boxShadow: tier.glow ? "0 0 60px -20px rgba(0,212,170,0.4)" : "none",
              }}
            >
              {tier.glow && (
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, var(--teal), transparent)",
                }} />
              )}
              {tier.glow && (
                <span style={{
                  position: "absolute",
                  top: "1rem", right: "1rem",
                  fontSize: "0.65rem",
                  fontFamily: "var(--font-tech)",
                  fontWeight: 600,
                  color: "var(--teal)",
                  background: "rgba(0,212,170,0.12)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(0,212,170,0.3)",
                }}>
                  POPULAR
                </span>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{
                  fontFamily: "var(--font-tech)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: tier.accent,
                  marginBottom: "0.5rem",
                }}>
                  {tier.name}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700 }}>
                    {tier.price}
                  </span>
                  <span style={{ color: "var(--gray-light)", fontSize: "0.85rem" }}>{tier.period}</span>
                </div>
                <p style={{ color: "var(--gray-light)", fontSize: "0.88rem", marginTop: "0.5rem" }}>
                  {tier.desc}
                </p>
              </div>

              <ul style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                marginBottom: "2rem",
              }}>
                {tier.features.map((f) => (
                  <li key={f} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.88rem",
                    color: "var(--gray-light)",
                  }}>
                    <span style={{ color: tier.accent, fontSize: "0.75rem", flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                target={tier.href.startsWith("http") ? "_blank" : undefined}
                rel={tier.href.startsWith("http") ? "noreferrer" : undefined}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "999px",
                  background: tier.glow ? "var(--teal)" : "transparent",
                  border: tier.glow ? "1px solid transparent" : `1px solid ${tier.accent}55`,
                  color: tier.glow ? "var(--black)" : tier.accent,
                  fontFamily: "var(--font-tech)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "all 0.2s",
                  boxShadow: tier.glow ? "0 0 20px rgba(0,212,170,0.3)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (tier.glow) {
                    e.currentTarget.style.background = "rgba(0,212,170,0.85)";
                    e.currentTarget.style.boxShadow = "0 0 36px rgba(0,212,170,0.5)";
                  } else {
                    e.currentTarget.style.background = `${tier.accent}22`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (tier.glow) {
                    e.currentTarget.style.background = "var(--teal)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,170,0.3)";
                  } else {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
