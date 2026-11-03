import { useState } from "react";
import { Link } from "react-router-dom";
import { whatsappLink } from "../api.js";
import { useLang } from "../LangContext.jsx";
import { WhatsAppIcon } from "./Icons.jsx";

export default function Navbar({ profile }) {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const wa = whatsappLink(profile.whatsappNumber, t("waHello"));

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            DotPro <b>Innovation</b>
          </span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/#about" onClick={close}>{t("navAbout")}</Link>
          <Link to="/#services" onClick={close}>{t("navServices")}</Link>
          <Link to="/#projects" onClick={close}>{t("navProjects")}</Link>
          <Link to="/#skills" onClick={close}>{t("navSkills")}</Link>
          <Link to="/#contact" onClick={close}>{t("navContact")}</Link>

          <div className="lang-switch" role="group" aria-label="Language">
            <button type="button" className={lang === "en" ? "active" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              EN
            </button>
            <button type="button" className={lang === "ur" ? "active" : ""} aria-pressed={lang === "ur"} onClick={() => setLang("ur")}>
              اردو
            </button>
          </div>

          <a className="btn btn-wa btn-sm" href={wa} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={16} /> {t("whatsapp")}
          </a>
        </nav>

        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
