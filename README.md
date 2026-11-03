# DotPro Innovation: Freelance Profile

React (Vite) frontend + Node/Express backend. Light theme, animated coding banner, English / Urdu (RTL) switcher.

## Structure

- `client/` React app (Home page + a separate detail page for every project)
- `server/` Express API, project data and PDF generator
  - `server/data/projects.js` English project content (modules, features, live links)
  - `server/data/ur.js` Urdu translations (same slugs)
  - `server/data/profile.js` profile, contact, services, skills
  - `server/public/docs/` generated PDFs (portfolio + one brief per project)

## Run (development)

```bash
cd server && npm install && npm run dev
cd client && npm install && npm run dev
```

Open http://localhost:5173

## Run (production, single server)

```bash
cd client && npm install && npm run build
cd ../server && npm install && npm start
```

Open http://localhost:5000

## Update content

- Edit `server/data/projects.js` (and `server/data/ur.js` for Urdu), then regenerate the PDFs:

```bash
cd server && npm run docs
```

- Live demo link: set the `live` field of a project. Projects with `live: null` show "Demo available on request".
