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

<div class="ap-section">
  <div class="ap-section-header">
    <h2>Choose Your Subject</h2>
    <p>Pick any AP course to start practicing. Questions are organized by unit and difficulty.</p>
  </div>
  <div class="ap-subjects">
    <a href="{{ site.baseurl }}/courses/calc-bc/" class="ap-subject-card math">
      <span class="ap-subject-icon">∫</span>
      <div class="ap-subject-name">AP Calculus BC</div>
      <div class="ap-subject-count">320 questions · 8 units</div>
      <span class="ap-subject-tag popular">🔥 Popular</span>
    </a>
    <a href="{{ site.baseurl }}/courses/calc-ab/" class="ap-subject-card math">
      <span class="ap-subject-icon">∂</span>
      <div class="ap-subject-name">AP Calculus AB</div>
      <div class="ap-subject-count">280 questions · 8 units</div>
      <span class="ap-subject-tag">Math</span>
    </a>
    <a href="{{ site.baseurl }}/courses/stats/" class="ap-subject-card math">
      <span class="ap-subject-icon">σ</span>
      <div class="ap-subject-name">AP Statistics</div>
      <div class="ap-subject-count">260 questions · 9 units</div>
      <span class="ap-subject-tag">Math</span>
    </a>
    <a href="{{ site.baseurl }}/courses/physics-c/" class="ap-subject-card sci">
      <span class="ap-subject-icon">⚡</span>
      <div class="ap-subject-name">AP Physics C</div>
      <div class="ap-subject-count">240 questions · 6 units</div>
      <span class="ap-subject-tag popular">🔥 Popular</span>
    </a>
    <a href="{{ site.baseurl }}/courses/chem/" class="ap-subject-card sci">
      <span class="ap-subject-icon">⚗️</span>
      <div class="ap-subject-name">AP Chemistry</div>
      <div class="ap-subject-count">300 questions · 9 units</div>
      <span class="ap-subject-tag">Science</span>
    </a>
    <a href="{{ site.baseurl }}/courses/bio/" class="ap-subject-card sci">
      <span class="ap-subject-icon">🧬</span>
      <div class="ap-subject-name">AP Biology</div>
      <div class="ap-subject-count">290 questions · 8 units</div>
      <span class="ap-subject-tag">Science</span>
    </a>
    <a href="{{ site.baseurl }}/courses/csa/" class="ap-subject-card cs">
      <span class="ap-subject-icon">💻</span>
      <div class="ap-subject-name">AP Computer Science A</div>
      <div class="ap-subject-count">220 questions · 10 units</div>
      <span class="ap-subject-tag popular">🔥 Popular</span>
    </a>
    <a href="{{ site.baseurl }}/courses/ush/" class="ap-subject-card hist">
      <span class="ap-subject-icon">🏛️</span>
      <div class="ap-subject-name">AP US History</div>
      <div class="ap-subject-count">310 questions · 9 periods</div>
      <span class="ap-subject-tag">History</span>
    </a>
    <a href="{{ site.baseurl }}/courses/lang/" class="ap-subject-card eng">
      <span class="ap-subject-icon">✍️</span>
      <div class="ap-subject-name">AP English Language</div>
      <div class="ap-subject-count">180 questions · 5 units</div>
      <span class="ap-subject-tag">English</span>
    </a>
    <a href="{{ site.baseurl }}/courses/econ/" class="ap-subject-card hist">
      <span class="ap-subject-icon">📈</span>
      <div class="ap-subject-name">AP Macroeconomics</div>
      <div class="ap-subject-count">200 questions · 6 units</div>
      <span class="ap-subject-tag">Social Science</span>
    </a>
  </div>
</div>