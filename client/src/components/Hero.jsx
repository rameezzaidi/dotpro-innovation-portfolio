import { whatsappLink } from "../api.js";
import { useLang } from "../LangContext.jsx";
import CodeRain from "./CodeRain.jsx";
import CodeWindow from "./CodeWindow.jsx";
import Typewriter from "./Typewriter.jsx";
import { ArrowIcon, DownloadIcon, WhatsAppIcon } from "./Icons.jsx";

export default function Hero({ profile, stats }) {
  const { t } = useLang();
  const wa = whatsappLink(profile.whatsappNumber, t("waHello"));

  return (
    <section className="hero">
      <CodeRain />
      <div className="hero-fade" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i className="dot" /> {t("heroEyebrow")}</span>
          <h1>
            {profile.heroTitle.a} <span className="grad">{profile.heroTitle.b}</span>
          </h1>
          <p className="build-line">
            <span className="prompt">&gt;</span> {t("heroBuilding")}: <Typewriter words={t("heroRoles")} />
          </p>
          <p className="lead">{profile.tagline}</p>

          <div className="hero-actions">
            <a href={wa} target="_blank" rel="noreferrer" className="btn btn-wa">
              <WhatsAppIcon /> {t("ctaWhatsApp")}
            </a>
            <a href="#projects" className="btn btn-outline">
              {t("ctaProjects")} <ArrowIcon />
            </a>
            <a href={profile.portfolioDoc} target="_blank" rel="noreferrer" className="btn btn-ghost-dark">
              <DownloadIcon /> {t("ctaPortfolio")}
            </a>
          </div>

          <div className="hero-stats">
            <div><b>{stats.projects}</b><span>{t("statProjects")}</span></div>
            <div><b>{stats.demos}</b><span>{t("statDemos")}</span></div>
            <div><b>{stats.modules}</b><span>{t("statModules")}</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <CodeWindow />
          <span className="float f1" dir="ltr">Python</span>
          <span className="float f2" dir="ltr">React</span>
          <span className="float f3" dir="ltr">Node.js</span>
          <span className="float f4" dir="ltr">PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}
