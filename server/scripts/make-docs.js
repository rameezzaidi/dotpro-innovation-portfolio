// Generates the PDF documents: one brief per project + the full portfolio.
// Run with: npm run docs   (output: server/public/docs)
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const profile = require("../data/profile");
const projects = require("../data/projects");

const OUT = path.join(__dirname, "..", "public", "docs");
fs.mkdirSync(OUT, { recursive: true });

const NAVY = "#0b1f4b";
const BLUE = "#2563eb";
const INK = "#0f172a";
const MUTED = "#5b6475";
const LINE = "#e4e9f2";
const MARGIN = 50;
const WA = `https://wa.me/${profile.whatsappNumber}`;

function newDoc(file, info) {
  const doc = new PDFDocument({ size: "A4", margin: MARGIN, bufferPages: true, info });
  doc.pipe(fs.createWriteStream(path.join(OUT, file)));
  return doc;
}

const width = (doc) => doc.page.width - MARGIN * 2;

function ensure(doc, needed) {
  if (doc.y + needed > doc.page.height - 70) doc.addPage();
}

function band(doc, label) {
  doc.rect(0, 0, doc.page.width, 78).fill(NAVY);
  doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(15).text("DotPro Innovation", MARGIN, 30, { lineBreak: false });
  doc.font("Helvetica").fontSize(10).fillColor("#b9c8ee").text(label, MARGIN, 33, { width: width(doc), align: "right", lineBreak: false });
  doc.x = MARGIN;
  doc.y = 110;
}

function heading(doc, text) {
  ensure(doc, 60);
  doc.moveDown(0.8);
  doc.font("Helvetica-Bold").fontSize(14).fillColor(NAVY).text(text, MARGIN, doc.y);
  const y = doc.y + 3;
  doc.moveTo(MARGIN, y).lineTo(MARGIN + 46, y).lineWidth(2.5).strokeColor(BLUE).stroke();
  doc.y = y + 10;
  doc.x = MARGIN;
}

function para(doc, text, opts = {}) {
  doc.font("Helvetica").fontSize(opts.size || 10.5).fillColor(opts.color || INK).text(text, MARGIN, doc.y, { width: width(doc), lineGap: 3, ...opts.extra });
  doc.moveDown(0.5);
}

function bullets(doc, items) {
  items.forEach((item) => {
    ensure(doc, 30);
    const y = doc.y;
    doc.font("Helvetica-Bold").fontSize(10.5).fillColor(BLUE).text("•", MARGIN + 2, y, { lineBreak: false });
    doc.font("Helvetica").fontSize(10.5).fillColor(INK).text(item, MARGIN + 18, y, { width: width(doc) - 18, lineGap: 2 });
    doc.moveDown(0.25);
  });
  doc.x = MARGIN;
}

function link(doc, label, url) {
  doc.font("Helvetica").fontSize(10.5).fillColor(BLUE).text(label, MARGIN, doc.y, { link: url, underline: true, width: width(doc) });
  doc.moveDown(0.3);
}

function contactBlock(doc) {
  ensure(doc, 130);
  heading(doc, "Contact");
  para(doc, `Phone / WhatsApp: ${profile.phone}`);
  link(doc, "WhatsApp: " + WA, WA);
  link(doc, "LinkedIn: " + profile.linkedin, profile.linkedin);
  link(doc, "Upwork: " + profile.upwork, profile.upwork);
}

function footers(doc, label) {
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    // Footer sits inside the bottom margin; zero it so pdfkit doesn't add a new page.
    doc.page.margins.bottom = 0;
    const y = doc.page.height - 40;
    doc.moveTo(MARGIN, y - 8).lineTo(doc.page.width - MARGIN, y - 8).lineWidth(0.5).strokeColor(LINE).stroke();
    doc.font("Helvetica").fontSize(8.5).fillColor(MUTED);
    doc.text(`DotPro Innovation  |  ${label}`, MARGIN, y, { lineBreak: false });
    doc.text(`Page ${i + 1} of ${range.count}`, MARGIN, y, { width: width(doc), align: "right", lineBreak: false });
  }
}

