const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");

const profile = require("./data/profile");
const projects = require("./data/projects");
const ur = require("./data/ur");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const SUPPORTED = ["en", "ur"];
const getLang = (req) => (SUPPORTED.includes(req.query.lang) ? req.query.lang : "en");

function localizeProfile(lang) {
  return lang === "ur" ? { ...profile, ...ur.profile } : profile;
}

function localizeProject(project, lang) {
  const base = { ...project, doc: `/docs/${project.slug}.pdf` };
  return lang === "ur" ? { ...base, ...(ur.projects[project.slug] || {}) } : base;
}

app.get("/api/health", (req, res) => res.json({ ok: true, languages: SUPPORTED }));

app.get("/api/profile", (req, res) => res.json(localizeProfile(getLang(req))));

app.get("/api/projects", (req, res) => {
  const lang = getLang(req);
  res.json(projects.map((p) => localizeProject(p, lang)));
});

app.get("/api/projects/:slug", (req, res) => {
  const lang = getLang(req);
  const index = projects.findIndex((p) => p.slug === req.params.slug);
  if (index === -1) return res.status(404).json({ error: "Project not found" });

  const brief = (p) => ({ slug: p.slug, title: localizeProject(p, lang).title });
  res.json({
    project: localizeProject(projects[index], lang),
    prev: index > 0 ? brief(projects[index - 1]) : null,
    next: index < projects.length - 1 ? brief(projects[index + 1]) : null
  });
});

// PDF documents (generate with: npm run docs)
app.use("/docs", express.static(path.join(__dirname, "public", "docs")));

// Production: serve the React build
const clientDist = path.join(__dirname, "..", "client", "dist");
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get(/^\/(?!api|docs).*/, (req, res) => res.sendFile(path.join(clientDist, "index.html")));
}

app.listen(PORT, () => console.log(`DotPro portfolio server running on http://localhost:${PORT}`));
