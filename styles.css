:root {
  --bg: #0b1120;
  --panel: #111d31;
  --panel2: #152941;
  --text: #f3f7ff;
  --muted: #8ea4c1;
  --line: #263b56;
  --cyan: #4de0d2;
  --cyan-accent: #38bdf8;
  --violet: #8a7dff;
  --gold: #ffc878;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 95px; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: Manrope, Arial, sans-serif;
  line-height: 1.65;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
button { font-family: inherit; }

/* Ambient background lights */
.ambient {
  position: fixed;
  z-index: -1;
  pointer-events: none;
  border-radius: 50%;
  filter: blur(90px);
  opacity: .13;
}
.ambient-one { width: 360px; height: 360px; background: #4de0d2; top: 100px; left: -180px; }
.ambient-two { width: 420px; height: 420px; background: #8a7dff; right: -220px; top: 700px; }

.section-wrap { width: min(1180px, calc(100% - 48px)); margin-inline: auto; }

/* Header & Nav */
.site-header {
  height: 82px;
  padding: 0 max(24px, calc((100% - 1180px)/2));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(11, 17, 32, .92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(142, 164, 193, .15);
}
.brand { display: flex; align-items: center; gap: 12px; min-width: 0; }
.brand-mark { font-size: 30px; font-weight: 800; letter-spacing: -2px; line-height: 1; }
.brand-mark span { color: var(--cyan); }
.brand-text { font-size: 11px; font-weight: 800; letter-spacing: .09em; line-height: 1.35; }
.brand-text small { display: block; color: var(--muted); font: 9px 'DM Mono', monospace; letter-spacing: .07em; margin-top: 4px; max-width: 310px; }
.nav-links { display: flex; align-items: center; gap: 27px; font-size: 13px; color: #c5d1e2; }
.nav-links a { transition: color .2s; }
.nav-links a:hover, .nav-links a:focus-visible { color: var(--cyan); }
.nav-contact span { color: var(--cyan); }
.menu-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 8px;
  width: 42px;
  height: 38px;
  padding: 9px;
  cursor: pointer;
}
.menu-toggle span { display: block; height: 2px; background: var(--text); margin: 5px 0; }

/* Hero Section */
.hero {
  min-height: calc(100vh - 82px);
  padding-top: 74px;
  padding-bottom: 78px;
  display: grid;
  grid-template-columns: 1fr .92fr;
  align-items: center;
  gap: 54px;
  position: relative;
}
.hero-copy { min-width: 0; }
.eyebrow, .section-kicker, .mono-label, .project-meta { font-family: 'DM Mono', monospace; letter-spacing: .1em; font-size: 11px; }
.eyebrow { color: #b5c6dc; display: flex; align-items: center; gap: 10px; margin-bottom: 24px; }
.status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 14px var(--cyan); }
h1 { font-size: clamp(42px, 5.1vw, 68px); letter-spacing: -.055em; line-height: 1.08; margin: 0 0 24px; font-weight: 800; }
.gradient-text { background: linear-gradient(100deg, var(--cyan), #9b91ff); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero-lede { font-size: 16px; color: #b8c7db; max-width: 610px; margin: 0 0 27px; }
.hero-lede strong { color: var(--text); font-size: 19px; }
.hero-subtitle { display: inline-block; margin-top: 4px; margin-bottom: 8px; color: var(--muted); font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: .06em; line-height: 1.7; }
.hero-actions, .contact-actions { display: flex; flex-wrap: wrap; gap: 11px; align-items: center; }
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 17px;
  border-radius: 9px;
  border: 1px solid var(--line);
  font-size: 13px;
  font-weight: 700;
  transition: transform .2s, border-color .2s, background .2s;
  cursor: pointer;
}
.button:hover { transform: translateY(-2px); border-color: var(--cyan); }
.button-primary { background: var(--cyan); border-color: var(--cyan); color: #07131e; }
.button-secondary { background: rgba(17, 29, 49, .7); color: var(--text); }

/* Dropdown Menu */
.resume-dropdown { position: relative; display: inline-block; }
.resume-toggle { font: inherit; cursor: pointer; }
.resume-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 215px;
  padding: 8px;
  background: #111d31;
  border: 1px solid #33445e;
  border-radius: 12px;
  z-index: 1000;
  box-shadow: 0 12px 32px rgba(0,0,0,.3);
}
.resume-menu[hidden] { display: none !important; }
.resume-menu a { display: block; padding: 12px 14px; color: #f3f7ff; text-decoration: none; border-radius: 8px; white-space: nowrap; }
.resume-menu a:hover, .resume-menu a:focus-visible { background: #20324a; color: #4de0d2; outline: none; }

.hero-meta { display: flex; flex-wrap: wrap; gap: 17px; margin-top: 30px; color: #8ea4c1; font: 10px 'DM Mono', monospace; }
.hero-meta span { display: flex; align-items: center; gap: 7px; }
.meta-line { width: 15px; height: 1px; background: var(--cyan); display: inline-block; }
.hero-art.ece-photo {
  min-height: 470px;
  background-color: #0b1120;
  background-image: linear-gradient(90deg, rgba(11,17,32,.55), rgba(11,17,32,.04)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85");
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(142,164,193,.22);
  border-radius: 18px;
}
.scroll-cue { position: absolute; bottom: 23px; left: 0; display: flex; align-items: center; gap: 10px; color: var(--muted); font: 10px 'DM Mono', monospace; }
.scroll-cue span { height: 26px; width: 1px; background: var(--cyan); }

/* Common Section Blocks */
.section-block {
  padding-top: 90px;
  padding-bottom: 90px;
  border-top: 1px solid rgba(142, 164, 193, .12);
  display: grid;
  grid-template-columns: .75fr 1.25fr;
  gap: 55px;
}
.section-heading { min-width: 0; }
.section-kicker { color: var(--cyan); margin: 0 0 16px; }
h2 { font-size: clamp(32px, 4vw, 48px); line-height: 1.15; letter-spacing: -.045em; margin: 0 0 17px; }
.muted-heading { color: #7e91ac; }
.section-intro { color: var(--muted); font-size: 13px; max-width: 500px; }

/* 01 About */
.about-content { color: #b8c7db; }
.about-lede { font-size: 20px; line-height: 1.55; color: var(--text); margin: 0 0 18px; }
.body-copy { font-size: 14px; }
.education-card { display: flex; gap: 16px; padding: 20px; background: var(--panel); border: 1px solid var(--line); border-radius: 13px; margin-top: 25px; }
.education-icon { flex: 0 0 43px; height: 43px; border-radius: 10px; background: #19354a; color: var(--cyan); display: grid; place-items: center; font-weight: 800; }
.mono-label { color: var(--cyan); font-size: 10px; }
.education-card h3 { margin: 7px 0; font-size: 17px; line-height: 1.35; }
.education-card p { margin: 5px 0; font-size: 12px; color: var(--muted); }
.education-note { padding-top: 8px; }

/* 02 Toolkit / Skills */
#skills, #projects, .credentials-section { display: block; }
#skills .section-heading { max-width: 680px; margin-bottom: 28px; }
.skill-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 15px; }
.skill-card {
  background: linear-gradient(145deg, rgba(17,29,49,.95), rgba(13,23,38,.95));
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 20px;
}
.skill-top { display: flex; justify-content: space-between; color: var(--cyan); }
.skill-index { font: 11px 'DM Mono', monospace; }
.skill-symbol { font-size: 22px; }
.skill-card h3 { font-size: 16px; margin: 10px 0; }
.skill-card p { font-size: 12px; color: #aebdd1; margin: 0; }
.tag-list { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }
.tag-list span { font: 9px 'DM Mono', monospace; color: #a9c1d5; border: 1px solid #2d435d; padding: 5px 7px; border-radius: 5px; }
.fine-print { font-size: 11px; color: #788ba5; margin-top: 18px; }

/* 03 Selected Projects Grid */
#projects.project-section {
  display: block;
  padding-top: 76px;
  padding-bottom: 76px;
  border-top: 1px solid rgba(142,164,193,.12);
}
#projects .project-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 30px;
}
#projects .project-section-indicator {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
#projects .line-deco {
  display: inline-block;
  width: 48px;
  height: 1px;
  background-color: var(--cyan-accent);
  opacity: 0.7;
}
#projects .project-section-number { color: var(--cyan); font: 13px 'DM Mono', monospace; }

#projects .project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 30px;
  row-gap: 0;
  align-items: start;
}
#projects .project-card {
  display: block;
  min-width: 0;
  padding: 24px 0;
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  overflow: visible;
}
#projects .project-card:nth-child(n + 3) { border-top: 1px solid var(--line); }
#projects .project-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, .95fr);
  gap: 15px;
  align-items: center;
}
#projects .project-info { min-width: 0; }
#projects .project-badge-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
#projects .project-index {
  color: var(--cyan-accent);
  font: 13px 'DM Mono', monospace;
}
#projects .index-bar {
  display: inline-block;
  width: 24px;
  height: 1px;
  background-color: var(--cyan-accent);
  opacity: 0.6;
}
#projects .project-meta {
  color: var(--cyan);
  font-size: 10px;
  line-height: 1.6;
}
#projects .project-info h3 {
  margin: 8px 0 10px;
  font-size: 19px;
  line-height: 1.4;
}
#projects .project-info p {
  margin: 0;
  color: #aebdd1;
  font-size: 12px;
  line-height: 1.75;
}
#projects .project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 14px 0;
}
#projects .project-tags span {
  font: 10px 'DM Mono', monospace;
  color: #a9c1d5;
  border: 1px solid #2d435d;
  padding: 5px 7px;
  border-radius: 4px;
}
#projects .text-link {
  display: inline-block;
  margin-top: 4px;
  color: var(--cyan);
  font-size: 12px;
}
#projects .project-diagram {
  display: grid;
  place-items: center;
  min-width: 0;
  width: 100%;
  min-height: 150px;
  background: transparent;
  overflow: hidden;
}
#projects .diagram-svg {
  display: block;
  width: 100%;
  height: auto;
  max-height: 185px;
  overflow: visible;
}