// ---------- One brief per project ----------
projects.forEach((p) => {
  const doc = newDoc(`${p.slug}.pdf`, { Title: `${p.title} - Project Brief`, Author: "DotPro Innovation" });
  band(doc, "Project Brief");

  doc.font("Helvetica-Bold").fontSize(25).fillColor(NAVY).text(p.title, MARGIN, doc.y, { width: width(doc) });
  doc.moveDown(0.2);
  doc.font("Helvetica-Bold").fontSize(10).fillColor(p.accent).text(`${p.category.toUpperCase()}   |   ${p.type.toUpperCase()}`);
  doc.moveDown(0.5);
  para(doc, p.tagline, { size: 12, color: MUTED });

  heading(doc, "Overview");
  para(doc, p.overview);

  if (p.live) {
    heading(doc, "Live Demo");
    link(doc, p.live, p.live);
  }

  heading(doc, "Key Features");
  bullets(doc, p.features);

  heading(doc, `Modules in Detail (${p.modules.length})`);
  p.modules.forEach((m, i) => {
    ensure(doc, 56);
    doc.font("Helvetica-Bold").fontSize(11.5).fillColor(NAVY).text(`${i + 1}. ${m.name}`, MARGIN, doc.y, { width: width(doc) });
    doc.font("Helvetica").fontSize(10.5).fillColor(INK).text(m.desc, MARGIN + 16, doc.y + 1, { width: width(doc) - 16, lineGap: 2 });
    doc.moveDown(0.6);
    doc.x = MARGIN;
  });

  heading(doc, "Tech Stack");
  para(doc, p.stack.join("   |   "));

  contactBlock(doc);
  footers(doc, p.title);
  doc.end();
});

// ---------- Full portfolio ----------
(function portfolio() {
  const doc = newDoc("DotPro-Innovation-Portfolio.pdf", { Title: "DotPro Innovation - Portfolio", Author: "DotPro Innovation" });

  // Cover
  doc.rect(0, 0, doc.page.width, 330).fill(NAVY);
  doc.rect(0, 330, doc.page.width, 6).fill(BLUE);
  doc.fillColor("#9db8f5").font("Helvetica-Bold").fontSize(11).text("FREELANCE PORTFOLIO", MARGIN, 120);
  doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(38).text("DotPro Innovation", MARGIN, 145);
  doc.font("Helvetica").fontSize(15).fillColor("#d6e2ff").text(profile.title, MARGIN, 200, { width: width(doc) });
  doc.font("Helvetica").fontSize(11.5).fillColor("#b9c8ee").text(profile.tagline, MARGIN, 250, { width: width(doc) - 80 });
  doc.y = 380;
  doc.x = MARGIN;
  heading(doc, "About");
  para(doc, profile.about);

  heading(doc, "Services");
  profile.services.forEach((s) => {
    ensure(doc, 44);
    doc.font("Helvetica-Bold").fontSize(11).fillColor(NAVY).text(s.title, MARGIN, doc.y);
    para(doc, s.text, { color: MUTED });
  });

  heading(doc, "Skills & Stack");
  profile.skills.forEach((g) => {
    ensure(doc, 30);
    doc.font("Helvetica-Bold").fontSize(10.5).fillColor(NAVY).text(`${g.group}: `, MARGIN, doc.y, { continued: true });
    doc.font("Helvetica").fillColor(INK).text(g.items.join(", "));
    doc.moveDown(0.3);
  });

  // Projects
  doc.addPage();
  band(doc, "Selected Projects");
  projects.forEach((p, idx) => {
    ensure(doc, 170);
    doc.moveDown(0.6);
    doc.font("Helvetica-Bold").fontSize(15).fillColor(NAVY).text(`${idx + 1}. ${p.title}`, MARGIN, doc.y, { width: width(doc) });
    doc.font("Helvetica-Bold").fontSize(9).fillColor(p.accent).text(`${p.category.toUpperCase()}   |   ${p.type.toUpperCase()}`);
    doc.moveDown(0.3);
    para(doc, p.overview);
    doc.font("Helvetica-Bold").fontSize(10).fillColor(NAVY).text("Modules: ", MARGIN, doc.y, { continued: true });
    doc.font("Helvetica").fillColor(INK).text(p.modules.map((m) => m.name).join(", "), { width: width(doc) });
    doc.moveDown(0.3);
    doc.font("Helvetica-Bold").fillColor(NAVY).text("Stack: ", MARGIN, doc.y, { continued: true });
    doc.font("Helvetica").fillColor(INK).text(p.stack.join(", "));
    doc.moveDown(0.3);
    if (p.live) link(doc, "Live demo: " + p.live, p.live);
    doc.moveTo(MARGIN, doc.y + 4).lineTo(doc.page.width - MARGIN, doc.y + 4).lineWidth(0.5).strokeColor(LINE).stroke();
    doc.moveDown(0.8);
  });

  contactBlock(doc);
  footers(doc, "Portfolio");
  doc.end();
})();

console.log(`PDFs written to ${OUT}`);
