// ==========================================================================
// script.js — Biloldin Portfoliosi
// ==========================================================================

/* ---- Mobil navigatsiya (barcha sahifalarda ishlaydi) ---- */
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ---- 1) Counter App (index.html) ---- */
function initCounter() {
  const valueEl = document.getElementById("counterValue");
  const increaseBtn = document.getElementById("counterIncrease");
  const decreaseBtn = document.getElementById("counterDecrease");
  const resetBtn = document.getElementById("counterReset");

  // Bu sahifada counter bo'lmasa, funksiyani to'xtatamiz
  if (!valueEl || !increaseBtn || !decreaseBtn || !resetBtn) return;

  let count = 0;

  function render() {
    valueEl.textContent = String(count);
    decreaseBtn.disabled = count <= 0;
  }

  increaseBtn.addEventListener("click", () => {
    count += 1;
    render();
  });

  decreaseBtn.addEventListener("click", () => {
    count -= 1;
    render();
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    render();
  });

  render();
}

/* ---- 2) Character Counter (about.html) ---- */
function initCharCounter() {
  const textarea = document.getElementById("charInput");
  const countEl = document.getElementById("charCount");

  if (!textarea || !countEl) return;

  textarea.addEventListener("input", () => {
    countEl.textContent = String(textarea.value.length);
  });
}

/* ---- 3) Contact form (contact.html) — oddiy client-side validatsiya ---- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Iltimos, to'g'ri email manzil kiriting.");
      return;
    }

    alert(`Rahmat, ${name}! Xabaringiz qabul qilindi.`);
    form.reset();
  });
}

/* ---- Ishga tushirish ---- */
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initCounter();
  initCharCounter();
  initContactForm();
});