/* 04 Certifications */
.credentials-section .section-heading { margin-bottom: 25px; }
.credentials-grid { border-top: 1px solid var(--line); }
.credential-item {
  display: grid;
  grid-template-columns: 65px 1fr 20px;
  gap: 18px;
  align-items: center;
  padding: 20px 5px;
  border-bottom: 1px solid var(--line);
}
.credential-year { font: 11px 'DM Mono', monospace; color: var(--cyan); }
.credential-item h3 { font-size: 15px; margin: 0 0 4px; }
.credential-item p { font-size: 12px; color: var(--muted); margin: 0; }
.credential-mark { color: var(--cyan); }

/* 05 Contact Section & LatentForce Constellation Canvas */
.contact-section {
  position: relative;
  overflow: hidden;
  background-color: #0b1120;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 90px 0;
}
#electric-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
.contact-inner {
  position: relative;
  z-index: 2;
}
.contact-inner h2 { font-size: clamp(38px, 5vw, 58px); margin: 0 0 17px; }
.contact-copy { color: var(--muted); font-size: 14px; max-width: 540px; margin: 20px 0 25px; }

/* Footer */
.site-footer {
  width: min(1180px, calc(100% - 48px));
  margin: auto;
  min-height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.footer-brand .brand-mark { font-size: 25px; }
.site-footer p, .back-top { font-size: 10px;
