---
layout: single
title: AP Calculus BC
---

<style>
.page__title { display: none; }
#main { max-width: none !important; padding: 0 !important; }
.page__content { max-width: none !important; padding: 0 !important; }

.course-header {
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  padding: 48px 40px;
  color: white;
}
.course-header h1 { font-size: 32px; font-weight: 800; margin-bottom: 8px; color: #fff; }
.course-header p { font-size: 15px; color: #bfdbfe; margin: 0; }
.course-header-meta { display: flex; gap: 20px; margin-top: 16px; }
.course-header-meta span { font-size: 13px; color: #93c5fd; }

.course-body { max-width: 800px; margin: 0 auto; padding: 40px 24px; }
.course-section-title { font-size: 13px; font-weight: 700; color: #64748b; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 16px; }

.unit-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  margin-bottom: 10px;
  background: #fff;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.unit-item:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-color: #c7d2fe; }
.unit-item.free { border-left: 3px solid #1a56db; }
.unit-item.locked { cursor: pointer; }

.unit-left { display: flex; align-items: center; gap: 16px; }
.unit-num {
  width: 38px; height: 38px; border-radius: 50%;
  background: #eff6ff; color: #1a56db;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; flex-shrink: 0;
}
.unit-item.locked .unit-num { background: #f1f5f9; color: #94a3b8; }
.unit-info {}
.unit-title { font-size: 15px; font-weight: 600; color: #0f172a; }
.unit-sub { font-size: 12px; color: #64748b; margin-top: 3px; }
.unit-free-badge {
  font-size: 10px; font-weight: 700; color: #059669;
  background: #d1fae5; padding: 2px 8px; border-radius: 10px;
  margin-left: 8px; vertical-align: middle;
}

.unit-right { display: flex; align-items: center; gap: 10px; }
.unit-lock { font-size: 18px; }
.unit-arrow { color: #94a3b8; font-size: 16px; }

/* Modal */
.modal-overlay {
  display: none; position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
  align-items: center; justify-content: center;
}
.modal-overlay.show { display: flex; }
.modal {
  background: white; border-radius: 16px;
  padding: 40px 36px; max-width: 420px; width: 90%;
  text-align: center; position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}
.modal-icon { font-size: 40px; margin-bottom: 12px; }
.modal h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; color: #0f172a; }
.modal p { font-size: 14px; color: #64748b; margin-bottom: 24px; line-height: 1.6; }
.modal-price { font-size: 32px; font-weight: 800; color: #1a56db; margin-bottom: 8px; }
.modal-price-sub { font-size: 12px; color: #94a3b8; margin-bottom: 24px; }
.modal-btn {
  display: block; width: 100%;
  padding: 13px; background: #1a56db; color: white;
  border: none; border-radius: 8px;
  font-size: 15px; font-weight: 600; cursor: pointer;
  margin-bottom: 10px; text-decoration: none;
  transition: background 0.2s;
}
.modal-btn:hover { background: #1d4ed8; color: white; }
.modal-btn.secondary {
  background: #f1f5f9; color: #0f172a;
}
.modal-btn.secondary:hover { background: #e2e8f0; color: #0f172a; }
.modal-close {
  position: absolute; top: 16px; right: 18px;
  font-size: 20px; cursor: pointer; color: #94a3b8;
  background: none; border: none; padding: 4px;
}
.modal-close:hover { color: #0f172a; }
</style>

<div class="course-header">
  <h1>AP Calculus BC</h1>
  <p>Full exam coverage with detailed explanations for every question.</p>
  <div class="course-header-meta">
    <span>📚 8 Units</span>
    <span>❓ 320 Questions</span>
    <span>🔓 Unit 1 Free</span>
  </div>
</div>

<div class="course-body">
  <div class="course-section-title">Course Units</div>

  <div class="unit-item free" onclick="openUnit(false, 'Unit 1: Limits and Continuity')">
    <div class="unit-left">
      <div class="unit-num">1</div>
      <div class="unit-info">
        <div class="unit-title">Unit 1: Limits and Continuity <span class="unit-free-badge">FREE</span></div>
        <div class="unit-sub">15 questions · Squeeze theorem, IVT, limit definition</div>
      </div>
    </div>
    <div class="unit-right">
      <span class="unit-lock">🔓</span>
      <span class="unit-arrow">›</span>
    </div>
  </div>

  <div class="unit-item locked" onclick="openUnit(true, 'Unit 2: Differentiation')">
    <div class="unit-left">
      <div class="unit-num">2</div>
      <div class="unit-info">
        <div class="unit-title">Unit 2: Differentiation</div>
        <div class="unit-sub">40 questions · Chain rule, implicit differentiation, derivatives of inverses</div>
      </div>
    </div>
    <div class="unit-right">
      <span class="unit-lock">🔒</span>
    </div>
  </div>

  <div class="unit-item locked" onclick="openUnit(true, 'Unit 3: Applications of Derivatives')">
    <div class="unit-left">
      <div class="unit-num">3</div>
      <div class="unit-info">
        <div class="unit-title">Unit 3: Applications of Derivatives</div>
        <div class="unit-sub">45 questions · MVT, optimization, related rates, L'Hôpital</div>
      </div>
    </div>
    <div class="unit-right">
      <span class="unit-lock">🔒</span>
    </div>
  </div>

  <div class="unit-item locked" onclick="openUnit(true, 'Unit 4: Integration')">
    <div class="unit-left">
      <div class="unit-num">4</div>
      <div class="unit-info">
        <div class="unit-title">Unit 4: Integration</div>
        <div class="unit-sub">50 questions · Riemann sums, FTC, u-substitution</div>
      </div>
    </div>
    <div class="unit-right">
      <span class="unit-lock">🔒</span>
    </div>
  </div>

  <div class="unit-item locked" onclick="openUnit(true, 'Unit 5: Applications of Integration')">
    <div class="unit-left">
      <div class="unit-num">5</div>
      <div class="unit-info">
        <div class="unit-title">Unit 5: Applications of Integration</div>
        <div class="unit-sub">40 questions · Area, volume, arc length, particle motion</div>
      </div>
    </div>
    <div class="unit-right">
      <span class="unit-lock">🔒</span>
    </div>
  </div>

  <div class="unit-item locked" onclick="openUnit(true, 'Unit 6: Differential Equations')">
    <div class="unit-left">
      <div class="unit-num">6</div>
      <div class="unit-info">
        <div class="unit-title">Unit 6: Differential Equations</div>
        <div class="unit-sub">35 questions · Slope fields, Euler's method, logistic growth</div>
      </div>
    </div>
    <div class="unit-right">
      <span class="unit-lock">🔒</span>
    </div>
  </div>

  <div class="unit-item locked" onclick="openUnit(true, 'Unit 7: Parametric, Polar & Vectors')">
    <div class="unit-left">
      <div class="unit-num">7</div>
      <div class="unit-info">
        <div class="unit-title">Unit 7: Parametric, Polar & Vectors</div>
        <div class="unit-sub">30 questions · Polar area, parametric derivatives, vector-valued functions</div>
      </div>
    </div>
    <div class="unit-right">
      <span class="unit-lock">🔒</span>
    </div>
  </div>

  <div class="unit-item locked" onclick="openUnit(true, 'Unit 8: Infinite Sequences & Series')">
    <div class="unit-left">
      <div class="unit-num">8</div>
      <div class="unit-info">
        <div class="unit-title">Unit 8: Infinite Sequences & Series</div>
        <div class="unit-sub">45 questions · Convergence tests, Taylor series, power series</div>
      </div>
    </div>
    <div class="unit-right">
      <span class="unit-lock">🔒</span>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal-overlay" id="modal">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div id="modal-content"></div>
  </div>
</div>

<script>
const loggedIn = false;

function openUnit(locked, unitName) {
  if (!locked) {
    window.location.href = '/practice/?subject=calc-bc';
    return;
  }
  const content = document.getElementById('modal-content');
  if (!loggedIn) {
    content.innerHTML = `
      <div class="modal-icon">🔒</div>
      <h3>Login to Purchase</h3>
      <p>Create a free account or log in to unlock <strong>${unitName}</strong> and all other units in this course.</p>
      <a href="/login/" class="modal-btn">Log In</a>
      <a href="/login/" class="modal-btn secondary">Create Free Account</a>
    `;
  } else {
    content.innerHTML = `
      <div class="modal-icon">🎓</div>
      <h3>Unlock AP Calculus BC</h3>
      <p>Get full access to all 8 units — 320 practice questions with detailed step-by-step explanations.</p>
      <div class="modal-price">$29.99</div>
      <div class="modal-price-sub">One-time purchase · Lifetime access</div>
      <button class="modal-btn" onclick="fakePurchase()">Purchase Now →</button>
      <button class="modal-btn secondary" onclick="closeModal()">Maybe Later</button>
    `;
  }
  document.getElementById('modal').classList.add('show');
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
}

function fakePurchase() {
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-icon">🎉</div>
    <h3>Purchase Successful!</h3>
    <p>You now have full access to AP Calculus BC. Good luck on your exam!</p>
    <button class="modal-btn" onclick="closeModal()">Start Learning</button>
  `;
}

document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
</script>
