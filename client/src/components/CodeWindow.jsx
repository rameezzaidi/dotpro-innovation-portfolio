import { useEffect, useMemo, useState } from "react";

const FILES = [
  {
    name: "models.py",
    lang: "Python",
    code: `from django.db import models

class Tenant(models.Model):
    name = models.CharField(max_length=120)
    plan = models.CharField(max_length=20)
    is_active = models.BooleanField(default=True)

def create_invoice(tenant, items):
    total = sum(i.price * i.qty for i in items)
    # one invoice per sale, per tenant
    return Invoice.objects.create(tenant=tenant, total=total)
`
  },
  {
    name: "server.js",
    lang: "JavaScript",
    code: `const express = require("express");
const app = express();

app.get("/api/projects", async (req, res) => {
  const rows = await db.query("SELECT * FROM projects");
  res.json(rows); // modules, stack, live demo
});

app.listen(5000, () => console.log("API ready"));
`
  },
  {
    name: "Dashboard.jsx",
    lang: "React",
    code: `export default function Dashboard({ sales }) {
  const [range, setRange] = useState("week");
  const total = sales.reduce((s, x) => s + x.amount, 0);

  return (
    <Chart data={sales} range={range} total={total} />
  );
}
`
  }
];

const TOKEN_RE =
  /("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|(#.*|\/\/.*)|\b(from|import|class|def|return|const|await|async|export|default|function|new|for|in|if|else|require)\b|(\b\d+\b)|(\b[A-Za-z_]\w*(?=\())/g;

function tokenize(code) {
  const tokens = [];
  let last = 0;
  let m;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(code))) {
    if (m.index > last) tokens.push({ cls: "", text: code.slice(last, m.index) });
    const cls = m[1] ? "tk-str" : m[2] ? "tk-com" : m[3] ? "tk-kw" : m[4] ? "tk-num" : "tk-fn";
    tokens.push({ cls, text: m[0] });
    last = m.index + m[0].length;
  }
  if (last < code.length) tokens.push({ cls: "", text: code.slice(last) });
  return tokens;
}

// A light "editor" window that types code in a loop (decorative).
export default function CodeWindow() {
  const [fi, setFi] = useState(0);
  const [n, setN] = useState(0);
  const reduce = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);
  const file = FILES[fi];
  const tokens = useMemo(() => tokenize(file.code), [file]);
  const done = n >= file.code.length;

  useEffect(() => {
    let timer;
    if (reduce) {
      setN(file.code.length);
      return undefined;
    }
    if (!done) {
      const ch = file.code[n];
      timer = setTimeout(() => setN(n + 1), ch === "\n" ? 150 : 22 + Math.random() * 34);
    } else {
      timer = setTimeout(() => {
        setFi((fi + 1) % FILES.length);
        setN(0);
      }, 2400);
    }
    return () => clearTimeout(timer);
  }, [fi, n, done, file, reduce]);

  // Render only the characters typed so far, keeping token colours.
  const spans = [];
  let used = 0;
  for (let i = 0; i < tokens.length && used < n; i++) {
    const part = tokens[i].text.slice(0, n - used);
    used += part.length;
    spans.push(
      <span key={i} className={tokens[i].cls}>
        {part}
      </span>
    );
  }
  const typed = file.code.slice(0, n);
  const lines = typed.split("\n");

  return (
    <div className="win" dir="ltr" aria-hidden="true">
      <div className="win-bar">
        <span className="win-dots"><i /><i /><i /></span>
        <div className="win-tabs">
          {FILES.map((f, i) => (
            <span key={f.name} className={`win-tab ${i === fi ? "on" : ""}`}>{f.name}</span>
          ))}
        </div>
      </div>
      <div className="win-body">
        <div className="gutter">
          {lines.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre className="code">
          {spans}
          <span className="caret" />
        </pre>
      </div>
      <div className="win-status">
        <span className={done ? "ok" : "busy"}>{done ? "✓ Saved" : "● Typing…"}</span>
        <span>{file.lang}</span>
        <span>Ln {lines.length}</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}
