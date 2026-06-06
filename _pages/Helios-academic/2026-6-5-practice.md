---
layout: single
title: Practice Questions
permalink: /practice/
---

<style>
.page__title { display: none; }
#main { max-width: none !important; padding: 0 !important; }
.page__content { max-width: none !important; padding: 0 !important; }

:root {
  --blue:#1a56db;--blue2:#1e429f;--indigo:#4338ca;
  --slate:#0f172a;--muted:#64748b;--border:#e2e8f0;
  --bg:#f8fafc;--white:#ffffff;--text:#0f172a;
  --green:#059669;--red:#dc2626;--gold:#f59e0b;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html,body{background:var(--bg);font-family:-apple-system,'Segoe UI',sans-serif;}

/* Layout */
.pr-wrap { display: grid; grid-template-columns: 260px 1fr; min-height: 100vh; }
@media(max-width:900px){.pr-wrap{grid-template-columns:1fr;}}

/* Sidebar */
.pr-sidebar {
  background: var(--white);
  border-right: 1px solid var(--border);
  padding: 24px 0;
  position: sticky; top: 0; height: 100vh; overflow-y: auto;
}
.pr-sidebar-section { padding: 0 16px 20px; border-bottom: 1px solid var(--border); margin-bottom: 20px; }
.pr-sidebar-label {
  font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--muted); font-weight: 700; margin-bottom: 10px; padding: 0 4px;
}
.pr-subject-btn {
  display: flex; align-items: center; gap: 10px;
  width: 100%; padding: 9px 12px; border-radius: 8px;
  border: none; background: none; cursor: pointer;
  font-size: 13px; color: var(--text); text-align: left;
  transition: background 0.15s; margin-bottom: 2px;
}
.pr-subject-btn:hover { background: #f1f5f9; }
.pr-subject-btn.active { background: #eff6ff; color: var(--blue); font-weight: 600; }
.pr-subject-btn .count {
  margin-left: auto; font-size: 11px;
  background: #f1f5f9; color: var(--muted);
  padding: 2px 7px; border-radius: 10px;
}
.pr-subject-btn.active .count { background: #dbeafe; color: var(--blue); }

/* Filter chips */
.pr-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 4px; }
.pr-chip {
  padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: 600;
  border: 1px solid var(--border); background: var(--white);
  color: var(--muted); cursor: pointer; transition: all 0.15s;
}
.pr-chip:hover { border-color: var(--blue); color: var(--blue); }
.pr-chip.active { background: var(--blue); color: #fff; border-color: var(--blue); }
.pr-chip.easy   { }
.pr-chip.med    { }
.pr-chip.hard   { }

/* Main content */
.pr-main { padding: 28px 24px; }
.pr-topbar {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
}
.pr-topbar h2 { font-size: 20px; font-weight: 700; color: var(--text); }
.pr-topbar-right { display: flex; gap: 10px; align-items: center; }
.pr-progress-bar {
  background: #e2e8f0; border-radius: 4px; height: 8px;
  width: 160px; overflow: hidden;
}
.pr-progress-fill { height: 100%; background: var(--green); border-radius: 4px; transition: width 0.4s; }
.pr-progress-text { font-size: 12px; color: var(--muted); }

/* Question card */
.pr-qcard {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s;
}
.pr-qcard:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
.pr-qcard-top {
  display: flex; align-items: flex-start;
  justify-content: space-between; margin-bottom: 16px; gap: 12px;
}
.pr-qtags { display: flex; gap: 6px; flex-wrap: wrap; }
.pr-tag {
  font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 3px 8px; border-radius: 4px; font-weight: 600;
}
.pr-tag.unit  { background: #eff6ff; color: var(--blue); }
.pr-tag.easy  { background: #d1fae5; color: #065f46; }
.pr-tag.med   { background: #fef3c7; color: #92400e; }
.pr-tag.hard  { background: #fee2e2; color: #991b1b; }
.pr-qnum { font-size: 12px; color: var(--muted); font-weight: 600; white-space: nowrap; }

.pr-qtext { font-size: 15px; color: var(--text); line-height: 1.7; margin-bottom: 20px; }
.pr-qtext code { background: #f1f5f9; padding: 1px 6px; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 13px; }

/* Options */
.pr-options { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
.pr-option {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 12px 16px; border-radius: 8px;
  border: 1px solid var(--border);
  cursor: pointer; transition: all 0.15s; font-size: 14px; color: var(--text);
}
.pr-option:hover { border-color: var(--blue); background: #f8fbff; }
.pr-option.selected { border-color: var(--blue); background: #eff6ff; }
.pr-option.correct  { border-color: var(--green); background: #f0fdf4; color: #065f46; }
.pr-option.wrong    { border-color: var(--red); background: #fef2f2; color: #991b1b; }
.pr-option-letter {
  width: 24px; height: 24px; border-radius: 50%;
  background: #f1f5f9; color: var(--muted);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; flex-shrink: 0;
}
.pr-option.selected .pr-option-letter { background: var(--blue); color: #fff; }
.pr-option.correct  .pr-option-letter { background: var(--green); color: #fff; }
.pr-option.wrong    .pr-option-letter { background: var(--red); color: #fff; }

/* Explanation */
.pr-explanation {
  display: none;
  background: #f0fdf4; border: 1px solid #bbf7d0;
  border-left: 4px solid var(--green);
  border-radius: 8px; padding: 16px; margin-top: 12px;
  font-size: 13px; color: #065f46; line-height: 1.7;
}
.pr-explanation.show { display: block; }
.pr-explanation.wrong-exp { background: #fef2f2; border-color: #fecaca; border-left-color: var(--red); color: #991b1b; }

/* Bottom bar */
.pr-qbottom { display: flex; justify-content: space-between; align-items: center; margin-top: 16px; flex-wrap: wrap; gap: 8px; }
.pr-submit-btn {
  padding: 9px 22px; background: var(--blue); color: #fff;
  border: none; border-radius: 7px; font-size: 13px; font-weight: 600;
  cursor: pointer; transition: background 0.2s;
}
.pr-submit-btn:hover { background: #1d4ed8; }
.pr-submit-btn:disabled { background: #94a3b8; cursor: not-allowed; }
.pr-next-btn {
  padding: 9px 22px; background: #0f172a; color: #fff;
  border: none; border-radius: 7px; font-size: 13px; font-weight: 600;
  cursor: pointer; display: none; transition: background 0.2s;
}
.pr-next-btn:hover { background: #1e293b; }
.pr-result-badge {
  font-size: 13px; font-weight: 700; display: none;
}
.pr-result-badge.correct { color: var(--green); }
.pr-result-badge.wrong   { color: var(--red); }

/* Pagination */
.pr-pagination {
  display: flex; justify-content: center; gap: 8px;
  margin-top: 28px; flex-wrap: wrap;
}
.pr-page-btn {
  width: 36px; height: 36px; border-radius: 8px;
  border: 1px solid var(--border); background: var(--white);
  font-size: 13px; cursor: pointer; transition: all 0.15s;
  display: flex; align-items: center; justify-content: center;
}
.pr-page-btn:hover { border-color: var(--blue); color: var(--blue); }
.pr-page-btn.active { background: var(--blue); color: #fff; border-color: var(--blue); }
</style>

<div class="pr-wrap">

  <!-- SIDEBAR -->
  <div class="pr-sidebar">
    <div class="pr-sidebar-section">
      <div class="pr-sidebar-label">Subject</div>
      <button class="pr-subject-btn active" onclick="setSubject('calc-bc', this)">
        <span>∫</span> Calculus BC <span class="count">320</span>
      </button>
      <button class="pr-subject-btn" onclick="setSubject('calc-ab', this)">
        <span>∂</span> Calculus AB <span class="count">280</span>
      </button>
      <button class="pr-subject-btn" onclick="setSubject('stats', this)">
        <span>σ</span> Statistics <span class="count">260</span>
      </button>
      <button class="pr-subject-btn" onclick="setSubject('physics', this)">
        <span>⚡</span> Physics C <span class="count">240</span>
      </button>
      <button class="pr-subject-btn" onclick="setSubject('chem', this)">
        <span>⚗️</span> Chemistry <span class="count">300</span>
      </button>
      <button class="pr-subject-btn" onclick="setSubject('bio', this)">
        <span>🧬</span> Biology <span class="count">290</span>
      </button>
      <button class="pr-subject-btn" onclick="setSubject('csa', this)">
        <span>💻</span> CS A <span class="count">220</span>
      </button>
      <button class="pr-subject-btn" onclick="setSubject('ush', this)">
        <span>🏛️</span> US History <span class="count">310</span>
      </button>
      <button class="pr-subject-btn" onclick="setSubject('lang', this)">
        <span>✍️</span> English Lang <span class="count">180</span>
      </button>
      <button class="pr-subject-btn" onclick="setSubject('econ', this)">
        <span>📈</span> Macro Econ <span class="count">200</span>
      </button>
    </div>
    <div class="pr-sidebar-section">
      <div class="pr-sidebar-label">Difficulty</div>
      <div class="pr-chips">
        <span class="pr-chip active" onclick="toggleDiff('all',this)">All</span>
        <span class="pr-chip easy" onclick="toggleDiff('easy',this)">Easy</span>
        <span class="pr-chip med"  onclick="toggleDiff('med',this)">Medium</span>
        <span class="pr-chip hard" onclick="toggleDiff('hard',this)">Hard</span>
      </div>
    </div>
    <div class="pr-sidebar-section">
      <div class="pr-sidebar-label">Unit</div>
      <div class="pr-chips" id="unitChips"></div>
    </div>
  </div>

  <!-- MAIN -->
  <div class="pr-main">
    <div class="pr-topbar">
      <h2 id="subjectTitle">AP Calculus BC</h2>
      <div class="pr-topbar-right">
        <span class="pr-progress-text" id="progressText">0 / 10 answered</span>
        <div class="pr-progress-bar">
          <div class="pr-progress-fill" id="progressFill" style="width:0%"></div>
        </div>
      </div>
    </div>
    <div id="questionList"></div>
    <div class="pr-pagination" id="pagination"></div>
  </div>

</div>

<script>
// 获取 baseurl 前缀
function getBaseUrl() {
  return '{{ site.baseurl }}';
}

const QUESTIONS = {
  'calc-bc': {
    name: 'AP Calculus BC',
    units: ['Unit 1: Limits','Unit 2: Derivatives','Unit 3: Integrals','Unit 4: Series','Unit 5: Parametric'],
    questions: [
      { id:1, unit:'Unit 2: Derivatives', diff:'med', text:'Let f(x) = x³ · eˣ. Which of the following is f\'(x)?', options:['3x² · eˣ','x³ · eˣ + 3x² · eˣ','3x² · eˣ + x³','x³ · eˣ'], answer:1, explanation:'By the product rule: f\'(x) = x³·(eˣ)\' + (x³)\'·eˣ = x³eˣ + 3x²eˣ = eˣ(x³ + 3x²).' },
      { id:2, unit:'Unit 1: Limits', diff:'easy', text:'What is lim(x→2) (x² - 4) / (x - 2)?', options:['0','2','4','Does not exist'], answer:2, explanation:'Factor: (x²-4)/(x-2) = (x+2)(x-2)/(x-2) = x+2. As x→2, this approaches 2+2 = 4.' },
      { id:3, unit:'Unit 3: Integrals', diff:'hard', text:'Evaluate ∫₀¹ x · ln(x+1) dx using integration by parts.', options:['(1/2)ln2 - 1/4','ln2 - 1/2','(3/4)ln2 - 1/4','(1/2)ln2 - 3/8'], answer:3, explanation:'Let u = ln(x+1), dv = x dx. Then du = 1/(x+1)dx, v = x²/2. Applying IBP and evaluating gives (1/2)ln2 - 3/8.' },
      { id:4, unit:'Unit 4: Series', diff:'hard', text:'Which of the following series converges?', options:['Σ(1/n)','Σ(1/n²)','Σ(n/(n+1))','Σ((-1)ⁿ · n)'], answer:1, explanation:'Σ(1/n²) is a p-series with p=2>1, so it converges by the p-series test. The harmonic series Σ(1/n) diverges.' },
      { id:5, unit:'Unit 2: Derivatives', diff:'easy', text:'If g(x) = sin(x²), find g\'(x).', options:['cos(x²)','2x·cos(x²)','2cos(x²)','cos(2x)'], answer:1, explanation:'By the chain rule: g\'(x) = cos(x²)·(x²)\' = cos(x²)·2x = 2x·cos(x²).' },
    ]
  },
  'csa': {
    name: 'AP Computer Science A',
    units: ['Unit 1: Primitive Types','Unit 2: Objects','Unit 3: Boolean','Unit 4: Iteration','Unit 5: Writing Classes','Unit 6: Arrays','Unit 7: ArrayList','Unit 8: 2D Arrays','Unit 9: Inheritance','Unit 10: Recursion'],
    questions: [
      { id:1, unit:'Unit 4: Iteration', diff:'easy', text:'What is the output of the following code?\n\nint x = 0;\nfor (int i = 1; i <= 4; i++) { x += i; }\nSystem.out.println(x);', options:['4','10','16','0'], answer:1, explanation:'The loop computes 1+2+3+4 = 10. Variable x accumulates each value of i.' },
      { id:2, unit:'Unit 9: Inheritance', diff:'med', text:'A class Dog extends Animal. Animal has a method speak() that prints "...". Dog overrides speak() to print "Woof". If Animal a = new Dog(); is declared, what does a.speak() print?', options:['"..."','"Woof"','Compile error','Runtime error'], answer:1, explanation:'Java uses dynamic dispatch — the actual type (Dog) determines which method is called, not the declared type (Animal). This prints "Woof".' },
      { id:3, unit:'Unit 10: Recursion', diff:'hard', text:'What is the return value of mystery(5) given:\nint mystery(int n) {\n  if (n == 0) return 0;\n  return n + mystery(n-1);\n}', options:['5','10','15','25'], answer:2, explanation:'mystery(5) = 5 + mystery(4) = 5+4+3+2+1+0 = 15. This computes the sum 1 through n.' },
      { id:4, unit:'Unit 6: Arrays', diff:'easy', text:'int[] arr = {3, 1, 4, 1, 5}; What is arr[arr.length - 1]?', options:['3','1','5','Index out of bounds'], answer:2, explanation:'arr.length is 5, so arr.length-1 is 4. arr[4] is the last element, which is 5.' },
      { id:5, unit:'Unit 2: Objects', diff:'med', text:'Which of the following correctly compares two String objects s1 and s2 for equal content?', options:['s1 == s2','s1.equals(s2)','s1.compareTo(s2)','s1 = s2'], answer:1, explanation:'== compares references, not content. .equals() compares the actual string values. Always use .equals() for String content comparison.' },
    ]
  }
};

// Default questions for other subjects
const DEFAULT_Q = (name, units) => ({
  name,
  units,
  questions: [
    { id:1, unit: units[0], diff:'easy', text:`Sample question 1 for ${name}. This is a placeholder question demonstrating the practice system.`, options:['Option A — correct answer','Option B','Option C','Option D'], answer:0, explanation:`This is the explanation for question 1 in ${name}. In production, each question will have a detailed explanation.` },
    { id:2, unit: units[1] || units[0], diff:'med', text:`Sample question 2 for ${name}. Medium difficulty question testing core concepts.`, options:['Option A','Option B — correct answer','Option C','Option D'], answer:1, explanation:`Explanation for question 2. The correct answer is B because...` },
    { id:3, unit: units[0], diff:'hard', text:`Sample question 3 for ${name}. Hard difficulty question requiring advanced understanding.`, options:['Option A','Option B','Option C — correct answer','Option D'], answer:2, explanation:`Explanation for question 3. This requires knowledge of...` },
  ]
});

['stats','physics','chem','bio','calc-ab','ush','lang','econ'].forEach(k => {
  const names = {stats:'AP Statistics',physics:'AP Physics C',chem:'AP Chemistry',bio:'AP Biology','calc-ab':'AP Calculus AB',ush:'AP US History',lang:'AP English Language',econ:'AP Macroeconomics'};
  const units = {stats:['Unit 1: Exploring Data','Unit 2: Sampling','Unit 3: Probability','Unit 4: Inference'],physics:['Unit 1: Kinematics','Unit 2: Forces','Unit 3: Work & Energy','Unit 4: Momentum','Unit 5: Rotation','Unit 6: E&M'],chem:['Unit 1: Atomic Structure','Unit 2: Molecular & Ionic Bonding','Unit 3: IMF','Unit 4: Reactions'],bio:['Unit 1: Chemistry of Life','Unit 2: Cell Structure','Unit 3: Cell Energetics','Unit 4: Cell Communication','Unit 5: Heredity'],'calc-ab':['Unit 1: Limits','Unit 2: Derivatives','Unit 3: Apps of Derivatives','Unit 4: Integrals','Unit 5: Apps of Integrals'],ush:['Period 1: 1491–1607','Period 2: 1607–1754','Period 3: 1754–1800','Period 4: 1800–1848','Period 5: 1844–1877'],lang:['Unit 1: Rhetoric','Unit 2: Argumentation','Unit 3: Research','Unit 4: Claim & Evidence','Unit 5: Synthesis'],econ:['Unit 1: Basic Economic Concepts','Unit 2: Economic Indicators','Unit 3: National Income','Unit 4: Financial Sector','Unit 5: Long-Run Consequences','Unit 6: Open Economy']};
  if (!QUESTIONS[k]) QUESTIONS[k] = DEFAULT_Q(names[k], units[k]);
});

let currentSubject = 'calc-bc';
let currentPage    = 0;
const PER_PAGE     = 5;
let answered       = {};

function setSubject(key, btn) {
  currentSubject = key;
  currentPage    = 0;
  answered       = {};
  document.querySelectorAll('.pr-subject-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAll();
  
  // 更新 URL 参数，保留 baseurl 路径
  const url = getBaseUrl() + '/practice/?subject=' + key;
  window.history.pushState({}, '', url);
}

function toggleDiff(diff, chip) {
  document.querySelectorAll('.pr-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  renderAll();
}

function renderAll() {
  const data = QUESTIONS[currentSubject];
  document.getElementById('subjectTitle').textContent = data.name;

  // Unit chips
  const uc = document.getElementById('unitChips');
  uc.innerHTML = '<span class="pr-chip active" style="margin-bottom:4px;" onclick="filterUnit(\'all\',this)">All Units</span>';
  data.units.forEach(u => {
    const short = u.split(':')[0];
    uc.innerHTML += `<span class="pr-chip" style="margin-bottom:4px;" onclick="filterUnit('${u}',this)">${short}</span>`;
  });

  renderQuestions();
}

function filterUnit(unit, chip) {
  document.querySelectorAll('#unitChips .pr-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  currentPage = 0;
  renderQuestions();
}

function renderQuestions() {
  const data   = QUESTIONS[currentSubject];
  const diff   = document.querySelector('.pr-chips .pr-chip.active')?.textContent.toLowerCase() || 'all';
  const unitEl = document.querySelector('#unitChips .pr-chip.active');
  const unit   = unitEl ? unitEl.closest('[onclick]')?.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 'all' : 'all';

  let qs = data.questions;
  if (diff !== 'all') qs = qs.filter(q => q.diff === diff);
  if (unit !== 'all') qs = qs.filter(q => q.unit === unit);

  const total    = qs.length;
  const start    = currentPage * PER_PAGE;
  const pageQs   = qs.slice(start, start + PER_PAGE);
  const doneCount = Object.keys(answered).length;

  document.getElementById('progressText').textContent = `${doneCount} / ${total} answered`;
  document.getElementById('progressFill').style.width = total ? (doneCount/total*100)+'%' : '0%';

  const list = document.getElementById('questionList');
  list.innerHTML = '';
  pageQs.forEach((q, idx) => {
    const globalIdx = start + idx;
    const isAnswered = answered[q.id] !== undefined;
    const selected   = answered[q.id];

    const diffLabel = q.diff === 'easy' ? 'Easy' : q.diff === 'med' ? 'Medium' : 'Hard';
    const shortUnit = q.unit.split(':')[0];

    const optionsHtml = q.options.map((opt, oi) => {
      let cls = 'pr-option';
      if (isAnswered) {
        if (oi === q.answer) cls += ' correct';
        else if (oi === selected) cls += ' wrong';
      } else if (oi === selected) cls += ' selected';
      return `<div class="${cls}" onclick="${isAnswered ? '' : `selectOption(${q.id},${oi},${q.answer})`}">
        <span class="pr-option-letter">${String.fromCharCode(65+oi)}</span>
        <span>${opt}</span>
      </div>`;
    }).join('');

    const expCls = isAnswered ? `pr-explanation show ${selected !== q.answer ? 'wrong-exp' : ''}` : 'pr-explanation';
    const expIcon = isAnswered && selected === q.answer ? '✅' : isAnswered ? '❌' : '';
    const resultBadge = isAnswered ? `<span class="pr-result-badge ${selected===q.answer?'correct':'wrong'}" style="display:inline;">${selected===q.answer?'✅ Correct':'❌ Incorrect'}</span>` : '';

    list.innerHTML += `
      <div class="pr-qcard" id="qcard-${q.id}">
        <div class="pr-qcard-top">
          <div class="pr-qtags">
            <span class="pr-tag unit">${shortUnit}</span>
            <span class="pr-tag ${q.diff}">${diffLabel}</span>
          </div>
          <span class="pr-qnum">Q${globalIdx+1}</span>
        </div>
        <div class="pr-qtext">${q.text.replace(/\n/g,'<br>')}</div>
        <div class="pr-options">${optionsHtml}</div>
        <div class="${expCls}">${expIcon} ${q.explanation}</div>
        <div class="pr-qbottom">
          ${resultBadge}
          ${!isAnswered ? `<button class="pr-submit-btn" id="sub-${q.id}" onclick="submitAnswer(${q.id},${q.answer})" disabled>Check Answer</button>` : '<span></span>'}
        </div>
      </div>`;
  });

  // Pagination
  const totalPages = Math.ceil(qs.length / PER_PAGE);
  const pg = document.getElementById('pagination');
  pg.innerHTML = '';
  for (let i = 0; i < totalPages; i++) {
    pg.innerHTML += `<button class="pr-page-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i+1}</button>`;
  }
}

function selectOption(qid, oi, correct) {
  const btn = document.getElementById(`sub-${qid}`);
  if (btn) btn.disabled = false;
  const card = document.getElementById(`qcard-${qid}`);
  card.querySelectorAll('.pr-option').forEach((el,i) => {
    el.classList.toggle('selected', i === oi);
  });
  card.dataset.selected = oi;
}

function submitAnswer(qid, correct) {
  const card = document.getElementById(`qcard-${qid}`);
  const sel  = parseInt(card.dataset.selected);
  answered[qid] = sel;
  renderQuestions();
}

function goPage(p) {
  currentPage = p;
  renderQuestions();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Init - 从 URL 参数读取 subject，并正确处理 baseurl
const params = new URLSearchParams(window.location.search);
const subParam = params.get('subject');
if (subParam && QUESTIONS[subParam]) {
  currentSubject = subParam;
  document.querySelectorAll('.pr-subject-btn').forEach((btn, idx) => {
    const keys = ['calc-bc','calc-ab','stats','physics','chem','bio','csa','ush','lang','econ'];
    if (keys[idx] === subParam) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
renderAll();
</script>