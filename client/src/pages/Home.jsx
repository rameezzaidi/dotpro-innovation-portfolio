import { useEffect, useMemo, useState } from "react";
import { getProjects, whatsappLink } from "../api.js";
import { useLang } from "../LangContext.jsx";
import Hero from "../components/Hero.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { DownloadIcon, LinkedInIcon, UpworkIcon, WhatsAppIcon } from "../components/Icons.jsx";

export default function Home({ profile }) {
  const { lang, t } = useLang();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setFilter(null);
    setError(false);
    getProjects(lang).then(setProjects).catch(() => setError(true));
  }, [lang]);

  const types = useMemo(() => [...new Set(projects.map((p) => p.type))], [projects]);
  const visible = filter ? projects.filter((p) => p.type === filter) : projects;

  const stats = useMemo(
    () => ({
      projects: projects.length,
      demos: projects.filter((p) => p.live).length,
      modules: projects.reduce((sum, p) => sum + p.modules.length, 0)
    }),
    [projects]
  );

  const waHello = whatsappLink(profile.whatsappNumber, t("waHello"));

  return (
    <>
      <Hero profile={profile} stats={stats} />

      <section id="about" className="section">
        <div className="container narrow">
          <h2>{t("aboutTitle")}</h2>
          <p className="lead-dark">{profile.about}</p>
        </div>
      </section>

      <section id="services" className="section alt">
        <div className="container">
          <h2>{t("servicesTitle")}</h2>
          <div className="grid grid-4">
            {profile.services.map((s) => (
              <div key={s.title} className="panel">
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-head">
            <h2>{t("projectsTitle")}</h2>
            <div className="filters">
              <button className={`filter ${filter === null ? "active" : ""}`} onClick={() => setFilter(null)}>
                {t("all")}
              </button>
              {types.map((type) => (
                <button key={type} className={`filter ${filter === type ? "active" : ""}`} onClick={() => setFilter(type)}>
                  {type}
                </button>
              ))}
            </div>
          </div>
          {error && <p className="muted">{t("projectsLoadError")}</p>}
          <div className="grid grid-3">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="container">
          <h2>{t("skillsTitle")}</h2>
          <div className="grid grid-4">
            {profile.skills.map((g) => (
              <div key={g.group} className="panel">
                <h3>{g.group}</h3>
                <div className="stack">
                  {g.items.map((i) => (
                    <span key={i} className="tag">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="cta">
            <h2>{t("contactTitle")}</h2>
            <p>{t("contactText")}</p>
            <div className="hero-actions center">
              <a href={waHello} target="_blank" rel="noreferrer" className="btn btn-wa">
                <WhatsAppIcon /> <span dir="ltr">{profile.phone}</span>
              </a>
              <a href={profile.portfolioDoc} target="_blank" rel="noreferrer" className="btn btn-light">
                <DownloadIcon /> {t("ctaPortfolio")}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-light">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href={profile.upwork} target="_blank" rel="noreferrer" className="btn btn-light">
                <UpworkIcon /> Upwork
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
