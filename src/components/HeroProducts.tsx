import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ExternalLink } from "lucide-react";
import HeroScene from "../three/HeroScene";
import "./Hero.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroProducts() {
  const ref = useRef<HTMLElement>(null);
  const heroVisible = useInView(ref, { amount: 0.05 });

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="container hero-two-col">
        {/* Left column — content */}
        <motion.div className="hero-two-col__left">
          <motion.p
            className="hero__kicker section-label"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          >
            DHURTA — धूर्त, CLEVER
          </motion.p>

          <h1 className="hero__title">
            <span className="hero__line">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
              >
                A different kind
              </motion.span>
            </span>
            <span className="hero__line">
              <motion.span
                className="text-gradient-gold"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.37, ease: EASE }}
              >
                of internet.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          >
            Three open-source tools. One conviction — your data belongs to you, not to platforms.
          </motion.p>

          <motion.div
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          >
            <a
              href="#products"
              className="hero__dl-btn hero__dl-btn--primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              Explore the ecosystem
              <ArrowDown size={15} />
            </a>
            <a
              href="https://github.com/prashantkeshr/drtajl26.n"
              target="_blank"
              rel="noreferrer"
              className="hero__dl-btn hero__dl-btn--ghost"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <ExternalLink size={14} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.8rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {["MIT License", "Zero telemetry", "No accounts"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  color: "var(--gray-light)",
                  opacity: 0.6,
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — 3D scene */}
        <motion.div
          className="hero-two-col__right"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
        >
          <HeroScene active={heroVisible} />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 1,
              borderRadius: "1rem",
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(5, 13, 26, 0.65) 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
