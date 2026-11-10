import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-noise">
      <div className="container footer__inner">
        <motion.div
          className="footer__brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <img src="/assets/dhurta-logo.png" alt="Dhurta trishula mark" className="footer__logo" />
          <p className="footer__tagline text-gradient-gold">
            Sovereign · Privacy-Native · Yours
          </p>
          <p className="footer__blurb">
            Dhurta — धूर्त, "clever". Products built on Trust, Technology and Culture.
          </p>

          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://github.com/prashantkeshr/drtajl26.n"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-tech)",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--teal)",
                border: "1px solid rgba(0,212,170,0.25)",
                padding: "0.4rem 0.9rem",
                borderRadius: "999px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.25)"; }}
            >
              GitHub ↗
            </a>
            <a
              href="https://dhurta.org"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-tech)",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--gold)",
                border: "1px solid rgba(201,168,76,0.25)",
                padding: "0.4rem 0.9rem",
                borderRadius: "999px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; }}
            >
              dhurta.org ↗
            </a>
          </div>
        </motion.div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__col-title">Ecosystem</h4>
            <a href="https://browser.dhurta.com" target="_blank" rel="noreferrer">Dhurta Browser ↗</a>
            <a href="https://connect.dhurta.com" target="_blank" rel="noreferrer">Dhurta Connect ↗</a>
            <a href="https://setu.dhurta.com" target="_blank" rel="noreferrer">Dhurta Setu ↗</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Open Source</h4>
            <a href="https://github.com/prashantkeshr/drtajl26.n" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://github.com/prashantkeshr/drtajl26.n/releases" target="_blank" rel="noreferrer">
              Releases ↗
            </a>
            <a href="https://github.com/prashantkeshr/drtajl26.n/blob/main/LICENSE" target="_blank" rel="noreferrer">
              MIT License ↗
            </a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Dhurta Group</h4>
            <a href="https://dhurta.org" target="_blank" rel="noreferrer">dhurta.org ↗</a>
            <a href="https://dhurta.in" target="_blank" rel="noreferrer">dhurta.in ↗</a>
            <a href="mailto:hello@dhurta.org">hello@dhurta.org</a>
          </div>
        </div>
      </div>
      <div className="footer__legal">
        <div className="container footer__legal-inner">
          <span>
            © {new Date().getFullYear()} Dhurta. Free and open source under the{" "}
            <a
              href="https://github.com/prashantkeshr/drtajl26.n/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--teal)", opacity: 1, textDecoration: "none" }}
            >
              MIT License
            </a>
            . Built without trackers — this page phones no one.
          </span>
          <span className="footer__trident">🔱</span>
        </div>
      </div>
    </footer>
  );
}
