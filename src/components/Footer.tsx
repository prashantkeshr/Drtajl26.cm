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

          <div style={{ marginTop: "1.5rem" }}>
            <p style={{ fontSize: "0.82rem", color: "var(--gray-light)", opacity: 0.75, marginBottom: "0.6rem" }}>
              Release updates & security advisories
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="newsletter-form__input"
              />
              <button type="submit" className="newsletter-form__btn">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__col-title">Products</h4>
            <a href="https://products.dhurta.com" target="_blank" rel="noreferrer">All Products ↗</a>
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
            <a href="https://dhurta.com" target="_blank" rel="noreferrer">dhurta.com</a>
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
