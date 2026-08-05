/* ==========================================================================
   MAIN.JS
   Header sticky, menu mobile, scroll, botão voltar ao topo e dados dinâmicos.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initBackToTop();
  initDynamicContent();
});

/* ---------- Header: transparente → branco com blur ao rolar ---------- */
function initHeader() {
  const header = document.getElementById('header');
  const logo = header.querySelector('.header__logo');
  const SCROLL_THRESHOLD = 60;

  function atualizarHeader() {
    const rolou = window.scrollY > SCROLL_THRESHOLD;
    header.classList.toggle('header--scrolled', rolou);
    logo.classList.toggle('is-on-image', !rolou);
  }

  atualizarHeader();
  window.addEventListener('scroll', atualizarHeader, { passive: true });
}

/* ---------- Menu mobile ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('headerToggle');
  const links = document.getElementById('headerLinks');

  toggle.addEventListener('click', () => {
    const aberto = links.classList.toggle('is-open');
    toggle.classList.toggle('is-open', aberto);
    toggle.setAttribute('aria-expanded', String(aberto));
    document.body.style.overflow = aberto ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- Botão voltar ao topo ---------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  const SCROLL_THRESHOLD = 400;

  function atualizarVisibilidade() {
    btn.classList.toggle('is-visible', window.scrollY > SCROLL_THRESHOLD);
  }

  atualizarVisibilidade();
  window.addEventListener('scroll', atualizarVisibilidade, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Conteúdo dinâmico a partir de config.js ---------- */
function initDynamicContent() {
  if (typeof SITE_CONFIG === 'undefined') return;

  const { brandName, businessName, tagline, address, schedule, social, footer } = SITE_CONFIG;

  // Logo / marca
  document.querySelectorAll('[data-config="brand"]').forEach((el) => {
    el.textContent = brandName;
  });

  // Nome completo do negócio
  document.querySelectorAll('[data-config="business"]').forEach((el) => {
    el.textContent = businessName;
  });

  // Tagline
  document.querySelectorAll('[data-config="tagline"]').forEach((el) => {
    el.textContent = tagline;
  });

  // Endereço
  document.querySelectorAll('[data-config="address"]').forEach((el) => {
    el.textContent = address.full;
  });

  // Horário
  document.querySelectorAll('[data-config="schedule-days"]').forEach((el) => {
    el.textContent = schedule.days;
  });

  document.querySelectorAll('[data-config="schedule-hours"]').forEach((el) => {
    el.textContent = schedule.hours;
  });

  // Instagram
  document.querySelectorAll('[data-config="instagram"]').forEach((el) => {
    el.setAttribute('href', social.instagram);
  });

  // Crédito do rodapé
  const creditEl = document.querySelector('[data-config="footer-credit"]');
  if (creditEl) creditEl.textContent = footer.credit;

  // Ano dinâmico no rodapé
  const anoEl = document.getElementById('anoAtual');
  if (anoEl) anoEl.textContent = new Date().getFullYear();
}
