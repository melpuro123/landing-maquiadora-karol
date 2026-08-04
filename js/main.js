/* ==========================================================================
   MAIN.JS
   Comportamentos gerais da página: header com blur ao rolar, menu mobile,
   reveal suave dos blocos ao entrar na viewport, ano dinâmico no rodapé.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header: transparente -> branco com blur ao rolar ---------- */
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

  /* ---------- Menu mobile ---------- */
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

  /* ---------- Reveal suave ao rolar (fade / slide / zoom leve) ---------- */
  const elementosReveal = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && elementosReveal.length) {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elementosReveal.forEach((el) => observer.observe(el));
  } else {
    // Fallback: navegadores muito antigos apenas exibem o conteúdo
    elementosReveal.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Ano dinâmico no rodapé ---------- */
  const anoEl = document.getElementById('anoAtual');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

});
