import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject, whatsappLink } from "../api.js";
import { useLang } from "../LangContext.jsx";
import { ArrowIcon, DownloadIcon, ExternalIcon, LinkedInIcon, UpworkIcon, WhatsAppIcon } from "../components/Icons.jsx";
import NotFound from "./NotFound.jsx";

export default function ProjectDetail({ profile }) {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const [data, setData] = useState(null);
  const [state, setState] = useState("loading");

  useEffect(() => {
    setState((s) => (s === "ready" ? s : "loading"));
    getProject(slug, lang)
      .then((d) => {
        setData(d);
        setState("ready");
        document.title = `${d.project.title} | DotPro Innovation`;
      })
      .catch((e) => setState(e.status === 404 ? "notfound" : "error"));
    return () => {
      document.title = "DotPro Innovation | Freelance Software & SaaS Developer";
    };
  }, [slug, lang]);

  if (state === "loading") return <div className="center-screen">{t("loading")}</div>;
  if (state === "notfound") return <NotFound />;
  if (state === "error" || !data) return <div className="center-screen">{t("projectError")}</div>;

  const { project, prev, next } = data;
  const wa = whatsappLink(profile.whatsappNumber, t("waProject", { title: project.title }));

  return (
    <article style={{ "--accent": project.accent }}>
      <section className="detail-hero">
        <div className="container">
          <Link to="/#projects" className="back">{t("back")}</Link>
          <div className="card-top">
            <span className="chip chip-accent">{project.category}</span>
            <span className="chip">{project.type}</span>
            {project.live && <span className="chip chip-live"><i className="dot" /> {t("liveDemo")}</span>}
          </div>
          <h1>{project.title}</h1>
          <p className="lead-dark">{project.tagline}</p>
          <div className="hero-actions">
            <a href={wa} target="_blank" rel="noreferrer" className="btn btn-wa">
              <WhatsAppIcon /> {t("ctaWhatsApp")}
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                {t("liveDemo")} <ExternalIcon />
              </a>
            )}
            <a href={project.doc} target="_blank" rel="noreferrer" className="btn btn-outline">
              <DownloadIcon /> {t("brief")}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div>
            <h2>{t("overview")}</h2>
            <p className="lead-dark">{project.overview}</p>

            <h2 className="mt">{t("keyFeatures")}</h2>
            <ul className="checks">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <aside className="side">
            <div className="panel">
              <h3>{t("techStack")}</h3>
              <div className="stack">
                {project.stack.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="panel">
              <h3>{t("liveDemo")}</h3>
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer" className="demo-link" dir="ltr">
                  {project.live.replace(/^https?:\/\//, "")} <ExternalIcon size={14} />
                </a>
              ) : (
                <p className="muted small">{t("demoOnRequest")}</p>
              )}
            </div>

            <div className="panel panel-cta">
              <h3>{t("needSimilar")}</h3>
              <p className="muted">{t("needSimilarText")}</p>
              <a href={wa} target="_blank" rel="noreferrer" className="btn btn-wa block">
                <WhatsAppIcon /> {t("whatsapp")}
              </a>
              <div className="side-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
                <a href={profile.upwork} target="_blank" rel="noreferrer"><UpworkIcon /> Upwork</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t("modulesTitle")}</h2>
            <span className="chip chip-accent">{t("modulesCount", { n: project.modules.length })}</span>
          </div>
          <div className="grid grid-3 modules">
            {project.modules.map((m, i) => (
              <div key={m.name} className="module">
                <span className="module-no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{m.name}</h3>
                <p className="muted">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pager">
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="pager-link">
              <small>{t("prev")}</small>
              <span>{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/projects/${next.slug}`} className="pager-link right">
              <small>{t("next")}</small>
              <span>{next.title}</span>
            </Link>
          ) : <span />}
        </div>
      </section>
    </article>
  );
}
