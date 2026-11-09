import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import HeroScene from "../three/HeroScene";
import "./Hero.css";

const EASE = [0.22, 1, 0.36, 1] as const;
const DL_URL = "https://github.com/prashantkeshr/drtajl26.n/releases";

type OS = "windows" | "mac" | "linux" | null;

const OS_BUTTONS: { label: string; os: Exclude<OS, null>; icon: string; primary: boolean }[] = [
  { label: "Windows", os: "windows", icon: "⊞", primary: true },
  { label: "macOS", os: "mac", icon: "", primary: false },
  { label: "Linux", os: "linux", icon: "🐧", primary: false },
];

export default function HeroProducts() {
  const ref = useRef<HTMLElement>(null);
  const heroVisible = useInView(ref, { amount: 0.05 });
  const [platform, setPlatform] = useState<OS>(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/Win/.test(ua)) setPlatform("windows");
    else if (/Mac/.test(ua)) setPlatform("mac");
    else setPlatform("linux");
  }, []);

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
            FREE · OPEN SOURCE · SECURE
          </motion.p>

          <h1 className="hero__title">
            <span className="hero__line">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
              >
                Build Secure.
              </motion.span>
            </span>
            <span className="hero__line">
              <motion.span
                className="text-gradient-gold"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.37, ease: EASE }}
              >
                Work Free.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          >
            Three tools. Zero surveillance. Full control.
          </motion.p>

          <motion.div
            className="hero__download-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          >
            {OS_BUTTONS.map(({ label, os, icon, primary }) => (
              <a
                key={os}
                href={DL_URL}
                target="_blank"
                rel="noreferrer"
                className={[
                  "hero__dl-btn",
                  primary ? "hero__dl-btn--primary" : "hero__dl-btn--ghost",
                  platform === os ? "hero__dl-btn--highlighted" : "",
                ].filter(Boolean).join(" ")}
              >
                <span>{icon}</span>
                {label}
              </a>
            ))}
          </motion.div>

          <motion.div
            style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.6rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {["10K+ downloads", "MIT License", "Zero telemetry"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  color: "var(--gray-light)",
                  opacity: 0.72,
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
