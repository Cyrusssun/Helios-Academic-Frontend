---
layout: single
title: Courses
permalink: /courses/
---

<style>
.page__title { display: none; }
#main { max-width: none !important; padding: 0 !important; }
.page__content { max-width: none !important; }

:root {
  --blue: #1a56db;
  --border: #e2e8f0;
  --white: #ffffff;
  --text: #0f172a;
  --muted: #64748b;
  --bg: #f8fafc;
}

.ap-section { max-width: 1100px; margin: 0 auto; padding: 60px 24px; }
.ap-section-header { text-align: center; margin-bottom: 40px; }
.ap-section-header h2 { font-size: 30px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
.ap-section-header p { font-size: 15px; color: var(--muted); }

.ap-subjects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
}
.ap-subject-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  display: block;
  transition: transform 0.2s, box-shadow 0.2s;
  border-top: 3px solid var(--blue);
}
.ap-subject-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
.ap-subject-card.math  { border-top-color: #6366f1; }
.ap-subject-card.sci   { border-top-color: #0d9488; }
.ap-subject-card.hist  { border-top-color: #b45309; }
.ap-subject-card.eng   { border-top-color: #7c3aed; }
.ap-subject-card.cs    { border-top-color: #1a56db; }
.ap-subject-icon { font-size: 28px; margin-bottom: 10px; display: block; }
.ap-subject-name { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.ap-subject-count { font-size: 12px; color: var(--muted); }
.ap-subject-tag {
  display: inline-block; margin-top: 10px;
  font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 3px 8px; border-radius: 4px;
  background: #eff6ff; color: var(--blue);
}
.ap-subject-tag.popular { background: #fef3c7; color: #92400e; }
</style>