import { useState } from "react";

export default function EcosystemBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "1.5rem",
      background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(0, 212, 170, 0.2)",
      padding: "0.5rem 1.5rem",
      fontSize: "0.75rem",
      color: "var(--gray-light)",
    }}>
      <span style={{ color: "var(--teal)", fontWeight: 600, fontFamily: "var(--font-tech)", letterSpacing: "0.1em" }}>
        DHURTA ECOSYSTEM
      </span>
      <a
        href="https://dhurta.org"
        target="_blank"
        rel="noreferrer"
        style={{ transition: "color 0.2s" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
      >
        Group → dhurta.org
      </a>
      <a
        href="https://dhurta.in"
        target="_blank"
        rel="noreferrer"
        style={{ transition: "color 0.2s" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--saffron)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
      >
        India → dhurta.in
      </a>
      <button
        onClick={() => setDismissed(true)}
        style={{ marginLeft: "1rem", color: "var(--gray-dark)", fontSize: "1rem", lineHeight: 1 }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--white)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray-dark)"; }}
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
