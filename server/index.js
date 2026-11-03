const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");

const profile = require("./data/profile");
const projects = require("./data/projects");
const ur = require("./data/ur");

const app = express();
const api = express.Router();
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

api.get("/health", (req, res) => res.json({ ok: true, languages: SUPPORTED }));

api.get("/profile", (req, res) => res.json(localizeProfile(getLang(req))));

api.get("/projects", (req, res) => {
  const lang = getLang(req);
  res.json(projects.map((p) => localizeProject(p, lang)));
});

api.get("/projects/:slug", (req, res) => {
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

// Mounted at /api, and also at / in case the platform strips the /api prefix
app.use("/api", api);
app.use("/", api);

// PDF documents live in client/public/docs (generate with: npm run docs)
// Local / self-hosted: serve them and the React build from this server.
// On Vercel the client service serves both, so this is skipped there.
if (!process.env.VERCEL) {
  const docsDir = path.join(__dirname, "..", "client", "public", "docs");
  app.use("/docs", express.static(docsDir));

  const clientDist = path.join(__dirname, "..", "client", "dist");
  if (fs.existsSync(clientDist)) {
    app.use(express.static(clientDist));
    app.get(/^\/(?!api|docs).*/, (req, res) => res.sendFile(path.join(clientDist, "index.html")));
  }
}

// Vercel imports the app; locally we start the listener.
if (require.main === module) {
  app.listen(PORT, () => console.log(`DotPro portfolio server running on http://localhost:${PORT}`));
}

module.exports = app;
