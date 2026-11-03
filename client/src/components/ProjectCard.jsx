import { Link } from "react-router-dom";
import { whatsappLink } from "../api.js";
import { useLang } from "../LangContext.jsx";
import { ArrowIcon, ExternalIcon, WhatsAppIcon } from "./Icons.jsx";

export default function ProjectCard({ project, profile }) {
  const { t } = useLang();
  const wa = whatsappLink(profile.whatsappNumber, t("waCard", { title: project.title }));

  return (
    <article className="card" style={{ "--accent": project.accent }}>
      <div className="card-top">
        <span className="chip chip-accent">{project.category}</span>
        <span className="chip">{project.type}</span>
        {project.live && <span className="chip chip-live"><i className="dot" /> {t("liveDemo")}</span>}
      </div>
      <h3>{project.title}</h3>
      <p className="muted">{project.summary}</p>
      <div className="stack">
        {project.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
      <p className="mod-count">{t("modulesCount", { n: project.modules.length })}</p>
      <div className="card-actions">
        <Link to={`/projects/${project.slug}`} className="btn btn-primary btn-sm">
          {t("details")} <ArrowIcon size={14} />
        </Link>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
            {t("liveDemo")} <ExternalIcon size={14} />
          </a>
        )}
        <a href={wa} target="_blank" rel="noreferrer" className="btn btn-wa btn-sm btn-icon" aria-label={t("whatsapp")} title={t("whatsapp")}>
          <WhatsAppIcon size={17} />
        </a>
      </div>
    </article>
  );
}
